import readlineSync from 'readline-sync';

export const talkWithUser = (description, getQuestionAnswer) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  const username = readlineSync.question('May I have your name?\n');
  console.log(`Hello, ${username}!`);

  const counterQuestion = 3;

  const iter = (i, selectorByAnswer) => {
    if (!selectorByAnswer) return `Let's try again, ${username}`;
    if (i === counterQuestion) return `Congratulations, ${username}!`;
    const [question, expectedAnswer] = getQuestionAnswer();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer !== expectedAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.`);
      return iter(i, false);
    }
    console.log('Correct!');
    return iter(i + 1, selectorByAnswer);
  };

  console.log(iter(0, true));
};
