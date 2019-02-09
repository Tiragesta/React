import { normalize } from 'normalizr';
import * as actionTypes from './actionTypes';
import menuItemsSchema from '../../schemas/menuSchema';

export const fetchMenuSuccess = data => {
    const normalizedData = normalize(data, [menuItemsSchema]);
    const {entities} = normalizedData;

    
    const menuItems = Object.keys(entities.menuItems);
    const categories = Object.keys(entities.categories);
    const result = {
        menuItems, categories
    };
    
    return {
        type: actionTypes.FETCH_SUCCESS,
        payload: result,
    };
};


export const fetchMenuRequest = () => ({
    type: actionTypes.FETCH_REQUEST,
});

export const selectCategory = category => ({
    type: actionTypes.SELECT_CATEGORY,
    payload: category,
})



