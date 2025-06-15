// Example bank of 40 science questions
const allQuestions = [
  // Life Lab Questions
  { q: "What is the powerhouse of the cell?", options: ["A. Nucleus", "B. Chloroplast", "C. Mitochondria", "D. Ribosome"], answer: "C. Mitochondria" },
  { q: "Where does photosynthesis occur?", options: ["A. Vacuole", "B. Mitochondria", "C. Chloroplast", "D. Nucleus"], answer: "C. Chloroplast" },
  { q: "Humans are classified as...", options: ["A. Amphibians", "B. Reptiles", "C. Mammals", "D. Birds"], answer: "C. Mammals" },
  { q: "Which organ pumps blood?", options: ["A. Lungs", "B. Brain", "C. Liver", "D. Heart"], answer: "D. Heart" },
  { q: "Which part of the brain controls balance?", options: ["A. Cerebrum", "B. Cerebellum", "C. Medulla", "D. Thalamus"], answer: "B. Cerebellum" },
  // Chemistry
  { q: "What is the formula for water?", options: ["A. CO2", "B. O2", "C. H2O", "D. NaCl"], answer: "C. H2O" },
  { q: "What element has symbol O?", options: ["A. Oxygen", "B. Gold", "C. Hydrogen", "D. Carbon"], answer: "A. Oxygen" },
  { q: "What is the pH of a neutral substance?", options: ["A. 1", "B. 7", "C. 14", "D. 0"], answer: "B. 7" },
  { q: "Salt is also known as...", options: ["A. NaCl", "B. H2O", "C. C6H12O6", "D. CO2"], answer: "A. NaCl" },
  { q: "Which gas is used in balloons?", options: ["A. Hydrogen", "B. Helium", "C. Oxygen", "D. Nitrogen"], answer: "B. Helium" },
  // Geology
  { q: "What layer do we live on?", options: ["A. Mantle", "B. Core", "C. Crust", "D. Inner Core"], answer: "C. Crust" },
  { q: "What causes earthquakes?", options: ["A. Rain", "B. Volcanoes", "C. Plate movement", "D. Moon phases"], answer: "C. Plate movement" },
  { q: "What is molten rock called?", options: ["A. Lava", "B. Sand", "C. Slate", "D. Ice"], answer: "A. Lava" },
  { q: "The rock cycle includes...", options: ["A. Baking", "B. Heating", "C. Melting", "D. Digging"], answer: "C. Melting" },
  { q: "Fossils are usually found in...", options: ["A. Igneous rock", "B. Sedimentary rock", "C. Metamorphic rock", "D. Asphalt"], answer: "B. Sedimentary rock" },
  // Physics
  { q: "What force pulls objects to Earth?", options: ["A. Friction", "B. Tension", "C. Gravity", "D. Magnetism"], answer: "C. Gravity" },
  { q: "Light travels fastest in...", options: ["A. Water", "B. Air", "C. Space", "D. Steel"], answer: "C. Space" },
  { q: "Which color has the most energy?", options: ["A. Red", "B. Blue", "C. Yellow", "D. Green"], answer: "B. Blue" },
  { q: "What is used to measure force?", options: ["A. Grams", "B. Liters", "C. Newtons", "D. Celsius"], answer: "C. Newtons" },
  { q: "What type of energy is in food?", options: ["A. Chemical", "B. Kinetic", "C. Potential", "D. Solar"], answer: "A. Chemical" },
  // Astronomy, Environment, more...
  { q: "Which planet is closest to the Sun?", options: ["A. Earth", "B. Venus", "C. Mercury", "D. Mars"], answer: "C. Mercury" },
  { q: "What is Earth’s largest natural satellite?", options: ["A. Mars", "B. Sun", "C. Moon", "D. Titan"], answer: "C. Moon" },
  { q: "What gas do plants absorb?", options: ["A. Oxygen", "B. Nitrogen", "C. Hydrogen", "D. Carbon Dioxide"], answer: "D. Carbon Dioxide" },
  { q: "What’s a renewable energy source?", options: ["A. Coal", "B. Oil", "C. Wind", "D. Gasoline"], answer: "C. Wind" },
  { q: "Which planet has rings?", options: ["A. Earth", "B. Mars", "C. Venus", "D. Saturn"], answer: "D. Saturn" },
  // Finish with bonus mix:
  { q: "What organ filters blood?", options: ["A. Kidney", "B. Liver", "C. Heart", "D. Brain"], answer: "A. Kidney" },
  { q: "Which of these is an insulator?", options: ["A. Metal", "B. Water", "C. Rubber", "D. Salt"], answer: "C. Rubber" },
  { q: "The process of water vapor turning to rain is...", options: ["A. Evaporation", "B. Precipitation", "C. Condensation", "D. Sublimation"], answer: "B. Precipitation" },
  { q: "What gives leaves their green color?", options: ["A. Hemoglobin", "B. Chlorophyll", "C. Glucose", "D. Lignin"], answer: "B. Chlorophyll" },
  { q: "What do we call animal eaters?", options: ["A. Herbivores", "B. Carnivores", "C. Omnivores", "D. Decomposers"], answer: "B. Carnivores" },
  { q: "Which metal is liquid at room temp?", options: ["A. Gold", "B. Mercury", "C. Iron", "D. Aluminum"], answer: "B. Mercury" },
  { q: "Earth’s atmosphere is mostly...", options: ["A. Oxygen", "B. Hydrogen", "C. Nitrogen", "D. CO2"], answer: "C. Nitrogen" },
  { q: "Water freezes at what °C?", options: ["A. 0", "B. 32", "C. 100", "D. -10"], answer: "A. 0" },
  { q: "Which part of blood fights infection?", options: ["A. Plasma", "B. Red cells", "C. White cells", "D. Platelets"], answer: "C. White cells" },
  { q: "Electrons are found...", options: ["A. In the nucleus", "B. Orbiting the nucleus", "C. In protons", "D. In neutrons"], answer: "B. Orbiting the nucleus" },
  { q: "Sound travels fastest in...", options: ["A. Air", "B. Water", "C. Steel", "D. Vacuum"], answer: "C. Steel" },
  { q: "Animals that lay eggs include...", options: ["A. Bears", "B. Whales", "C. Chickens", "D. Lions"], answer: "C. Chickens" },
  { q: "What’s used to measure temperature?", options: ["A. Thermostat", "B. Barometer", "C. Thermometer", "D. Compass"], answer: "C. Thermometer" },
  { q: "Which planet is red?", options: ["A. Mars", "B. Saturn", "C. Jupiter", "D. Neptune"], answer: "A. Mars" }
];


