(function () {
  const STORAGE_KEY = 'openai_exam_state_v1';
  const LETTERS = ['A', 'B', 'C', 'D'];

  const data = window.EXAM_DATA;
  if (!data || !Array.isArray(data.chapters)) {
    throw new Error('EXAM_DATA is missing or invalid. Ensure exam-data.js loads before app.js.');
  }

  const chapterIndex = new Map(data.chapters.map((chapter) => [chapter.id, chapter]));

  const state = {
    activeChapterId: data.chapters[0]?.id,
    activeQuestionIndex: 0,
    reviewFilter: 'all',
    chapters: {},
    view: 'landing',
  };

  const dom = {
    totalQuestionsStat: document.getElementById('totalQuestionsStat'),
    currentChapterStat: document.getElementById('currentChapterStat'),
    answeredStat: document.getElementById('answeredStat'),
    completedStat: document.getElementById('completedStat'),

    landingView: document.getElementById('landingView'),
    chapterCardsGrid: document.getElementById('chapterCardsGrid'),
    quizView: document.getElementById('quizView'),
    backToLandingBtn: document.getElementById('backToLandingBtn'),

    chapterProgressText: document.getElementById('chapterProgressText'),
    chapterSubmissionState: document.getElementById('chapterSubmissionState'),
    chapterProgressBar: document.getElementById('chapterProgressBar'),
    chapterProgressFill: document.getElementById('chapterProgressFill'),
    questionIndexText: document.getElementById('questionIndexText'),

    prevQuestionBtn: document.getElementById('prevQuestionBtn'),
    nextQuestionBtn: document.getElementById('nextQuestionBtn'),
    submitChapterBtn: document.getElementById('submitChapterBtn'),
    resetChapterBtn: document.getElementById('resetChapterBtn'),

    questionTitle: document.getElementById('questionTitle'),
    questionStem: document.getElementById('questionStem'),
    optionsList: document.getElementById('optionsList'),
    questionFeedback: document.getElementById('questionFeedback'),
    questionRationale: document.getElementById('questionRationale'),

    navigatorGrid: document.getElementById('navigatorGrid'),

    reviewPanel: document.getElementById('reviewPanel'),
    scoreValue: document.getElementById('scoreValue'),
    percentValue: document.getElementById('percentValue'),
    correctCount: document.getElementById('correctCount'),
    incorrectCount: document.getElementById('incorrectCount'),
    unansweredCount: document.getElementById('unansweredCount'),
    attemptedCount: document.getElementById('attemptedCount'),
    reviewFilters: document.getElementById('reviewFilters'),
    reviewList: document.getElementById('reviewList'),
    controlsBar: document.querySelector('.controls--bottom'),
  };

  initializeState();
  bindEvents();
  render();

  function initializeState() {
    data.chapters.forEach((chapter) => {
      state.chapters[chapter.id] = {
        answers: createEmptyAnswers(chapter.questionCount),
        submitted: false,
      };
    });

    const persisted = loadPersistedState();
    if (persisted) {
      if (persisted.activeChapterId && chapterIndex.has(persisted.activeChapterId)) {
        state.activeChapterId = persisted.activeChapterId;
      }

      if (Number.isInteger(persisted.activeQuestionIndex)) {
        state.activeQuestionIndex = persisted.activeQuestionIndex;
      }

      if (persisted.reviewFilter && ['all', 'incorrect', 'unanswered'].includes(persisted.reviewFilter)) {
        state.reviewFilter = persisted.reviewFilter;
      }

      if (typeof persisted.view === 'string' && ['landing', 'quiz'].includes(persisted.view)) {
        state.view = persisted.view;
      }

      if (persisted.chapters && typeof persisted.chapters === 'object') {
        data.chapters.forEach((chapter) => {
          const savedChapter = persisted.chapters[chapter.id];
          if (!savedChapter) return;

          const answers = Array.isArray(savedChapter.answers)
            ? savedChapter.answers.slice(0, chapter.questionCount)
            : createEmptyAnswers(chapter.questionCount);

          while (answers.length < chapter.questionCount) {
            answers.push(null);
          }

          state.chapters[chapter.id] = {
            answers: answers.map((value) => (LETTERS.includes(value) ? value : null)),
            submitted: Boolean(savedChapter.submitted),
          };
        });
      }
    }

    clampQuestionIndex();
  }

  function createEmptyAnswers(length) {
    return Array.from({ length }, () => null);
  }

  function bindEvents() {
    dom.prevQuestionBtn.addEventListener('click', () => {
      const chapter = getActiveChapter();
      state.activeQuestionIndex = Math.max(0, state.activeQuestionIndex - 1);
      if (state.activeQuestionIndex >= chapter.questionCount) {
        state.activeQuestionIndex = chapter.questionCount - 1;
      }
      saveState();
      render();
    });

    dom.nextQuestionBtn.addEventListener('click', () => {
      const chapter = getActiveChapter();
      state.activeQuestionIndex = Math.min(chapter.questionCount - 1, state.activeQuestionIndex + 1);
      saveState();
      render();
    });

    dom.submitChapterBtn.addEventListener('click', submitCurrentChapter);

    dom.resetChapterBtn.addEventListener('click', () => {
      const chapter = getActiveChapter();
      const ok = window.confirm(
        `Reset ${chapter.title}? This will clear all answers and remove submitted review status for this chapter.`
      );
      if (!ok) return;

      state.chapters[chapter.id] = {
        answers: createEmptyAnswers(chapter.questionCount),
        submitted: false,
      };
      state.activeQuestionIndex = 0;
      state.reviewFilter = 'all';
      saveState();
      render();
    });

    dom.reviewFilters.addEventListener('click', (event) => {
      const target = event.target;
      if (!(target instanceof HTMLElement)) return;
      if (!target.classList.contains('filter-btn')) return;

      const filter = target.dataset.filter;
      if (!filter || !['all', 'incorrect', 'unanswered'].includes(filter)) return;

      state.reviewFilter = filter;
      saveState();
      renderReviewPanel();
      updateFilterButtons();
    });

    dom.backToLandingBtn.addEventListener('click', () => {
      if (state.view === 'landing') return;
      state.view = 'landing';
      saveState();
      render();
    });

    window.addEventListener('keydown', handleGlobalKeydown);
  }

  function handleGlobalKeydown(event) {
    const activeTag = document.activeElement?.tagName?.toLowerCase() || '';
    if (activeTag === 'input' || activeTag === 'textarea' || activeTag === 'select') {
      return;
    }

    const key = event.key.toLowerCase();

    if (key === 'arrowleft') {
      event.preventDefault();
      dom.prevQuestionBtn.click();
      return;
    }

    if (key === 'arrowright') {
      event.preventDefault();
      dom.nextQuestionBtn.click();
      return;
    }

    if (['a', 'b', 'c', 'd'].includes(key)) {
      event.preventDefault();
      const upper = key.toUpperCase();
      selectAnswer(upper);
      return;
    }

    if (key === 'enter' && event.ctrlKey) {
      event.preventDefault();
      submitCurrentChapter();
    }
  }

  function submitCurrentChapter() {
    const chapter = getActiveChapter();
    const chapterState = state.chapters[chapter.id];

    if (chapterState.submitted) return;

    const answeredCount = countAnswered(chapterState.answers);
    if (answeredCount < chapter.questionCount) {
      const proceed = window.confirm(
        `You have answered ${answeredCount} of ${chapter.questionCount} questions in ${chapter.title}. Submit anyway?`
      );
      if (!proceed) return;
    }

    chapterState.submitted = true;
    state.reviewFilter = 'all';
    saveState();
    render();
  }

  function render() {
    clampQuestionIndex();

    renderStats();
    renderLandingCards();
    updateViewVisibility();

    if (!isQuizActive()) {
      return;
    }

    renderControls();
    renderQuestionCard();
    renderNavigator();
    renderReviewPanel();
    updateFilterButtons();
    highlightControlsOnScroll();
  }

  function highlightControlsOnScroll() {
    const navigator = dom.navigatorGrid;
    const controls = dom.controlsBar;
    if (!navigator || !controls) return;

    const threshold = navigator.getBoundingClientRect().bottom + 40;
    const shouldHighlight = threshold < window.innerHeight;

    controls.classList.toggle('visible', shouldHighlight);
  }

  window.addEventListener('scroll', () => {
    if (isQuizActive()) {
      highlightControlsOnScroll();
    }
  });
  window.addEventListener('resize', () => {
    if (isQuizActive()) {
      highlightControlsOnScroll();
    }
  });
}
  function renderStats() {
    const chapter = getActiveChapter();
    const chapterState = state.chapters[chapter.id];

    dom.totalQuestionsStat.textContent = String(data.meta.totalQuestions);
    dom.currentChapterStat.textContent = `Chapter ${chapter.number}`;
    dom.answeredStat.textContent = `${countAnswered(chapterState.answers)} / ${chapter.questionCount}`;

    const submittedChapters = data.chapters.filter((ch) => state.chapters[ch.id].submitted).length;
    dom.completedStat.textContent = `${submittedChapters} / ${data.chapters.length}`;
  }

  function renderLandingCards() {
    if (!dom.chapterCardsGrid) return;
    dom.chapterCardsGrid.innerHTML = '';

    const fragment = document.createDocumentFragment();
    data.chapters.forEach((chapter) => {
      const chapterState = state.chapters[chapter.id];
      const answered = countAnswered(chapterState.answers);
      const statusText = chapterState.submitted ? 'Submitted' : 'Ready to start';
      const statusClass = chapterState.submitted ? ' is-submitted' : '';

      const card = document.createElement('article');
      card.className = `chapter-card${chapter.id === state.activeChapterId ? ' is-active' : ''}`;
      card.setAttribute('role', 'listitem');
      card.innerHTML = `
        <div class="chapter-card__body">
          <p class="chapter-card__number">Chapter ${chapter.number}</p>
          <h3 class="chapter-card__title">${chapter.shortTitle || chapter.title}</h3>
          <p class="chapter-card__meta">${chapter.questionCount} Questions • ${answered}/${chapter.questionCount} answered</p>
          <p class="chapter-card__status${statusClass}">${statusText}</p>
        </div>
        <div class="chapter-card__actions">
          <button class="btn btn--primary chapter-card__start" type="button">Start Quiz</button>
        </div>
      `;

      const startBtn = card.querySelector('.chapter-card__start');
      startBtn?.addEventListener('click', () => handleStartQuiz(chapter.id));

      fragment.appendChild(card);
    });

    dom.chapterCardsGrid.appendChild(fragment);
  }

  function handleStartQuiz(chapterId) {
    state.activeChapterId = chapterId;
    state.activeQuestionIndex = 0;
    state.reviewFilter = 'all';
    state.view = 'quiz';
    saveState();
    render();
  }

  function isQuizActive() {
    return state.view === 'quiz';
  }

  function updateViewVisibility() {
    const quizActive = isQuizActive();
    dom.quizView.classList.toggle('view-hidden', !quizActive);
    dom.landingView.classList.toggle('view-hidden', quizActive);
  }

  function renderControls() {
    const chapter = getActiveChapter();
    const chapterState = state.chapters[chapter.id];
    const answeredCount = countAnswered(chapterState.answers);
    const progress = chapter.questionCount === 0 ? 0 : Math.round((answeredCount / chapter.questionCount) * 100);

    dom.chapterProgressText.textContent = `Progress: ${progress}%`;
    dom.chapterSubmissionState.textContent = chapterState.submitted ? 'Submitted: review unlocked' : 'Not submitted';
    dom.chapterProgressFill.style.width = `${progress}%`;
    dom.chapterProgressBar.setAttribute('aria-valuenow', String(progress));

    dom.questionIndexText.textContent = `Q ${state.activeQuestionIndex + 1} of ${chapter.questionCount}`;

    dom.prevQuestionBtn.disabled = state.activeQuestionIndex <= 0;
    dom.nextQuestionBtn.disabled = state.activeQuestionIndex >= chapter.questionCount - 1;
    dom.submitChapterBtn.disabled = chapterState.submitted;
    dom.submitChapterBtn.textContent = chapterState.submitted ? 'Chapter Submitted' : 'Submit Chapter';
  }

  function renderQuestionCard() {
    const chapter = getActiveChapter();
    const chapterState = state.chapters[chapter.id];
    const question = chapter.questions[state.activeQuestionIndex];

    dom.questionTitle.textContent = `Question ${question.number}`;
    dom.questionStem.textContent = question.stem;

    const selected = chapterState.answers[state.activeQuestionIndex];
    const submitted = chapterState.submitted;

    dom.optionsList.innerHTML = '';

    LETTERS.forEach((letter) => {
      const optionText = question.options[letter];
      const isSelected = selected === letter;
      const isCorrect = letter === question.correctAnswer;

      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'option-btn';
      button.setAttribute('role', 'radio');
      button.setAttribute('aria-checked', isSelected ? 'true' : 'false');
      button.setAttribute('aria-label', `Option ${letter}`);

      if (isSelected) {
        button.classList.add('is-selected');
      }

      let statusText = submitted ? 'Option' : isSelected ? 'Selected' : 'Option';

      if (submitted) {
        if (isCorrect) {
          button.classList.add('option--correct');
          statusText = 'Correct Answer';
        }
        if (isSelected && !isCorrect) {
          button.classList.add('option--incorrect');
          statusText = 'Your Selection';
        }
      }

      button.innerHTML = `
        <div class="option-btn__top">
          <span class="option-btn__label">${letter}</span>
          <span class="option-btn__status">${statusText}</span>
        </div>
        <p class="option-btn__text">${escapeHtml(optionText)}</p>
      `;

      button.disabled = submitted;
      button.addEventListener('click', () => selectAnswer(letter));

      dom.optionsList.appendChild(button);
    });

    renderQuestionFeedback(question, selected, submitted);
  }

  function renderQuestionFeedback(question, selected, submitted) {
    dom.questionFeedback.hidden = true;
    dom.questionRationale.hidden = true;

    if (!submitted) {
      return;
    }

    if (!selected) {
      dom.questionFeedback.textContent = `Unanswered — Correct answer: ${question.correctAnswer}`;
      dom.questionFeedback.className = 'question-feedback feedback--unanswered';
    } else if (selected === question.correctAnswer) {
      dom.questionFeedback.textContent = `Correct — You selected ${selected}.`;
      dom.questionFeedback.className = 'question-feedback feedback--correct';
    } else {
      dom.questionFeedback.textContent = `Incorrect — You selected ${selected}. Correct answer: ${question.correctAnswer}.`;
      dom.questionFeedback.className = 'question-feedback feedback--incorrect';
    }

    dom.questionFeedback.hidden = false;
    dom.questionRationale.innerHTML = `<strong>Rationale:</strong> ${escapeHtml(question.rationale)}`;
    dom.questionRationale.hidden = false;
  }

  function renderNavigator() {
    const chapter = getActiveChapter();
    const chapterState = state.chapters[chapter.id];
    const submitted = chapterState.submitted;

    dom.navigatorGrid.innerHTML = '';

    chapter.questions.forEach((question, index) => {
      const answer = chapterState.answers[index];

      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'nav-btn';
      if (index === state.activeQuestionIndex) button.classList.add('nav--current');

      if (!submitted) {
        if (answer) {
          button.classList.add('nav--answered');
        } else {
          button.classList.add('nav--unanswered');
        }
      } else {
        if (!answer) {
          button.classList.add('nav--unanswered');
        } else if (answer === question.correctAnswer) {
          button.classList.add('nav--correct');
        } else {
          button.classList.add('nav--incorrect');
        }
      }

      let stateLabel = 'U';
      if (!submitted) {
        stateLabel = answer ? 'A' : 'U';
      } else if (!answer) {
        stateLabel = 'U';
      } else if (answer === question.correctAnswer) {
        stateLabel = 'C';
      } else {
        stateLabel = 'X';
      }

      button.setAttribute('aria-label', `Jump to question ${question.number}. State ${stateLabel}.`);
      button.innerHTML = `
        <span class="nav-number">Q${question.number}</span>
        <span class="nav-state">${stateLabel}</span>
      `;

      button.addEventListener('click', () => {
        state.activeQuestionIndex = index;
        saveState();
        render();
      });

      dom.navigatorGrid.appendChild(button);
    });
  }

  function renderReviewPanel() {
    const chapter = getActiveChapter();
    const chapterState = state.chapters[chapter.id];

    if (!chapterState.submitted) {
      dom.reviewPanel.hidden = true;
      return;
    }

    dom.reviewPanel.hidden = false;

    const summary = computeSummary(chapter, chapterState.answers);
    dom.scoreValue.textContent = `${summary.correct} / ${chapter.questionCount}`;
    dom.percentValue.textContent = `${summary.percent}%`;
    dom.correctCount.textContent = String(summary.correct);
    dom.incorrectCount.textContent = String(summary.incorrect);
    dom.unansweredCount.textContent = String(summary.unanswered);
    dom.attemptedCount.textContent = String(summary.attempted);

    const reviewed = chapter.questions
      .map((question, index) => ({ question, index, selected: chapterState.answers[index] }))
      .filter((item) => {
        if (state.reviewFilter === 'all') return true;
        if (state.reviewFilter === 'incorrect') {
          return item.selected !== null && item.selected !== item.question.correctAnswer;
        }
        if (state.reviewFilter === 'unanswered') {
          return item.selected === null;
        }
        return true;
      });

    dom.reviewList.innerHTML = '';

    if (reviewed.length === 0) {
      const empty = document.createElement('p');
      empty.className = 'empty-state';
      empty.textContent = 'No questions match this filter in the current chapter.';
      dom.reviewList.appendChild(empty);
      return;
    }

    reviewed.forEach(({ question, index, selected }) => {
      const status = selected === null ? 'unanswered' : selected === question.correctAnswer ? 'correct' : 'incorrect';
      const statusLabel =
        status === 'correct' ? 'Correct' : status === 'incorrect' ? 'Incorrect' : 'Unanswered';

      const card = document.createElement('article');
      card.className = 'review-card';
      card.innerHTML = `
        <div class="review-card__header">
          <h3>Question ${question.number}</h3>
          <span class="review-status review-status--${status}">${statusLabel}</span>
        </div>
        <p class="review-stem">${escapeHtml(question.stem)}</p>
        <p class="review-detail"><strong>Your answer:</strong> ${selected ?? 'No answer'}</p>
        <p class="review-detail"><strong>Correct answer:</strong> ${question.correctAnswer}</p>
        <p class="review-detail"><strong>Rationale:</strong> ${escapeHtml(question.rationale)}</p>
      `;

      card.addEventListener('click', () => {
        state.activeQuestionIndex = index;
        saveState();
        render();
      });

      dom.reviewList.appendChild(card);
    });
  }

  function updateFilterButtons() {
    const buttons = dom.reviewFilters.querySelectorAll('.filter-btn');
    buttons.forEach((btn) => {
      if (!(btn instanceof HTMLButtonElement)) return;
      btn.classList.toggle('is-active', btn.dataset.filter === state.reviewFilter);
    });
  }

  function selectAnswer(letter) {
    const chapter = getActiveChapter();
    const chapterState = state.chapters[chapter.id];
    if (chapterState.submitted) return;

    chapterState.answers[state.activeQuestionIndex] = letter;
    saveState();
    render();
  }

  function computeSummary(chapter, answers) {
    let correct = 0;
    let incorrect = 0;
    let unanswered = 0;

    chapter.questions.forEach((q, i) => {
      const answer = answers[i];
      if (!answer) {
        unanswered += 1;
      } else if (answer === q.correctAnswer) {
        correct += 1;
      } else {
        incorrect += 1;
      }
    });

    const attempted = correct + incorrect;
    const percent = chapter.questionCount === 0 ? 0 : Math.round((correct / chapter.questionCount) * 100);

    return { correct, incorrect, unanswered, attempted, percent };
  }

  function countAnswered(answers) {
    return answers.filter(Boolean).length;
  }

  function getActiveChapter() {
    const chapter = chapterIndex.get(state.activeChapterId);
    if (!chapter) {
      throw new Error(`Unknown active chapter: ${state.activeChapterId}`);
    }
    return chapter;
  }

  function clampQuestionIndex() {
    const chapter = getActiveChapter();
    if (state.activeQuestionIndex < 0) state.activeQuestionIndex = 0;
    if (state.activeQuestionIndex >= chapter.questionCount) {
      state.activeQuestionIndex = Math.max(0, chapter.questionCount - 1);
    }
  }

  function loadPersistedState() {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return null;
      return JSON.parse(raw);
    } catch {
      return null;
    }
  }

  function saveState() {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // Ignore storage errors in restricted environments.
    }
  }

  function escapeHtml(text) {
    return text
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#039;');
  }
})();
