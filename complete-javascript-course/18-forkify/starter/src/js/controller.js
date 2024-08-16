// API url: https://forkify-api.herokuapp.com/v2

import * as model from './model.js';
import recipeView from './views/recipeView.js';

const timeout = (s) => {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error(`Request took too long! Timeout after ${s} seconds`));
    }, s * 1000);
  });
};

const controlRecipes = async () => {
  try {
    const recipeId = location.hash.slice(1);

    if (!recipeId) return;

    recipeView.renderSpinner();

    // 1. Loading recipe
    await model.loadRecipe(recipeId);

    // 2. Rendering recipe
    recipeView.render(model.state.recipe);
  } catch (error) {
    console.error(error);
  }
};

window.addEventListener('load', controlRecipes);
window.addEventListener('hashchange', controlRecipes);
