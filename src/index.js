import readlineSync from 'readline-sync';

export const makeGame = (description, getQuestionAnswer) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  const username = readlineSync.question('May I have your name?\n');
  console.log(`Hello, ${username}!`);

  const roundsCount = 3;

  const iter = (i) => {
    if (i === roundsCount) {
      console.log(`Congratulations, ${username}!`);
      return;
    }
    const [question, expectedAnswer] = getQuestionAnswer();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer !== expectedAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.`);
      console.log(`Let's try again, ${username}`);
      return;
    }
    console.log('Correct!');
    return iter(i + 1);
  };

  return iter(0);
};
