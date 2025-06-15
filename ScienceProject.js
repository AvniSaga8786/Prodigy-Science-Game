const zones = {
  life: [
    {
      q: "Which part of a plant cell performs photosynthesis?",
      options: ["A. Nucleus", "B. Mitochondria", "C. Chloroplast", "D. Ribosome"],
      answer: "C. Chloroplast"
    },
    {
      q: "Humans are classified as...",
      options: ["A. Amphibians", "B. Mammals", "C. Reptiles", "D. Birds"],
      answer: "B. Mammals"
    }
  ],
  chem: [
    {
      q: "What is the chemical symbol for water?",
      options: ["A. H2O", "B. O2", "C. CO2", "D. H2"],
      answer: "A. H2O"
    },
    {
      q: "What’s the pH of a neutral solution?",
      options: ["A. 0", "B. 7", "C. 14", "D. 1"],
      answer: "B. 7"
    }
  ],
  geo: [
    {
      q: "Which layer of Earth do we live on?",
      options: ["A. Core", "B. Mantle", "C. Crust", "D. Outer Core"],
      answer: "C. Crust"
    },
    {
      q: "Volcanoes often form at...",
      options: ["A. Plate Boundaries", "B. Ice Caps", "C. Deserts", "D. Rainforests"],
      answer: "A. Plate Boundaries"
    }
  ]
};

let playerName = "", playerHP = 100, enemyHP = 100, xp = 0, level = 1;
let currentZone = "", currentQ = 0, questions = [];

document.getElementById("start-btn").onclick = () => {
  playerName = document.getElementById("player-name").value.trim();
  if (!playerName) return alert("Please enter your name.");
  document.getElementById("start-screen").style.display = "none";
  document.getElementById("zone-select").style.display = "block";
};

document.querySelectorAll(".zone-btn").forEach(btn => {
  btn.onclick = () => {
    currentZone = btn.dataset.zone;
    questions = zones[currentZone];
    document.getElementById("zone-title").textContent = btn.textContent + " Battle";
    document.getElementById("zone-select").style.display = "none";
    document.getElementById("battle-screen").style.display = "block";
    updateHealthBars();
    loadQuestion();
  };
});

function updateHealthBars() {
  document.getElementById("player-health").style.width = playerHP + "%";
  document.getElementById("enemy-health").style.width = enemyHP + "%";
  document.getElementById("xp").textContent = `XP: ${xp}`;
}

function loadQuestion() {
  const q = questions[currentQ];
  document.getElementById("question").textContent = q.q;
  document.querySelectorAll(".choice-btn").forEach((btn, i) => {
    btn.textContent = q.options[i];
    btn.disabled = false;
  });
}

function checkAnswer(choice) {
  const correct = questions[currentQ].answer;
  const log = document.getElementById("battle-log");

  if (choice === correct) {
    enemyHP = Math.max(0, enemyHP - 30);
    xp += 10;
    log.textContent = "✅ Correct! You attacked.";
  } else {
    playerHP = Math.max(0, playerHP - 20);
    log.textContent = "❌ Wrong! You took damage.";
  }

  updateHealthBars();
  document.querySelectorAll(".choice-btn").forEach(btn => btn.disabled = true);
  currentQ++;

  setTimeout(() => {
    if (enemyHP <= 0) return endGame("🎉 You Win!");
    if (playerHP <= 0) return endGame("💀 Defeat...");
    if (currentQ < questions.length) {
      log.textContent = "🧪 Next question...";
      loadQuestion();
    } else {
      currentQ = 0;
      loadQuestion();
    }
  }, 1200);
}

function endGame(message) {
  document.getElementById("battle-screen").style.display = "none";
  document.getElementById("end-message").textContent =