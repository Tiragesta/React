import { combineReducers } from 'redux';
import * as actionTypes from '../menu/actionTypes';

const items = (state = [], { type, payload }) => {
    switch (type) {
        case actionTypes.FETCH_SUCCESS:
          return payload.menuItems;

        default:
           return state;
    }
};
const categories = (state = [], {type, payload}) => {
    switch(type) {
        case actionTypes.FETCH_SUCCESS:
          return payload.categories;

        default:
          return state;
    }
}

const currentCategories = (state = null, { type, payload }) => {
    switch (type) {
        case actionTypes.SELECT_CATEGORY:
          return payload;

        default:
           return state;
    }
};

export default combineReducers({
    menuItems: items,
    categories: categories,
    currentCategory: currentCategories,
})