let current = 0;
let playerHealth = 100;
let enemyHealth = 100;
let xp = 0;
let playerName = "";

const startBtn = document.getElementById("start-btn");
const nameInput = document.getElementById("player-name");
const questionEl = document.getElementById("question");
const playerHPBar = document.getElementById("player-health");
const enemyHPBar = document.getElementById("enemy-health");
const log = document.getElementById("battle-log");
const xpDisplay = document.getElementById("xp");
const endMessage = document.getElementById("end-message");
const finalXP = document.getElementById("final-xp");

const answerBtns = document.querySelectorAll(".choice-btn");

startBtn.onclick = () => {
  playerName = nameInput.value.trim();
  if (!playerName) return alert("Please enter your name.");
  document.getElementById("start-screen").style.display = "none";
  document.getElementById("battle-screen").style.display = "block";
  updateBars();
  loadQuestion();
};

function updateBars() {
  playerHPBar.style.width = `${playerHealth}%`;
  enemyHPBar.style.width = `${enemyHealth}%`;
  xpDisplay.textContent = `XP: ${xp}`;
}

function loadQuestion() {
  if (current >= allQuestions.length) current = 0;
  const q = allQuestions[current];
  questionEl.textContent = q.q;
  answerBtns.forEach((btn, i) => {
    btn.textContent = q.options[i];
    btn.disabled = false;
  });
}

function checkAnswer(choice) {
  const correct = allQuestions[current].answer;
  if (choice === correct) {
    enemyHealth = Math.max(0, enemyHealth - 30);
    xp += 10;
    log.textContent = "✅ Correct! You attacked!";
  } else {
    playerHealth = Math.max(0, playerHealth - 20);
    log.textContent = "❌ Wrong! You were hit!";
  }

  updateBars();
  answerBtns.forEach(btn => btn.disabled = true);
  current++;

 setTimeout(() => {
  if (enemyHealth <= 0) return endGame("🎉 You Win!");
  if (playerHealth <= 0) return endGame("💀 You were defeated...");
  log.textContent = "🧪 Next question...";
  loadQuestion();
}, 1200); 
}

function endGame(message) {
  document.getElementById("battle-screen").style.display = "none";
  document.getElementById("end-screen").style.display = "block";
  endMessage.textContent = message;
  finalXP.textContent = xp;
}

answerBtns.forEach(btn =>
  btn.addEventListener("click", () => checkAnswer(btn.textContent))
);
