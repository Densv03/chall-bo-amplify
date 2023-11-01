import { TokenAction, TokenActionTypes } from "../types/token";

const initialState = {
    token: null
}

export const tokenReducer = (state = initialState, action: TokenAction) => {
    switch (action.type) {
        case TokenActionTypes.UPDATE_TOKEN:
            return {
                ...state,
                token: action.payload
            }
        case TokenActionTypes.RESET_TOKEN:
            return {
                ...state,
                token: null
            }
        default:
            return state
    }
}