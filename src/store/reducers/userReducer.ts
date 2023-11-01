import { UserAction, UserActionTypes, UserState } from "../types/user";

const initialState: UserState = {
    user: null
}

export const userReducer = (state = initialState, action: UserAction) => {
    switch (action.type) {
        case UserActionTypes.UPDATE_USER:
            return {
                ...state,
                user: action.payload
            }
        case UserActionTypes.RESET_USER:
            return {
                ...state,
                user: null
            }
        default:
            return state
    }
}