const quotes = [
  "Do it scared.",
  "Small steps still move you forward.",
  "Progress over perfection.",
  "Your future self is watching.",
  "Discipline is self-respect in action.",
  "Be brave enough to be bad at something new.",
  "You don’t need motivation—you need a system.",
  "Consistency beats intensity.",
  "Start before you’re ready.",
  "If it matters to you, you’ll make time.",
  "Dreams don’t work unless you do.",
  "Make it simple. Make it done.",
  "One day or day one—you choose.",
  "The comeback is always personal.",
  "Protect your peace like it’s sacred.",
  "Your comfort zone is a beautiful place—nothing grows there.",
  "You are allowed to outgrow people and places.",
  "Focus on what you can control.",
  "Your pace is still a pace.",
  "Be the reason you’re proud today.",
];

const usedIndexes = new Set();
const quoteElement = document.getElementById("quote");

function generateQuote() {
  if (usedIndexes.size >= quotes.length) {
    usedIndexes.clear();
  }
  while (true) {
    const randomIndex = Math.floor(Math.random() * quotes.length);

    if (usedIndexes.has(randomIndex)) continue;

    const quote = quotes[randomIndex];
    quoteElement.innerHTML = quote;
    usedIndexes.add(randomIndex);
    break;
  }
}
