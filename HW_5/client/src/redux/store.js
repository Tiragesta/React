import { createStore, applyMiddleware, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import sessionReducer from './reducers/sessionReducer';
import menuReducer from '../redux/reducers/menuReducer';
import cartReducer from '../redux/reducers/cartReducer';

const rootPersistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
};

const sessionPersistConfig = {
  key: 'session',
  storage,
  whitelist: ['token']
};

const rootReducer = combineReducers({
  menu: menuReducer,
  cart: cartReducer,
  session: persistReducer(sessionPersistConfig, sessionReducer)
})

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

const middleware = [thunk];

const enhancer = composeWithDevTools(applyMiddleware(...middleware));

export const store = createStore(persistedReducer, enhancer);
export const persistor = persistStore(store);

/*import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import entities from '../db.json';

const enhancer = composeWithDevTools();

const preloadedState = {
    menu : Object.keys(entities.menu),
    entities: {...entities},
};

const store = createStore(rootReducer, preloadedState, enhancer);

export default store;*/