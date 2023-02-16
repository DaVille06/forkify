import * as model from './model.js';
import recipeView from './views/recipeView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async function () {
  try {
    // get the recipe id from the url
    const id = window.location.hash.slice(1);

    if (!id) return;

    recipeView.renderSpinner();

    // loading recipe
    await model.loadRecipe(id);

    // rendering recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    alert(err);
  }
};

// simple way of adding multiple event listeners
['hashchange', 'load'].forEach(ev =>
  window.addEventListener(ev, controlRecipes)
);
