// API url: https://forkify-api.herokuapp.com/v2

// Selecting elements
const recipeContainer = document.querySelector('.recipe');

const timeout = (s) => {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error(`Request took too long! Timeout after ${s} seconds`));
    }, s * 1000);
  });
};

const showRecipe = async () => {
  try {
    const res = await fetch(
      `https://forkify-api.herokuapp.com/api/get?rId=46956`
    );
    const data = await res.json();

    if (!res.ok) throw new Error(`${res.status} Recipe ${res.statusText}`);

    let { recipe } = data;

    recipe = {
      id: recipe.recipe_id,
      title: recipe.title,
      publisher: recipe.publisher,
      ingredients: recipe.ingredients,
      imageURL: recipe.image_url,
      publisherURL: recipe.publisher_url,
      sourceURL: recipe.source_url,
      socialRank: recipe.social_rank,
    };

    console.log(recipe);
  } catch (error) {
    console.error(error.message);
  }
};
showRecipe();
