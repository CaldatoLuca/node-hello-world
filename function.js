const quotes = [
  "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
  "The way to get started is to quit talking and begin doing. - Walt Disney",
  "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
  "If life were predictable it would cease to be life, and be without flavor. - Eleanor Roosevelt",
  "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. - Oprah Winfrey",
  "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. - James Cameron",
  "Life is what happens when you're busy making other plans. - John Lennon",
  "Spread love everywhere you go. Let no one ever come to you without leaving happier. - Mother Teresa",
  "When you reach the end of your rope, tie a knot in it and hang on. - Franklin D. Roosevelt",
  "Always remember that you are absolutely unique. Just like everyone else. - Margaret Mead",
];

//funzione che ritorna una frase random dall' array
/**
 *
 * @returns string
 */
function randomWord() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

//esport la funzione cosi da usarla in server.js
module.exports = {
  randomWord,
};
