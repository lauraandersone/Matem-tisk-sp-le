// Spēles sākšanas funkcija
function startGame() {
  window.location.href = "index2.html";
}

function restartGame() {
  window.location.href = "index2.html";
}

let currentQuestion = 0;
const totalQuestionsPerLevel = 5; // Piemēram, 5 uzdevumi katram līmenim
const totalLevels = 4; // Kopējais līmeņu skaits
let lives = 3; // Sākotnējais dzīvību skaits
let secondsLeft = 120; // Laika limits uzdevuma risināšanai (sekundes)


// Uzdevumu saraksts
const questions = [
  {
    question: "Monomu 6x² dalot ar monomu 3x², iegūst:",
    answers: [
      { text: "A: 3x⁴", isCorrect: false },
      { text: "B: 2x⁴", isCorrect: false },
      { text: "C: 2x⁶", isCorrect: true },
      { text: "D: 3x⁶", isCorrect: false }
    ]
  },
  {
    question: "Izteiksme 6⁻² vērtība ir",
    answers: [
      { text: "A: 36", isCorrect: false },
      { text: "B: -36", isCorrect: false },
      { text: "C: -1/36", isCorrect: false },
      { text: "D: 1/36", isCorrect: true }
    ]
  },
  {
    question: "1,2023 ⋅ 10⁴=",
    answers: [
      { text: "A: 120,23", isCorrect: false },
      { text: "B: 12023", isCorrect: true },
      { text: "C: 120230", isCorrect: false },
      { text: "D: 1202,3", isCorrect: false }
    ]
  },
  {
    question: "Nevienādības -x²-2x+3 > 0 atrisinājums ir ",
    answers: [
      { text: "A: x∈(0;4)", isCorrect: false },
      { text: "B: x∈(-3;1)", isCorrect: false },
      { text: "C: x∈(-∾;-3)∪(1;+∾)", isCorrect: true },
      { text: "D: x∈(-∾;4)", isCorrect: false }
    ]
  },
  {
    question: "Cilinda pamata rādiuss ir 8 cm, bet cilindra augstums ir 0,5 cm. Cilindra tilpums ir ",
    answers: [
      { text: "A: 32π cm³", isCorrect: true },
      { text: "B: 63π cm³", isCorrect: false },
      { text: "C: 128π cm³", isCorrect: false },
      { text: "D: 320π cm³", isCorrect: false }
    ]
  },
  {
    question: "Kura no izteiksmēm nozīmē 'puse no α'",
    answers: [
      { text: "A: 2/α", isCorrect: false },
      { text: "B: 1/2α", isCorrect: false },
      { text: "C: α/0,5", isCorrect: false },
      { text: "D: α/2", isCorrect: true }
    ]
  },
  {
    question: "x²+25=0 atrisinājums ir",
    answers: [
      { text: "A: x²∈⊘", isCorrect: true },
      { text: "B: x∈ℝ", isCorrect: false },
      { text: "C: ±5", isCorrect: false },
      { text: "D: 5", isCorrect: false }
    ]
  },
  {
    question: "Ar kādu x vērtību skaitļu pāris (x;4) der par atrisinājumu sistēmai {y-x²=0; xy=8",
    answers: [
      { text: "A: x=2", isCorrect: true },
      { text: "B: x=2 vai x= -2", isCorrect: false },
      { text: "C: x=16", isCorrect: false },
      { text: "D: x=4 vai x= -4", isCorrect: false }
    ]
  },
  {
    question: "Aprēķini a-5/a",
    answers: [
      { text: "A: 5", isCorrect: false },
      { text: "B: 1", isCorrect: false },
      { text: "C: 0", isCorrect: true },
      { text: "D: -5", isCorrect: false }
    ]
  },
  {
    question: "Nogrieznis, kas savieno trijstūra virsotni ar pretējās malas viduspunktu, sauc par",
    answers: [
      { text: "A: Mediāna", isCorrect: true },
      { text: "B: Bisektrise", isCorrect: false },
      { text: "C: Augstums", isCorrect: false },
      { text: "D: Vidusperpendikuls", isCorrect: false }
    ]
  },
  {
    question: "Daļu x-1/x reizinot ar 2, iegūst",
    answers: [
      { text: "A: 2x-1/x", isCorrect: false },
      { text: "B: 2x-2/x", isCorrect: true },
      { text: "C: 2x-1/2x", isCorrect: false },
      { text: "D: 2x-2/2x", isCorrect: false }
    ]
  },
  {
    question: "Starpība 2x+5/x+2 - x+1/x+2 vienāda ar",
    answers: [
      { text: "A: x+6/x+2", isCorrect: false },
      { text: "B: x+4/x+2", isCorrect: true },
      { text: "C: x+4", isCorrect: false },
      { text: "D: x+6", isCorrect: false }
    ]
  },
  {
    question: "Funkcijas f(x)= -2/x+3 -1 vērtību kopa ir",
    answers: [
      { text: "A: E(f)=(-∾;-3)∪(-3;+∾)", isCorrect: false },
      { text: "B: E(f)=(-∾;+∾)", isCorrect: false },
      { text: "C: E(f)=(-∾;-1)∪(-1;+∾)", isCorrect: true },
      { text: "D: E(f)=(-∾;-0)∪(0;+∾)", isCorrect: false }
    ]
  },
  {
    question: "Funkcijas y=2ˣ-3 nulle ir",
    answers: [
      { text: "A: x=2/3", isCorrect: false },
      { text: "B: x=3/2", isCorrect: false },
      { text: "C: x=log₂3", isCorrect: true },
      { text: "D: x=log₃2", isCorrect: false }
    ]
  },
  {
    question: "Ģeometriskās progresijas 1/3; -2/3; 4/3;... ceturtais loceklis ir",
    answers: [
      { text: "A: 6/3", isCorrect: false },
      { text: "B: -6/3", isCorrect: false },
      { text: "C: 8/3", isCorrect: false },
      { text: "D: -8/3", isCorrect: true }
    ]
  },
  {
    question: "Dots vienādojums 3x-2y+8=0. Viens no dotā vienādojuma atrisinājumiem ir skaitļu pāris",
    answers: [
      { text: "A: (-2;3)", isCorrect: false },
      { text: "B: (0;-4)", isCorrect: false },
      { text: "C: (2;7)", isCorrect: true },
      { text: "D: (2;-7)", isCorrect: false }
    ]
  },
  {
    question: "Met divus spēļu kauliņus ar 7 skaldnēm un nosaka uz augšējām skaldnēm uzmesto punktu summu. Kurš no dotajiem notikumiem ir drošs notikums?",
    answers: [
      { text: "A: Punktu summa ir lielāka nekā 14", isCorrect: false },
      { text: "B: Punktu summa ir pāra skaitlis", isCorrect: false },
      { text: "C: Punktu summa ir mazāka nekā 14", isCorrect: true },
      { text: "D: Punktu summa ir nepāra skaitlis", isCorrect: false }
    ]
  },
  {
    question: "Izteiksmi x³-8 sadalot reizinātājos, iegūst",
    answers: [
      { text: "A: (x-2)(x²+2x+4)", isCorrect: true },
      { text: "B: (x-2)(x²-2x+4)", isCorrect: false },
      { text: "C: (x-2)(x²+4)", isCorrect: false },
      { text: "D: (x-2)(x²-4)", isCorrect: false }
    ]
  },
  {
    question: "Intervālā x∈(π/3;π/2) funkcija y=2cos3x ir",
    answers: [
      { text: "A: augoša, un tās vērtības ir pozitīvas", isCorrect: false },
      { text: "B: augoša, un tās vērtības ir negatīvas", isCorrect: true },
      { text: "C: dilstoša, un tās vērtības ir pozitīvas", isCorrect: false },
      { text: "D: dilstoša, un tās vērtības ir negatīvas", isCorrect: false }
    ]
  },
  {
    question: "Izteiksme -a/a-3 ir identiski vienāda ar izteiksmi",
    answers: [
      { text: "A: a/3-a", isCorrect: true },
      { text: "B: a/a+3", isCorrect: false },
      { text: "C: a/-a-3", isCorrect: false },
      { text: "D: -a/-a+3", isCorrect: false }
    ]
  },
  
];

