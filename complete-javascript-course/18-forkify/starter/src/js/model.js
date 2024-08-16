export const state = {
  recipe: {},
};

export const loadRecipe = async (recipeId) => {
  try {
    const url = `https://forkify-api.herokuapp.com/api/v2/recipes/${recipeId}`;
    const res = await fetch(url);
    const data = await res.json();

    if (!res.ok) throw new Error(`${res.status} Recipe ${res.statusText}`);

    const { recipe } = data.data;

    // Store recipe object inside state.recipe
    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      image: recipe.image_url,
      publisher: recipe.publisher,
      ingredients: recipe.ingredients,
      servings: recipe.servings,
      sourceUrl: recipe.source_url,
      cookingTime: recipe.cooking_time,
    };
  } catch (error) {
    console.error(error);
  }
};
