const quotes = [
  "believe in your code like you believe in yourself.",
  "progress is progress, no matter how small.",
  "dreams don't work unless you do.",
  "one step at a time is still moving forward.",
  "hustle in silence, let success be the noise.",
  "every expert was once a beginner.",
  "push yourself, because no one else is going to do it for you.",
  "don't wait for opportunity. create it.",
  "keep going even when it gets tough.",
  "small efforts every day lead to big results.",
  "if it scares you, it might be a good thing to try.",
  "turn your passion into your paycheck.",
  "work until you no longer have to introduce yourself.",
  "great things never come from comfort zones.",
  "code with purpose, not just for profit.",
  "you don't have to be perfect, just consistent.",
  "you got this. even when it doesn't feel like it.",
  "stay hungry. stay focused.",
  "done is better than perfect.",
  "success is built on late nights and early mornings.",
  "don't stop when you're tired. stop when you're done.",
  "your only limit is your mindset.",
  "let your hustle speak louder than your doubts.",
  "the road to success is always under construction.",
  "keep coding, keep growing."
];

const usedIndex = new Set();
const quoteElement = document.getElementById("quote");

function generateQuote() {
  if(usedIndex.size >= quotes.length){
    usedIndex.clear()
  }
  while(true) {
    const randomIDx = Math.floor(Math.random()* quotes.length)
    if(usedIndex.has(randomIDx)) continue
    const quote = quotes[randomIDx]
    quoteElement.innerText = quote;
    usedIndex.add(randomIDx)
    break;
  }
}
