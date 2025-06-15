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
  },
  {
    q: "What is the boiling point of water?",
    options: ["A. 90°C", "B. 80°C", "C. 100°C", "D. 120°C"],
    answer: "C. 100°C"
  },
  {
    q: "What causes day and night?",
    options: ["A. Earth's rotation", "B. Sun's movement", "C. Moon's orbit", "D. Earth's revolution"],
    answer: "A. Earth's rotation"
  },
  {
    q: "Which organ pumps blood?",
    options: ["A. Heart", "B. Lung", "C. Kidney", "D. Brain"],
    answer: "A. Heart"
  },
  {
    q: "Which phase of matter has a fixed shape?",
    options: ["A. Solid", "B. Liquid", "C. Gas", "D. Plasma"],
    answer: "A. Solid"
  },
  {
    q: "What gas do we breathe in?",
    options: ["A. Carbon Dioxide", "B. Nitrogen", "C. Hydrogen", "D. Oxygen"],
    answer: "D. Oxygen"
  },
  {
    q: "What do bones do for the body?",
    options: ["A. Create blood", "B. Store oxygen", "C. Make food", "D. Provide structure"],
    answer: "D. Provide structure"
  },
  {
    q: "What is H2O commonly known as?",
    options: ["A. Salt", "B. Water", "C. Oxygen", "D. Hydrogen"],
    answer: "B. Water"
  },
  {
    q: "Which part of the plant does photosynthesis?",
    options: ["A. Root", "B. Stem", "C. Leaf", "D. Flower"],
    answer: "C. Leaf"
  },
  {
    q: "What are the building blocks of matter?",
    options: ["A. Cells", "B. Rocks", "C. Organs", "D. Atoms"],
    answer: "D. Atoms"
  },
  {
    q: "Which body system controls movement?",
    options: ["A. Respiratory", "B. Muscular", "C. Digestive", "D. Endocrine"],
    answer: "B. Muscular"
  },
  {
    q: "What kind of energy comes from the sun?",
    options: ["A. Solar", "B. Wind", "C. Electrical", "D. Mechanical"],
    answer: "A. Solar"
  },
  {
    q: "Which tool helps see tiny things?",
    options: ["A. Telescope", "B. Ruler", "C. Microscope", "D. Magnet"],
    answer: "C. Microscope"
  },
  {
    q: "Where does a caterpillar become a butterfly?",
    options: ["A. Nest", "B. Hive", "C. Cocoon", "D. Chrysalis"],
    answer: "D. Chrysalis"
  },
  {
    q: "What part of the body helps you think?",
    options: ["A. Heart", "B. Brain", "C. Lungs", "D. Stomach"],
    answer: "B. Brain"
  },
  {
    q: "What is the closest star to Earth?",
    options: ["A. Sirius", "B. The Sun", "C. Polaris", "D. Alpha Centauri"],
    answer: "B. The Sun"
  },
  {
    q: "What organ helps digest food?",
    options: ["A. Lung", "B. Kidney", "C. Stomach", "D. Liver"],
    answer: "C. Stomach"
  },
  {
    q: "What force pulls objects toward Earth?",
    options: ["A. Magnetism", "B. Friction", "C. Electricity", "D. Gravity"],
    answer: "D. Gravity"
  }
];

let currentQuestion = 0;
let enemyHealth = 100;
let playerHealth = 100;

const qText = document.getElementById("question");
const btnA = document.getElementById("btnA");
const btnB = document.getElementById("btnB");
const btnC = document.getElementById("btnC");
const btnD = document.getElementById("btnD");
const log = document.getElementById("battle-log");
const enemyHP = document.getElementById("enemy-health");
const playerHP = document.getElementById("player-health");

function loadQuestion() {
  const q = questions[currentQuestion];
  qText.textContent = q.q;
  btnA.textContent = q.options[0];
  btnB.textContent = q.options[1];
  btnC.textContent = q.options[2];
  btnD.textContent = q.options[3];
  [btnA, btnB, btnC, btnD].forEach(btn => btn.disabled = false);
}

function checkAnswer(selectedText) {
  const correct = questions[currentQuestion].answer;

  if (selectedText === correct) {
    enemyHealth = Math.max(0, enemyHealth - 30);
    enemyHP.textContent = `Enemy Health: ${enemyHealth}`;
    log.textContent = "✅ Correct! You attacked!";
  } else {
    playerHealth = Math.max(0, playerHealth - 20);
    playerHP.textContent = `Player Health: ${playerHealth}`;
    log.textContent = "❌ Wrong! You got hit!";
  }

  [btnA, btnB, btnC, btnD].forEach(btn => btn.disabled = true);
  currentQuestion++;

  setTimeout(() => {
    if (enemyHealth === 0) {
      log.textContent = "🎉 You defeated the enemy!";
    } else if (playerHealth === 0) {
      log.textContent = "💀 You were defeated!";
    } else if (currentQuestion < questions.length) {
      log.textContent = "🧪 Next question!";
      loadQuestion();
    } else {
      log.textContent = "🧠 All questions complete!";
    }
  }, 1500);
}

btnA.addEventListener("click", () => checkAnswer(btnA.textContent));
btnB.addEventListener("click", () => checkAnswer(btnB.textContent));
btnC.addEventListener("click", () => checkAnswer(btnC.textContent));
btnD.addEventListener("click", () => checkAnswer(btnD.textContent));

loadQuestion();

const startScreen = document.getElementById("start-screen");
const battleContainer = document.querySelector(".battle-container");
const startBtn = document.getElementById("start-btn");
const nameInput = document.getElementById("player-name");

startBtn.addEventListener("click", () => {
  const name = nameInput.value.trim();
  if (name === "") {
    alert("Please enter your name to begin!");
    return;
  }

  document.getElementById("player-health").textContent = `Player Health (${name}): 100`;
  startScreen.style.display = "none";
  battleContainer.style.display = "block";
});


const zoneScreen = document.getElementById("zone-select");

startBtn.addEventListener("click", () => {
  const name = nameInput.value.trim();
  if (name === "") {
    alert("Please enter your name to begin!");
    return;
  }
  startScreen.style.display = "none";
  zoneScreen.style.display = "block";
});

const zoneButtons = document.querySelectorAll(".zone-btn");
let selectedZone = "";

zoneButtons.forEach(button => {
  button.addEventListener("click", () => {
    selectedZone = button.dataset.zone;
    console.log("Zone Selected:", selectedZone); // we’ll use this later
    zoneScreen.style.display = "none";
    battleContainer.style.display = "block";

    // Future: Load zone-specific questions here!
    // loadQuestionsByZone(selectedZone);
  });
});