document.addEventListener("DOMContentLoaded", function() {
  // Sāk laika skaitītāju, ja tas nav iestatīts
  if (!localStorage.getItem("laikaIerobezojums")) {
    iestatitLaikaIerobezojumu();
  } else {
    // Pārbauda, vai ir pagājušas 120 sekundes un ja ir, atjauno laika ierobežojumu
    if (irPagajusas120Sekundes()) {
      atjaunotLaikaIerobezojumu();
    }
  }

  // Atjauno spēles progresu, ja tas ir saglabāts
  if (localStorage.getItem("speluProgress")) {
    const progress = JSON.parse(localStorage.getItem("speluProgress"));
    currentQuestion = progress.currentQuestion;
    lives = progress.lives;
  }

  startTimer(); // Sāk laika skaitītāju
  generateQuestion(); // Ģenerē uzdevumu, kad lapa ir ielādēta
});

// Funkcija, lai iestatītu laika ierobežojumu
function iestatitLaikaIerobezojumu() {
  let sakumaLaiks = new Date().getTime();
  localStorage.setItem('laikaIerobezojums', sakumaLaiks);
}

// Funkcija, lai pārbaudītu, vai ir pagājušas 120 sekundes
function irPagajusas120Sekundes() {
  let tagad = new Date().getTime();
  let sakumaLaiks = localStorage.getItem('laikaIerobezojums');
  if (!sakumaLaiks) {
    return false;
  }
  let laikaStarpibaSekundes = (tagad - sakumaLaiks) / 1000;
  return laikaStarpibaSekundes >= 120;
}

