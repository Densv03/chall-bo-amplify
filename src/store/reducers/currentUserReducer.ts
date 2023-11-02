import { CurrentUserAction, CurrentUserActionTypes, CurrentUserState } from "../types/currentUser";

const initialState: CurrentUserState = {
    id: null,
    user: null,
    loading: false,
    error: null
}
export const currentUserReducer = (state = initialState, action: CurrentUserAction) => {
    switch (action.type) {
        case CurrentUserActionTypes.FETCH_CURRENT_USER:
            return {...state, loading: true};
        case CurrentUserActionTypes.FETCH_CURRENT_USER_SUCCESS:
            return {...state, loading: false, user: action.payload};
        case CurrentUserActionTypes.FETCH_CURRENT_USER_ERROR:
            return {...state, loading: false, error: action.payload};
        case CurrentUserActionTypes.SET_CURRENT_USER:
            return {...state, user: action.payload};
        case CurrentUserActionTypes.SET_CURRENT_ID:
            return {...state, id: action.payload};
        default:
            return state;
    }
}