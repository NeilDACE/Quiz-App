const question = [
  {
    question:
      "Welches Pokémon der ersten Generation hat den höchsten Basis-Spezial-Angriff?",
    answer_1: "Mewtu",
    answer_2: "Simsala",
    answer_3: "Dragoran",
    answer_4: "Arktos",
    right_answer: 1,
  },
  {
    question:
      "Welche Attacke konnte in der ersten Generation aufgrund eines Fehlers unendlich oft eingesetzt werden?",
    answer_1: "Wutanfall",
    answer_2: "Verzweifler",
    answer_3: "Genusskuss",
    answer_4: "Genickbruch",
    right_answer: 2,
  },
  {
    question:
      "Welche Voraussetzung muss erfüllt sein, damit Scherox entsteht, wenn Sichlor getauscht wird?",
    answer_1: "Es hält ein Metallmantel",
    answer_2: "Es trägt ein Metallstaub",
    answer_3: "Es hat maximale Zuneigung",
    answer_4: "Es wird nachts getauscht",
    right_answer: 1,
  },
  {
    question:
      "Welches Pokémon ist das einzige aus Generation 2, das eine Babyform erst in Generation 3 erhielt?",
    answer_1: "Marill",
    answer_2: "Woingenau",
    answer_3: "Rabauz",
    answer_4: "Schiggy",
    right_answer: 2,
  },
  {
    question: "Wie heißt die versteckte Fähigkeit von Brutalanda?",
    answer_1: "Hochmut",
    answer_2: "Rohe Gewalt",
    answer_3: "Achtlos",
    answer_4: "Zenithaut",
    right_answer: 1,
  },
  {
    question:
      "Welche Voraussetzung benötigt Pupitar, um sich zu Despotar zu entwickeln?",
    answer_1: "Level 50",
    answer_2: "Level 55",
    answer_3: "Level 60",
    answer_4: "Level 65",
    right_answer: 2,
  },
  {
    question:
      "Welches legendäre Pokémon der dritten Generation ist nicht Teil des Wetter-Trios?",
    answer_1: "Kyogre",
    answer_2: "Latios",
    answer_3: "Groudon",
    answer_4: "Rayquaza",
    right_answer: 2,
  },
  {
    question:
      "Welche Attacke kann nur von Deoxys in seiner Angriffsform erlernt werden?",
    answer_1: "Hyperstrahl",
    answer_2: "Konter",
    answer_3: "Psyschub",
    answer_4: "Temposchub",
    right_answer: 4,
  },
  {
    question:
      "Welches Pokémon ist laut Pokédex-Eintrag das schwerste nicht-legendäre Pokémon der Generation 3?",
    answer_1: "Stolloss",
    answer_2: "Walraisa",
    answer_3: "Wailord",
    answer_4: "Regirock",
    right_answer: 3,
  },
  {
    question:
      "Wie lautet der einzige Typ, den es in Generation 1 zwar gab, der aber keine eigenen Attacken hatte?",
    answer_1: "Unlicht",
    answer_2: "Stahl",
    answer_3: "Drache",
    answer_4: "Fee",
    right_answer: 3,
  },
];

let currentQuestion = 0;
let rightAnswers = 0;
let tempQuestion = question[currentQuestion];
let answered = false;
let success = new Audio("sounds/very-good-sound.mp3");

function init() {
  let numofQuestions = document.getElementById("numberOfAllQuestions");
  numofQuestions.innerHTML = question.length;
  render();
}

function render() {
  showQuestion();
  if (currentQuestion >= question.length) {
    return;
  }
  showAnswer();
  buttonDisabled();
}

function buttonDisabled() {
  if (answered === false) {
    document.getElementById("nextQuestion").disabled = true;
  } else {
    document.getElementById("nextQuestion").disabled = false;
  }
}

function showQuestion() {
  if (currentQuestion >= question.length) {
    showResult();
    showWinnerAction();
  } else {
    let questionElement = document.getElementById("question_1");
    questionElement.innerHTML = tempQuestion.question;
  }
}

