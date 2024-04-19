// Spēles parametri
const totalLevels = 4;
const totalQuestionsPerLevel = 5;
let lives = 3;
let currentLevel = 1;
let currentQuestion = 0;
let correctAnswersInRow = 0;

// Funkcija, kas sāk jaunu spēli
function startGame() {
    window.location.href = "index2.html";
}

// Kad lapa ir ielādēta, izsaukt funkciju, kas ģenerē uzdevumu
document.addEventListener("DOMContentLoaded", function() {
    generateQuestion();
});

// Funkcija, kas ģenerē uzdevumu
function generateQuestion() {
    if (currentQuestion < totalQuestionsPerLevel) {
        // Iegūstam jautājumu un atbilžu variantus
        const question = "Monomu 6x²dalot ar monomu 3x², iegūst:";
        const answers = ["A-3x⁴", "B-2x⁴", "C-2x⁶", "D-3x⁶"]; // Ievietojiet pareizās atbildes pirmajā pozīcijā

        // Ģenerējam uzdevumu un pievienojam to HTML
        const questionContainer = document.getElementById("questionContainer");
        const questionDiv = document.createElement("div");
        questionDiv.classList.add("question");
        questionDiv.innerHTML = `<h3>Uzdevums ${currentQuestion + 1}</h3>
            <p>${question}</p>`;
        questionContainer.appendChild(questionDiv);

        // Pievienojam atbilžu variantus
        const answersContainer = document.createElement("div");
        answersContainer.classList.add("answers");
        answers.forEach((answer, index) => {
            const answerButton = document.createElement("button");
            answerButton.classList.add("btn", "btn-secondary", "mx-2");
            answerButton.textContent = answer;
            answerButton.addEventListener("click", () => checkAnswer(index === 1)); // Pārbauda, vai izvēlētais atbilde ir pareiza
            answersContainer.appendChild(answerButton);
        });
        questionContainer.appendChild(answersContainer);

    }}