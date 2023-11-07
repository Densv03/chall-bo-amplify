import { User } from "../../models/core/user.model";

export interface CurrentUserState {
    id: null | string;
    user: null | User;
    loading: boolean;
    error: null | string;
}

export enum CurrentUserActionTypes {
    FETCH_CURRENT_USER = 'FETCH_CURRENT_USER',
    FETCH_CURRENT_USER_SUCCESS = 'FETCH_CURRENT_USER_SUCCESS',
    FETCH_CURRENT_USER_ERROR = 'FETCH_CURRENT_USER_ERROR',
    SET_CURRENT_USER = 'SET_CURRENT_USER',
    SET_CURRENT_ID = 'SET_CURRENT_ID',
    RESET_CURRENT_USER = 'RESET_CURRENT_USER'
}

interface FetchCurrentUserAction {
    type: CurrentUserActionTypes.FETCH_CURRENT_USER;
}

interface FetchCurrentUserSuccessAction {
    type: CurrentUserActionTypes.FETCH_CURRENT_USER_SUCCESS;
    payload: User;
}

interface FetchCurrentUserErrorAction {
    type: CurrentUserActionTypes.FETCH_CURRENT_USER_ERROR;
    payload: string;
}

interface SetCurrentUserAction {
    type: CurrentUserActionTypes.SET_CURRENT_USER;
    payload: User;
}

interface SetCurrentIdAction {
    type: CurrentUserActionTypes.SET_CURRENT_ID;
    payload: string;
}

interface ResetCurrentUserAction {
    type: CurrentUserActionTypes.RESET_CURRENT_USER;
}

export type CurrentUserAction = FetchCurrentUserAction | FetchCurrentUserSuccessAction | FetchCurrentUserErrorAction | SetCurrentUserAction | SetCurrentIdAction | ResetCurrentUserAction;