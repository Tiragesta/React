import { combineReducers } from 'redux';
import entityReducer from './entityReducer';
import menuReducer from './menuReducer';
import cartReducer from './cartReducer';

export default combineReducers({
    menu: menuReducer,
    cart: cartReducer,
    entities: entityReducer,
});