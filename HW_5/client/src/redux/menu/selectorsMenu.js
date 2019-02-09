import { createSelector } from 'reselect';
import * as entities from './actions';

// Menu

export const getMenuIds = state => state.menu;

const getMenuEntities = state => state.entities;
//const getMenuCategoriesEntities = state => state.entities.categories;

//export const selectCurrentMenuCategoryName = state => state.menu.currentCategory;

export const getMenu = createSelector(
    [getMenuIds, getMenuEntities],
    (ids, entities) => ids.map(id => entities[id]),
);

/*const getCurrentCategory = createSelector(
	[getMenuCategoriesEntities, selectCurrentMenuCategoryName],
	(map, name) => {
		const categories = Object.values(map);

		return categories.find(item => item.name === name);
	},
);*/

//export const selectCategories = createSelector(
	//[getMenuCategoriesEntities],
	//entities => Object.values(entities),
//);

/*export const selectMenuItems = createSelector(
	[getMenuIds, getMenuEntities],
	(ids, entities) =>
		ids.reduce((acc, id) => {
			acc.push(entities[id]);
			return acc;
		}, []),
);*/
//export const selectIngredients = state => state.menu.ingredients;

/*export const selectMenuItemsByCategory = createSelector(
	[getCurrentCategory, selectMenuItems],
	(category, menuItems) =>
		category
			? menuItems.filter(item => item.category === category.id)
			: menuItems,
);*/

// Cart

const getCartMenuIds = state => state.cart.ids;

const getCartMenuAmounts = state => state.cart.amount;

export const getCartMenuAmount = createSelector(
    getCartMenuIds,
    ids => ids.length,
);

export const getCartMenu = createSelector(
    [getCartMenuIds, getCartMenuAmounts, getMenuEntities ],
	(ids, amounts, entities) => 
	    ids.map(id => ({
          ...entities[id],
          amount: amounts[id],
       })),
);