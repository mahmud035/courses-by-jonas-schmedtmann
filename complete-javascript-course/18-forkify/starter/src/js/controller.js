// https://forkify-api.herokuapp.com/v2

const recipeContainer = document.querySelector('.recipe');

const timeout = (s) => {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};
