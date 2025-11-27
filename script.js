const question = [
  {
    "question": "Wie lautet der vollständige Name des Charakters, der der 'Prinz' genannt wird?",
    "answer_1": "Severus Snape",
    "answer_2": "Sirius Black",
    "answer_3": "Regulus Black",
    "answer_4": "Draco Malfoy",
    "right_answer": 1
  },
  {
    "question": "Wie viele Geschwister hat Ron Weasley insgesamt?",
    "answer_1": "5",
    "answer_2": "6",
    "answer_3": "7",
    "answer_4": "4",
    "right_answer": 2
  },
  {
    "question": "Welches Tier ist das Wappentier des Hauses Hufflepuff?",
    "answer_1": "Löwe",
    "answer_2": "Dachs",
    "answer_3": "Schlange",
    "answer_4": "Adler",
    "right_answer": 2
  },
  {
    "question": "Welches Schulfach unterrichtet Professor Flitwick?",
    "answer_1": "Verteidigung gegen die Dunklen Künste",
    "answer_2": "Zauberkunst",
    "answer_3": "Kräuterkunde",
    "answer_4": "Verwandlung",
    "right_answer": 2
  },
  {
    "question": "Welche der folgenden ist keine der unverzeihlichen Flüche?",
    "answer_1": "Imperius-Fluch",
    "answer_2": "Cruciatus-Fluch",
    "answer_3": "Sectumsempra",
    "answer_4": "Todesfluch (Avada Kedavra)",
    "right_answer": 3
  },
  {
    "question": "Welches ist Harry Potters Schutzpatronus?",
    "answer_1": "Otter",
    "answer_2": "Hirschkuh",
    "answer_3": "Phönix",
    "answer_4": "Hirsch",
    "right_answer": 4
  },
  {
    "question": "Wie lautet der Name der Straße, in der die Dursleys wohnen?",
    "answer_1": "Godric's Hollow",
    "answer_2": "Ligusterweg",
    "answer_3": "Kings Cross",
    "answer_4": "Spinner's End",
    "right_answer": 2
  },
  {
    "question": "Was hält die Kammer des Schreckens verborgen?",
    "answer_1": "Einen Thestral",
    "answer_2": "Einen Basilisken",
    "answer_3": "Eine Acromantula",
    "answer_4": "Einen Drachen",
    "right_answer": 2
  },
  {
    "question": "Wie lautet der Name von Harrys Eule?",
    "answer_1": "Pigwidgeon",
    "answer_2": "Errol",
    "answer_3": "Hedwig",
    "answer_4": "Krummbein",
    "right_answer": 3
  },
  {
    "question": "Welche Position spielt Harry im Quidditch?",
    "answer_1": "Jäger",
    "answer_2": "Treiber",
    "answer_3": "Sucher",
    "answer_4": "Hüter",
    "right_answer": 3
  },
  {
    "question": "Wie hieß der Erbauer von Hogwarts, der die Kammer des Schreckens erschuf?",
    "answer_1": "Godric Gryffindor",
    "answer_2": "Helga Hufflepuff",
    "answer_3": "Salazar Slytherin",
    "answer_4": "Rowena Ravenclaw",
    "right_answer": 3
  },
  {
    "question": "Was benötigt man, um ein echtes Polyjuice-Elixier herzustellen?",
    "answer_1": "Haare der Person",
    "answer_2": "Blut der Person",
    "answer_3": "Einen Teil der Seele der Person",
    "answer_4": "Einen Patronus der Person",
    "right_answer": 1
  },
  {
    "question": "Wie nennt man nicht-magische Menschen in der Zaubererwelt Großbritanniens?",
    "answer_1": "Squibs",
    "answer_2": "Mudbloods",
    "answer_3": "Muggels",
    "answer_4": "Azkabaner",
    "right_answer": 3
  },
  {
    "question": "Wer war der erste Professor für Verteidigung gegen die Dunklen Künste, den Harry kennenlernte?",
    "answer_1": "Professor Quirrell",
    "answer_2": "Professor Lockhart",
    "answer_3": "Professor Lupin",
    "answer_4": "Professor Moody",
    "right_answer": 1
  },
  {
    "question": "Wie lautet der Zauberspruch, um das Licht am Ende des Zauberstabs zu entzünden?",
    "answer_1": "Lumos",
    "answer_2": "Nox",
    "answer_3": "Accio",
    "answer_4": "Wingardium Leviosa",
    "right_answer": 1
  },
  {
    "question": "Wie heißt der dreiköpfige Hund, der den Stein der Weisen bewacht?",
    "answer_1": "Krupp",
    "answer_2": "Fell",
    "answer_3": "Fluffy",
    "answer_4": "Aragog",
    "right_answer": 3
  },
  {
    "question": "Was ist ein Animagus?",
    "answer_1": "Ein Mensch, der sich in ein Tier verwandeln kann",
    "answer_2": "Ein Zaubertrank, der das Aussehen ändert",
    "answer_3": "Ein magisches Tierwesen",
    "answer_4": "Ein Zauber, der Tiere beschwört",
    "right_answer": 1
  },
  {
    "question": "Wie lautet der Zauberspruch, um den Zauberstab eines Gegners zu entwaffnen?",
    "answer_1": "Stupor",
    "answer_2": "Expelliarmus",
    "answer_3": "Petrificus Totalus",
    "answer_4": "Protego",
    "right_answer": 2
  },
  {
    "question": "Welche Form nimmt ein Irrwicht an?",
    "answer_1": "Eine riesige Spinne",
    "answer_2": "Die schlimmste Angst der Person",
    "answer_3": "Ein gesichtsloser Schatten",
    "answer_4": "Eine tote Person",
    "right_answer": 2
  },
  {
    "question": "Wer ist der Hausgeist von Gryffindor?",
    "answer_1": "Der Blutige Baron",
    "answer_2": "Die Graue Dame",
    "answer_3": "Der Fast Kopflose Nick",
    "answer_4": "Der Fette Mönch",
    "right_answer": 3
  },
  {
    "question": "Was muss Harry tun, um den Sprechenden Hut dazu zu bringen, ihn in Gryffindor einzuteilen?",
    "answer_1": "Nichts sagen",
    "answer_2": "Slytherin ablehnen",
    "answer_3": "Sich mutig fühlen",
    "answer_4": "Seinen Namen rufen",
    "right_answer": 2
  },
  {
    "question": "Wie nennt man die dunklen Objekte, in die Voldemort seine Seele gespalten hat?",
    "answer_1": "Horkruxe",
    "answer_2": "Reliquien",
    "answer_3": "Phönixe",
    "answer_4": "Portschlüssel",
    "right_answer": 1
  },
  {
    "question": "Wie lautet der vollständige Name von Lord Voldemort?",
    "answer_1": "Tom Riddle",
    "answer_2": "Albus Dumbledore",
    "answer_3": "Gellert Grindelwald",
    "answer_4": "Lucius Malfoy",
    "right_answer": 1
  },
  {
    "question": "Welche der Heiligtümer des Todes ist KEIN physisches Objekt?",
    "answer_1": "Der Elderstab",
    "answer_2": "Der Tarnumhang",
    "answer_3": "Der Stein der Auferstehung",
    "answer_4": "Alle sind physische Objekte",
    "right_answer": 4
  },
  {
    "question": "Wer veranstaltet das trimagische Turnier?",
    "answer_1": "Hogwarts und Beauxbatons",
    "answer_2": "Hogwarts, Durmstrang und Beauxbatons",
    "answer_3": "Hogwarts und Durmstrang",
    "answer_4": "Das Ministerium für Zauberei",
    "right_answer": 2
  },
  {
    "question": "Welche Zutat verwenden Harry, Ron und Hermine zuerst für das Polyjuice-Elixier im zweiten Jahr?",
    "answer_1": "Flubberwürmer",
    "answer_2": "Fliegenpilze",
    "answer_3": "Haare von Crabbe und Goyle",
    "answer_4": "Geschlüpfte Puffskeine",
    "right_answer": 3
  },
  {
    "question": "Wie lautet die Nummer des Bahnsteigs, von dem der Hogwarts-Express abfährt?",
    "answer_1": "9",
    "answer_2": "10 1/2",
    "answer_3": "9 3/4",
    "answer_4": "7 1/4",
    "right_answer": 3
  },
  {
    "question": "In welchem Jahr starb Albus Dumbledore?",
    "answer_1": "6. Schuljahr",
    "answer_2": "5. Schuljahr",
    "answer_3": "7. Schuljahr",
    "answer_4": "4. Schuljahr",
    "right_answer": 1
  },
  {
    "question": "Welches Tier ist der Wächter des Eingangs zum Ravenclaw-Gemeinschaftsraum (anstelle eines Passworts)?",
    "answer_1": "Ein Greif",
    "answer_2": "Ein Falke",
    "answer_3": "Ein Adler",
    "answer_4": "Ein bronzeener Türklopfer in Form eines Adlers",
    "right_answer": 4
  },
  {
    "question": "Welches ist das einzige Tierwesen, das die Dementoren nicht beeinflussen können?",
    "answer_1": "Ein Thestral",
    "answer_2": "Ein Hippogreif",
    "answer_3": "Ein Basilisken",
    "answer_4": "Ein Irrwicht",
    "right_answer": 1
  },
  {
    "question": "Wie heißt der Weasley-Zwilling, der später stirbt?",
    "answer_1": "George",
    "answer_2": "Fred",
    "answer_3": "Percy",
    "answer_4": "Charlie",
    "right_answer": 2
  },
  {
    "question": "Wer ist der Minister für Zauberei, als Lord Voldemort zurückkehrt?",
    "answer_1": "Cornelius Fudge",
    "answer_2": "Rufus Scrimgeour",
    "answer_3": "Kingsley Shacklebolt",
    "answer_4": "Barty Crouch Sr.",
    "right_answer": 1
  },
  {
    "question": "Welche magische Kreatur zieht die Kutschen zum Hogwarts-Express (für diejenigen, die es sehen können)?",
    "answer_1": "Hippogreife",
    "answer_2": "Zentaur",
    "answer_3": "Thestrale",
    "answer_4": "Fliegende Autos",
    "right_answer": 3
  },
  {
    "question": "Was war der Vorname von Dumbledores Schwester?",
    "answer_1": "Ariana",
    "answer_2": "Petunia",
    "answer_3": "Merope",
    "answer_4": "Muriel",
    "right_answer": 1
  },
  {
    "question": "Wie nennt man die magischen Gegenstände, die Erinnerungen speichern können?",
    "answer_1": "Denkarium",
    "answer_2": "Wunschbrunnen",
    "answer_3": "Erinnerungszauber",
    "answer_4": "Wahrheitskugel",
    "right_answer": 1
  },
  {
    "question": "Welcher Zauberspruch wird verwendet, um eine Tür zu öffnen?",
    "answer_1": "Alohomora",
    "answer_2": "Reducto",
    "answer_3": "Reparo",
    "answer_4": "Colloportus",
    "right_answer": 1
  },
  {
    "question": "Wer ist Harrys Patenonkel?",
    "answer_1": "Remus Lupin",
    "answer_2": "James Potter",
    "answer_3": "Sirius Black",
    "answer_4": "Albus Dumbledore",
    "right_answer": 3
  },
  {
    "question": "Welches Fach unterrichtete Severus Snape, bevor er Professor für Verteidigung gegen die Dunklen Künste wurde?",
    "answer_1": "Kräuterkunde",
    "answer_2": "Zauberkunst",
    "answer_3": "Zaubertränke",
    "answer_4": "Alchemie",
    "right_answer": 3
  },
  {
    "question": "Welche Person der 'Rumtreiber' hatte den Spitznamen 'Wurmschwanz'?",
    "answer_1": "Sirius Black",
    "answer_2": "James Potter",
    "answer_3": "Peter Pettigrew",
    "answer_4": "Remus Lupin",
    "right_answer": 3
  },
  {
    "question": "In welchem Jahr erfährt Harry von der Existenz des Raumes der Wünsche (Room of Requirement)?",
    "answer_1": "Im 4. Schuljahr",
    "answer_2": "Im 5. Schuljahr",
    "answer_3": "Im 6. Schuljahr",
    "answer_4": "Im 3. Schuljahr",
    "right_answer": 2
  }
];