// Funkcija, lai atjaunotu laika ierobežojumu
function atjaunotLaikaIerobezojumu() {
  iestatitLaikaIerobezojumu();
  // Papildus darbības pēc laika ierobežojuma atjaunošanas
}

function startTimer() {
  const timerInterval = setInterval(() => {
    secondsLeft--;
    document.getElementById("timeLeft").textContent = secondsLeft;
    if (secondsLeft <= 0) {
      clearInterval(timerInterval);
      alert("Laiks beidzies!");
      nextQuestion();
    }
  }, 1000);
}

function generateQuestion() {
  // Atiestata laika skaitītāju uz sākotnējo vērtību
  secondsLeft = 120;

  // Iegūstam jaunu uzdevumu
  const newQuestion = questions[currentQuestion];
  const question = newQuestion.question;
  const answers = newQuestion.answers;

  const questionContainer = document.getElementById("questionContainer");
  questionContainer.innerHTML = '';
  const questionDiv = document.createElement("div");
  questionDiv.classList.add("question");
  questionDiv.innerHTML = `<h5>Uzdevums</h5><p>${question}</p><p>Palikušās dzīvības: ${lives}</p><p>Palikušais laiks: <span id="timeLeft">${secondsLeft}</span> sekundes</p>`;
  questionContainer.appendChild(questionDiv);

  const answersContainer = document.createElement("div");
  answersContainer.classList.add("answers");
  answers.forEach((answer, index) => {
    const answerButton = document.createElement("button");
    answerButton.classList.add("btn", "btn-secondary", "mx-2");
    answerButton.textContent = answer.text;
    answerButton.addEventListener("click", () => checkAnswer(answer.isCorrect, answerButton));
    answersContainer.appendChild(answerButton);
  });
  questionContainer.appendChild(answersContainer);

  // Atjaunina līmeņa indikatoru
  const levelIndicator = document.getElementById("levelIndicator");
  levelIndicator.textContent = "Līmenis: " + calculateCurrentLevel(currentQuestion);
}

function calculateCurrentLevel(currentQuestion) {
  return Math.floor(currentQuestion / totalQuestionsPerLevel) + 1;
}

let correctAnswers = 0; // Pareizo atbilžu skaits
let wrongAnswers = 0; // Nepareizo atbilžu skaits
let totalGameTime = 0; // Kopējais spēles laiks (sekundes)

function checkAnswer(isCorrect, button) {
  if (isCorrect) {
    button.classList.remove("btn-secondary");
    button.classList.add("btn-success");
    correctAnswers++; // Palielina pareizo atbilžu skaitu
  } else {
    button.classList.remove("btn-secondary");
    button.classList.add("btn-danger");
    wrongAnswers++; // Palielina nepareizo atbilžu skaitu
    // Atņem dzīvību, ja atbilde nav pareiza
    lives--;
    if (lives === 0) {
      // Ja dzīvības ir beigušās, beidz spēli
      endGame();
      return;
    }
  }

  setTimeout(() => {
    // Palielina uzdevuma numuru
    currentQuestion++;
    // Saglabā spēles progresu
    localStorage.setItem("speluProgress", JSON.stringify({ currentQuestion, lives }));
    // Pārbauda, vai esam sasniedzis pēdējo uzdevumu
    if (currentQuestion >= questions.length) {
      currentQuestion = 0; // Ja esam sasniedzis pēdējo uzdevumu, sākam no sākuma
      // Palielina līmeņa numuru, ja visi uzdevumi šajā līmenī ir izpildīti
      const levelIndicator = document.getElementById("levelIndicator");
      levelIndicator.textContent = "Līmenis: " + calculateCurrentLevel(currentQuestion);
    }
    // Ģenerē un parāda jaunu jautājumu
    generateQuestion();
  }, 2000);
}

function endGame() {
  // Aprēķina kopējo spēles laiku
  totalGameTime = 120 - secondsLeft;
  // Notīra spēles progresu
  localStorage.removeItem("speluProgress");
  // Pārslēdz spēlētāju uz index3.html
  window.location.href = "index3.html";
}