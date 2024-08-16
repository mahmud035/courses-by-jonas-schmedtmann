export const state = {
  recipe: {},
  search: {},
  bookmarks: [],
};

export const loadRecipe = async (recipeId) => {
  try {
    const url = `https://forkify-api.herokuapp.com/api/get?rId=${recipeId}`;
    const res = await fetch(url);
    const data = await res.json();

    if (!res.ok) throw new Error(`${res.status} Recipe ${res.statusText}`);

    const { recipe } = data;

    // Store recipe object inside state.recipe
    state.recipe = {
      id: recipe.recipe_id,
      title: recipe.title,
      image: recipe.image_url,
      publisher: recipe.publisher,
      ingredients: recipe.ingredients,
      publisherUrl: recipe.publisher_url,
      sourceUrl: recipe.source_url,
      socialRank: recipe.social_rank,
    };
  } catch (error) {
    console.error(error);
  }
};
