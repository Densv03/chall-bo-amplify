import { UserListAction, UserListActionTypes, UserListState } from "../types/userList";

const initialState: UserListState = {
    data: [],
    loading: false,
    error: null,
    params: {
        sortBy: 'asc',
        page: 1,
        q: ''
    }
}

export const userListReducer = (state = initialState, action: UserListAction) => {
    switch (action.type) {
        case UserListActionTypes.FETCH_USERS:
            return {...state, loading: true};
        case UserListActionTypes.FETCH_USERS_SUCCESS:
            return {...state, loading: false, data: action.payload};
        case UserListActionTypes.FETCH_USERS_ERROR:
            return {...state, loading: false, error: action.payload};
        case UserListActionTypes.SET_USER_LIST_OPTIONS:
            return {...state, params: action.payload};
        case UserListActionTypes.RESET_USER_LIST_OPTIONS:
            return {...state, params: initialState.params};
        default:
            return state;
    }
}