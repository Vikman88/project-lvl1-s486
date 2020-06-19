import readlineSync from 'readline-sync';

export const talkWithUser = (description, getQuestion) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  const username = readlineSync.question('May I have your name?\n');
  console.log('Hello, ' + username + '!');

  const counterQuestion = 3;

  const iter = (i, selector) => {

    if (!selector) return `Let's try again, ${username}`;
    if (i === counterQuestion) return `Congratulations, ${username}!`;
    const [question, expectedAnswer] = getQuestion();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer !== expectedAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.`);
      return iter(i, selector = false);
    }
    console.log('Correct!');
    return iter(i += 1, selector);
  };

  console.log(iter(0, true));
};
