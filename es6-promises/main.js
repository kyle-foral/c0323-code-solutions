import takeAChance from './take-a-chance.js';

takeAChance('Kyle')
  .then((resolve) => {
    console.log(resolve);
  })
  .catch((reject) => {
    console.log(reject.message);
  });
