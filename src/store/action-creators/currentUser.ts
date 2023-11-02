import { CurrentUserAction, CurrentUserActionTypes } from "../types/currentUser";
import { Dispatch } from "react";
import axios from "axios";

export const fetchCurrentUser = (id: string) => {
    return async (dispatch: Dispatch<CurrentUserAction>) => {
        try {
            dispatch({type: CurrentUserActionTypes.FETCH_CURRENT_USER});
            const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
            dispatch({type: CurrentUserActionTypes.FETCH_CURRENT_USER_SUCCESS, payload: response.data});
        } catch (e) {
            dispatch({type: CurrentUserActionTypes.FETCH_CURRENT_USER_ERROR, payload: 'Unexpected error occurred'});
        }
    }
}