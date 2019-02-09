export const actionTypes = {
    ADD_TO_CART: 'cart/ADD_TO_CART',
    REMOVE_FROM_CART: 'cart/REMOVE_FROM_CART',
    INCREMENT_AMOUNT_IN_CART: 'cart/INCREMENT',
    DECREMENT_AMOUNT_IN_CART: 'cart/DECREMENT',

    SIGN_UP_SUCCESS: 'session/SIGN_UP_SUCCESS',
    SIGN_UP_ERROR: 'session/SIGN_UP_ERROR',
    SIGN_UP_REQUEST: 'session/SIGN_UP_REQUEST',

    SIGN_IN_SUCCESS: 'session/SIGN_IN_SUCCESS',
    SIGN_IN_ERROR: 'session/SIGN_IN_ERROR',
    SIGN_IN_REQUEST: 'session/SIGN_IN_REQUEST',
    
    SIGN_OUT_SUCCESS: 'session/SIGN_OUT_SUCCESS',
    SIGN_OUT_ERROR: 'session/SIGN_OUT_ERROR',
    SIGN_OUT_REQUEST: 'session/SIGN_OUT_REQUEST',

    REFRESH_CURRENT_USER_START: 'session/REFRESH_CURRENT_USER_START',
    REFRESH_CURRENT_USER_SUCCESS: 'session/REFRESH_CURRENT_USER_SUCCESS',

    GET_CURRENT: 'session/GET_CURRENT',

    //GET_MENU_SUCCESS:
   // SELECT_MENU:
};

export const fetchError = error => ({
    type: actionTypes.FETCH_ERROR,
    payload: error,
});




export const refreshUserStart = () => ({
    type: actionTypes.REFRESH_CURRENT_USER_START
})

export const refreshUserSuccess = (user) => ({
    type: actionTypes.REFRESH_CURRENT_USER_SUCCESS,
    payload: {
        user
    }
})

export const signUpRequest = () => ({
    type: actionTypes.SIGN_UP_REQUEST
}); 

export const signUpSuccess = data => ({
    type: actionTypes.SIGN_UP_SUCCESS,
    payload: data
});

export const signUpError = error => ({
    type: actionTypes.SIGN_UP_ERROR,
    payload: {
        error
    }
});

export const signInRequest = () => ({
    type: actionTypes.SIGN_IN_REQUEST
}); 

export const signInSuccess = data => ({
    type: actionTypes.SIGN_IN_SUCCESS,
    payload: data
});

export const signInError = error => ({
    type: actionTypes.SIGN_IN_ERROR,
    payload: {
        error
    }
});

export const signOutRequest = () =>({
    type: actionTypes.SIGN_OUT_REQUEST
});

export const signOutSuccess = () => ({
    type: actionTypes.SIGN_OUT_SUCCESS
});

export const addToCart = id => ({
    type: actionTypes.ADD_TO_CART,
    payload: {
        id,
    },
});

export const removeFromCart = id => ({
    type: actionTypes.REMOVE_FROM_CART,
    payload: {
        id,
    },
});

export const incrementCartAmountItem = id => ({
    type: actionTypes.INCREMENT_AMOUNT_IN_CART,
    payload: {
        id,
    },
});

export const decrementCartAmountItem = id => ({
    type: actionTypes.DECREMENT_AMOUNT_IN_CART,
    payload: {
        id,
    },
});



/*export const onChange = value => ({
    type: 'CHANGE_FILTER',
    payload: value,
  });*/

 /* export const getMenu = menu => ({
    type: 'GET_MENU_SUCCESS',
    payload: menu,
  });
  
  export const selectMenu = id => ({
    type: 'SELECT_MENU',
    payload: id,
  });*/

