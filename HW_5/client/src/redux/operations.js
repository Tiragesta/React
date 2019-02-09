import axios from 'axios';
import {
    signUpRequest, 
    signUpSuccess, 
    signUpError,
    signInRequest, 
    signInSuccess, 
    signInError,
    signOutRequest, 
    signOutSuccess,
    refreshUserStart,
    refreshUserSuccess,
    addToCart,
}  from './actions';

//import { error } from 'util';
import * as selectors from './selectors';

axios.defaults.baseURL = 'http://localhost:4040';

const setAuthHeader = token => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

const clearAuthHeader = () => {
    axios.defaults.headers.common['Authorization'] = null;
}

export const addedToCart = () => dispatch =>{
    dispatch(addToCart());

    axios.get('http://localhost:3000/cart').then(console.log(addToCart)).catch(error => console.log(error))
}

export const signUp = credentials => dispatch => {
    dispatch(signUpRequest());

    axios
      .post('http://localhost:4040/auth/signup', credentials)
      .then(({data}) => {
          setAuthHeader(data.token);
          dispatch(signUpSuccess(data))
        })
      .catch(error => dispatch(signUpError(error)));
};

export const signIn = credentials => dispatch => {
    dispatch(signInRequest());

    axios
      .post('http://localhost:4040/auth/signin', credentials)
      .then(({data}) => {
          setAuthHeader(data.token);
          dispatch(signInSuccess(data));
        })
      .catch(error => dispatch(signInError(error)));
};

export const signOut = () => (dispatch, getState) => {
    dispatch(signOutRequest());

    const token = selectors.getToken(getState());

    axios
      .post('http://localhost:4040/auth/signout')
      .then(() => {
        clearAuthHeader();
        dispatch(signOutSuccess());
    });
};

export const refreshCurrentUser = () => (dispatch, getState) => {
    const token = selectors.getToken(getState());

    if(!token) return;

    setAuthHeader(token);

    dispatch(refreshUserStart());

    axios
      .get('/auth/current')
      .then(({ data }) => dispatch(refreshUserSuccess(data.user)))
      .catch(error => {
          clearAuthHeader();
          console.log(error)});   
};