let currentQuestion = 0;
let rightAnswers = 0;
let tempQuestion = question[currentQuestion];
let answered = false;
let success = new Audio("sounds/success-sound.mp3");
let goodJob = new Audio("sounds/very-good-sound.mp3");

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
  let answerContainer = document.getElementById(answerId);
  let rightContainer = document.getElementById(
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
  let tempAnswer = document.getElementById("answer_" + index);
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
  const cardContainer = document.getElementById("cardContainer");
  cardContainer.innerHTML = "";
  cardContainer.innerHTML = resultTemplate();
  showrightAnswers();
}

function resultTemplate() {
  return `<h2>Dein Quiz-Ergebnis</h2>
            <div class="result-body">
                <p>Du hast <b id="correctAnswers"></b> von <b id="numberOfAllQuestions"></b> Fragen richtig beantwortet!</p>
                <button type="button" class="btn btn-primary" onclick="restartQuiz()">Quiz neu starten</button>
                <div class="winner-action-container">
                  <p class="action" id="resultText"></p>
                  <img class="action-img" id="resultImg" src="" alt="#">;
                </div>`;
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
  const resultText = document.getElementById("resultText");
  const resultImg = document.getElementById("resultImg");
  switch (true) {
  case rightAnswers === question.length:
    return allCorrect(resultText, resultImg);

  case rightAnswers === 0:
    return noneCorrect(resultText, resultImg);

  case rightAnswers <= question.length * 0.5:
    return someCorrect(resultText, resultImg);

  case rightAnswers < question.length:
    return mostCorrect(resultText, resultImg);
}
}

function allCorrect(resultText, resultImg) {
  resultText.innerHTML = "Herzlichen Glückwunsch! Du hast alle Fragen richtig beantwortet!";
    resultImg.src = "img/end-img-1.png";
    resultImg.alt = "Alle Antworten richtig";
    goodJob.play();
}

function noneCorrect(resultText, resultImg) {
  resultText.innerHTML = "Oh nein! Du hast keine Frage richtig beantwortet. Versuch es gerne noch einmal!";
    resultImg.src = "img/end-img-2.png";
    resultImg.alt = "Keine richtige Antwort";
}

function someCorrect(resultText, resultImg) {
 resultText.innerHTML = "Du hast einige Fragen richtig beantwortet, aber es gibt noch Raum für Verbesserungen. Versuch es gerne noch einmal!";
    resultImg.src = "img/end-img-3.png";
    resultImg.alt = "Einige richtige Antworten";
}

function mostCorrect(resultText, resultImg) {
  resultText.innerHTML = "Gute Arbeit! Du hast die meisten Fragen richtig beantwortet. Versuch es gerne noch einmal, um alle richtig zu bekommen!";
    resultImg.src = "img/end-img-4.png";
    resultImg.alt = "Gute Arbeit";
}
