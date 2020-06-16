import readlineSync from 'readline-sync';

export const talkWithUser = (description, getQuestion, getAnswer) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  const username = readlineSync.question('May I have your name?\n');
  console.log('Hello, ' + username + '!');

  const counterQuestion = 3;
  let i = 0;

  for (; i < counterQuestion; i += 1) {

    const question = getQuestion();
    console.log(`Question: ${question}`);

    const answer = readlineSync.question('Your answer: ');
    const expectedAnswer = getAnswer(question);

    if (answer != expectedAnswer) {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.`);
    }
    console.log('Correct!');
  }

  return i === counterQuestion
    ? console.log(`Congratulations, ${username}!`)
    : console.log(`Let's try again, ${username}`)
};

