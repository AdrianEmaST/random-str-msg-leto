const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const questions = [
  { question: "2 + 2 = ", answer: "4" },
  { question: "5 * 6 = ", answer: "30" },
  { question: "10 / 2 = ", answer: "5" },
  { question: "8 - 3 = ", answer: "5" },
];

const getRandomQuestion = () => {
  return questions[Math.floor(Math.random() * questions.length)];
};

const funnyCommit = () => {
  const question = getRandomQuestion();
  rl.question(question.question, (userAnswer) => {
    if (userAnswer.trim() === question.answer) {
      console.log("\x1b[32mBien ahí wacho.\x1b[0m");
    } else {
      console.log("\x1b[31mMal ahí wacho, estudia más.\x1b[0m");
    }
    rl.close();
  });
};
//Prueba
module.exports = {
  funnyCommit,
};
