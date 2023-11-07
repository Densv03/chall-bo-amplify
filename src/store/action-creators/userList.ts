import { UserListAction, UserListActionTypes, UserListParams } from "../types/userList";
import { Dispatch } from "react";
import axios from "axios";

export const fetchUsers = (params: UserListParams) => {
    const {sortBy, page, q} = params;
    return async (dispatch: Dispatch<UserListAction>) => {
        try {
            dispatch({type: UserListActionTypes.FETCH_USERS});
            const response = await axios.get('https://jsonplaceholder.typicode.com/users', {
                params: {
                    sortBy,
                    page,
                    q
                }
            })
            dispatch({type: UserListActionTypes.FETCH_USERS_SUCCESS, payload: response.data});
        } catch (e) {
            dispatch({type: UserListActionTypes.FETCH_USERS_ERROR, payload: 'Unexpected error occurred'});
        }
    }
}

export const setUserListOptions = (params: UserListParams): UserListAction => {
    return {type: UserListActionTypes.SET_USER_LIST_OPTIONS, payload: params}
}

export const resetUserListOptions = (): UserListAction => {
    return {type: UserListActionTypes.RESET_USER_LIST_OPTIONS};
}