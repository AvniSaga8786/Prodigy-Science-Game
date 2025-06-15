const questions = [
  {
    q: "What part of the cell makes energy?",
    options: ["A. Nucleus", "B. Mitochondria", "C. Ribosome", "D. Cell Wall"],
    answer: "B. Mitochondria"
  },
  {
    q: "Which planet is known as the Red Planet?",
    options: ["A. Venus", "B. Jupiter", "C. Mars", "D. Saturn"],
    answer: "C. Mars"
  },
  {
    q: "What gas do plants absorb from the air?",
    options: ["A. Carbon Dioxide", "B. Oxygen", "C. Hydrogen", "D. Nitrogen"],
    answer: "A. Carbon Dioxide"
  }
];

let currentQuestion = 0;
let enemyHealth = 100;
let playerHealth = 100;
let playerName = "";
let selectedZone = "";

const qText = document.getElementById("question");
const answerButtons = document.querySelectorAll(".choice-btn");
const battleLog = document.getElementById("battle-log");
const enemyHP = document.getElementById("enemy-health");
const playerHP = document.getElementById("player-health");

const startScreen = document.getElementById("start-screen");
const zoneScreen = document.getElementById("zone-select");
const battleContainer = document.querySelector(".battle-container");
const startBtn = document.getElementById("start-btn");
const nameInput = document.getElementById("player-name");
const zoneButtons = document.querySelectorAll(".zone-btn");

// Start → Zone Select
startBtn.addEventListener("click", () => {
  playerName = nameInput.value.trim();
  if (playerName === "") {
    alert("Please enter your name to begin!");
    return;
  }
  startScreen.style.display = "none";
  zoneScreen.style.display = "block";
});

// Zone → Battle
zoneButtons.forEach(button => {
  button.addEventListener("click", () => {
    selectedZone = button.dataset.zone;
    zoneScreen.style.display = "none";
    battleContainer.style.display = "block";
    playerHP.textContent = `Player Health (${playerName}): ${playerHealth}`;
    loadQuestion();
  });
});

// Load Question
function loadQuestion() {
  if (currentQuestion >= questions.length) {
    battleLog.textContent = "🧠 All questions complete!";
    return;
  }
  const q = questions[currentQuestion];
  qText.textContent = q.q;
  answerButtons.forEach((btn, i) => {
    btn.textContent = q.options[i];
    btn.disabled = false;
  });
}

// Answer Handling
function checkAnswer(selectedText) {
  const correct = questions[currentQuestion].answer;
  if (selectedText === correct) {
    enemyHealth = Math.max(0, enemyHealth - 30);
    enemyHP.textContent = `Enemy Health: ${enemyHealth}`;
    battleLog.textContent = "✅ Correct! You attacked!";
  } else {
    playerHealth = Math.max(0, playerHealth - 20);
    playerHP.textContent = `Player Health (${playerName}): ${playerHealth}`;
    battleLog.textContent = "❌ Wrong! You got hit!";
  }

  answerButtons.forEach(btn => btn.disabled = true);
  currentQuestion++;

  setTimeout(() => {
    if (enemyHealth <= 0) {
      battleLog.textContent = `🎉 You conquered the ${selectedZone}!`;
    } else if (playerHealth <= 0) {
      battleLog.textContent = `💀 ${playerName} was defeated in the ${selectedZone}...`;
    } else {
      battleLog.textContent = "🧪 Next question!";
      loadQuestion();
    }
  }, 1500);
}

// Bind Answer Buttons
answerButtons.forEach(btn => {
  btn.addEventListener("click", () => checkAnswer(btn.textContent));
});
