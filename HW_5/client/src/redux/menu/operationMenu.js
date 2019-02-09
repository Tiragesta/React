import * as API from '../../services/api';
import * as menuAction from './actions';

export const getMenuAsync = () => async dispatch => {
    dispatch(menuAction.fetchMenuRequest());
    try {
        const data = await API.getAllMenuItems();
        dispatch(menuAction.fetchMenuSuccess(data));
    } catch (error) {
        //dispatch(fetchError.fetchError(error));
        console.log(error);
    }
}