function showAnswer() {
  for (let index = 1; index <= 4; index++) {
    tempAnswer = document.getElementById("answer_" + index);
    tempAnswer.innerHTML = tempQuestion["answer_" + index];
  }
}

function answer(answerId) {
  const key = answerId;
  answered = true;
  buttonDisabled();
  answerContainer = document.getElementById(answerId);
  rightContainer = document.getElementById(
    "answer_" + tempQuestion.right_answer
  );
  switch (key) {
    case "answer_" + tempQuestion.right_answer:
      answerContainer.classList.add("bg-success");
      success.play();
      rightAnswers++;
      break;
    default:
      answerContainer.classList.add("bg-danger");
      rightContainer.classList.add("bg-success");
      break;
  }
}

function resetAnswerBackground() {
  for (let index = 1; index <= 4; index++) {
    tempAnswer = document.getElementById("answer_" + index);
    tempAnswer.classList.remove("bg-success");
    tempAnswer.classList.remove("bg-danger");
  }
}

function setCurrentQuestion() {
  let currentQuestionNumber = document.getElementById("currentQuestionNumber");
  currentQuestionNumber.innerHTML = currentQuestion + 1;
}

function nextQuestion() {
  currentQuestion++;
  setCurrentQuestion();
  tempQuestion = question[currentQuestion];
  resetAnswerBackground();
  answered = false;
  render();
}

function showrightAnswers() {
  document.getElementById("correctAnswers").innerHTML = rightAnswers;
  document.getElementById("numberOfAllQuestions").innerHTML = question.length;
}

function showResult() {
  cardContainer = document.getElementById("cardContainer");
  cardContainer.innerHTML = "";
  cardContainer.innerHTML =  resultTemplate();
  showrightAnswers();
}

function resultTemplate() {
    return `<h2>Dein Quiz-Ergebnis</h2>
            <div class="result-body">
                <p>Du hast <b id="correctAnswers"></b> von <b id="numberOfAllQuestions"></b> Fragen richtig beantwortet!</p>
                <button type="button" class="btn btn-primary" onclick="restartQuiz()">Quiz neu starten</button>
                <div class="winner-action-container" id="winnerAction"></div>`;
}

function restartQuiz() {
  currentQuestion = 0;
  rightAnswers = 0;
  tempQuestion = question[currentQuestion];
  answered = false;
  setCurrentQuestion();
  render();
}

function showWinnerAction() {
    if (rightAnswers === question.length) {
        let winnerActionContainer = document.getElementById("winnerAction");
        winnerActionContainer.innerHTML = `<p class="action">Herzlichen Glückwunsch! Du hast alle Fragen richtig beantwortet!</p>
        <img class="action-img" src="img/all-answers-right-img.gif" alt="#">;`
    };
    if (rightAnswers === 0) {
        let winnerActionContainer = document.getElementById("winnerAction");
        winnerActionContainer.innerHTML = `<p class="action">Oh nein! Du hast keine Frage richtig beantwortet. Fang an dich mit Pokemon zu beschäftigen!</p>
        <img class="action-img" src="img/cero-right-answers-img.gif" alt="#">;`
    };
    if (rightAnswers <= (question.length * 0,5) && rightAnswers > 0) {
        let winnerActionContainer = document.getElementById("winnerAction");
        winnerActionContainer.innerHTML = `<p class="action">Oh nein! Du hast nur ein paar Fragen richtig beantwortet. Fang an dich noch mehr mit Pokemon zu beschäftigen!</p>
        <img class="action-img" src="img/less-than-half-right-answers-img.gif" alt="#">;`
    };
    if (rightAnswers > 5 && rightAnswers < question.length) {
        let winnerActionContainer = document.getElementById("winnerAction");
        winnerActionContainer.innerHTML = `<p class="action">Oh Okey! Du hast mehr als die hälfte der Fragen richtig beantwortet. Der beste Pokemon trainer wirst du so halt trotzdem nicht!</p>
        <img class="action-img" src="img/more-than-half-right-answers-img.gif" alt="#">`
    };
}
