const messages = [
  "There is no impossible, it just isn't the right time yet.",
  "Every mistake is just a step closer to your goal.",
  "You are the creator of your success.",
  "Focusing energy on the positive changes your reality.",
  "Don't be afraid to be different, it\'s your greatest asset.",
  "Your ideas are powerful, use them.",
  "Everything you need is already inside of you, you just have to believe.",
  "Every decision you make leads to your future.",
  "Persistence is more important than perfection.",
  "Your potential is unlimited, use it.",
  "Believe in every step you take, for it leads you to your goal.",
  "Persistence and courage are the strongest allies on the path to success.",
  "Only you can create your happiness.",
  "Your possibilities are not limited, only your thoughts can be.",
  "The steps you take today lay the foundation for tomorrow.",
  "Nothing is better than the success you achieved with your own effort.",
  "Believe in your inner strength and abilities.",
];


const quote = document.getElementById("quote");
const newQuoteButton = document.getElementById('new-quote');

function showRandomQuote() {
  const randomIndex = Math.floor(Math.random() * messages.length);
  quote.textContent = messages[randomIndex];
}
showRandomQuote();

newQuoteButton.addEventListener('click', showRandomQuote);