const questions = [
  {
    q: "Which part of the cell makes energy?",
    options: ["A. Nucleus", "B. Mitochondria", "C. Ribosome", "D. Cell Wall"],
    answer: "B. Mitochondria"
  },
  {
    q: "What planet is the Red Planet?",
    options: ["A. Earth", "B. Jupiter", "C. Mars", "D. Saturn"],
    answer: "C. Mars"
  },
  {
    q: "Plants absorb which gas from the air?",
    options: ["A. Oxygen", "B. Carbon Dioxide", "C. Hydrogen", "D. Helium"],
    answer: "B. Carbon Dioxide"
  }
];

let current = 0;
let playerHealth = 100;
let enemyHealth = 100;
let playerName = "";

const startBtn = document.getElementById("start-btn");
const nameInput = document.getElementById("player-name");
const zoneBtns = document.querySelectorAll(".zone-btn");
const answerBtns = document.querySelectorAll(".choice-btn");

startBtn.addEventListener("click", () => {
  playerName = nameInput.value.trim();
  if (!playerName) return alert("Please enter your name.");
  document.getElementById("start-screen").style.display = "none";
  document.getElementById("zone-select").style.display = "block";
});

zoneBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    document.getElementById("zone-select").style.display = "none";
    document.querySelector(".battle-container").style.display = "block";
    document.getElementById("player-health").textContent = `Player Health (${playerName}): ${playerHealth}`;
    loadQuestion();
  });
});

function loadQuestion() {
  const q = questions[current];
  document.getElementById("question").textContent = q.q;
  answerBtns.forEach((btn, i) => {
    btn.textContent = q.options[i];
    btn.disabled = false;
  });
}

function checkAnswer(selectedText) {
  const correct = questions[current].answer;
  if (selectedText === correct) {
    enemyHealth = Math.max(0, enemyHealth - 30);
    document.getElementById("enemy-health").textContent = `Enemy Health: ${enemyHealth}`;
    document.getElementById("battle-log").textContent = "✅ Correct! You attacked!";
  } else {
    playerHealth = Math.max(0, playerHealth - 20);
    document.getElementById("player-health").textContent = `Player Health (${playerName}): ${playerHealth}`;
    document.getElementById("battle-log").textContent = "❌ Wrong! You got hit!";
  }

  answerBtns.forEach(btn => btn.disabled = true);
  current++;

  setTimeout(() => {
    if (enemyHealth <= 0) {
      document.getElementById("battle-log").textContent = "🎉 You won the battle!";
    } else if (playerHealth <= 0) {
      document.getElementById("battle-log").textContent = "💀 You were defeated...";
    } else {
      document.getElementById("battle-log").textContent = "🧪 Next question!";
      loadQuestion();
    }
  }, 1200);
}

answerBtns.forEach(btn =>
  btn.addEventListener("click", () => checkAnswer(btn.textContent))
);
