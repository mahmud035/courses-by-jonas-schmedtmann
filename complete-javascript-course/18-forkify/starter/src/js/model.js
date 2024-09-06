import { API_BASE_URL, RES_PER_PAGE } from './config';
import { getJSON } from './helpers';

export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
    page: 1,
    resultsPerPage: RES_PER_PAGE,
  },
  bookmarks: [],
};

export const loadRecipe = async (recipeId) => {
  try {
    const data = await getJSON(`${API_BASE_URL}${recipeId}`);
    const { recipe } = data?.data;

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

    if (state.bookmarks.some((bookmark) => bookmark.id === recipe.id))
      state.recipe.bookmarked = true;
    else state.recipe.bookmarked = false;
  } catch (error) {
    throw error;
  }
};

export const loadSearchResult = async (query) => {
  try {
    state.search.query = query;

    const data = await getJSON(`${API_BASE_URL}?search=${query}`);

    state.search.results = data.data.recipes.map((recipe) => {
      return {
        id: recipe.id,
        title: recipe.title,
        publisher: recipe.publisher,
        image: recipe.image_url,
      };
    });
    state.search.page = 1;
  } catch (error) {
    throw error;
  }
};

export const getSearchResultsPage = (page = state.search.page) => {
  state.search.page = page;

  const start = (page - 1) * state.search.resultsPerPage; // 0
  const end = page * state.search.resultsPerPage; // 9

  return state.search.results.slice(start, end);
};

export const updateServings = (newServings) => {
  state.recipe.ingredients.forEach((ingredient) => {
    // newQt = (oldQt * newServings) / oldServings => (2 * 8) / 4 = 4
    ingredient.quantity =
      (ingredient.quantity * newServings) / state.recipe.servings;
  });

  state.recipe.servings = newServings;
};

export const addBookmark = (recipe) => {
  // Add bookmark
  state.bookmarks.push(recipe);

  // Mark current recipe as bookmarked
  if (recipe.id === state.recipe.id) state.recipe.bookmarked = true;
};

export const deleteBookmark = (id) => {
  // Delete bookmark
  const index = state.bookmarks.findIndex((el) => el.id === id);
  state.bookmarks.splice(index, 1);

  // Mark current recipe as NOT bookmarked
  if (id === state.recipe.id) state.recipe.bookmarked = false;
};

console.log('hello');
