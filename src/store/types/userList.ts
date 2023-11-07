export interface UserListParams {
    sortBy: 'asc' | 'desc';
    page: number;
    q: string;
}

export interface UserListState {
    data: any[];
    loading: boolean;
    error: null | string;
    params: UserListParams;
}

export enum UserListActionTypes {
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
    FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
    SET_USER_LIST_OPTIONS = 'SET_USER_LIST_OPTIONS',
    RESET_USER_LIST_OPTIONS = 'RESET_USER_LIST_OPTIONS'
}

interface FetchUsersAction {
    type: UserListActionTypes.FETCH_USERS;
}

interface FetchUsersSuccessAction {
    type: UserListActionTypes.FETCH_USERS_SUCCESS;
    payload: any[];
}

interface FetchUsersErrorAction {
    type: UserListActionTypes.FETCH_USERS_ERROR;
    payload: string;
}

interface SetUserListOptionsAction {
    type: UserListActionTypes.SET_USER_LIST_OPTIONS;
    payload: UserListParams;
}

interface ResetUserListOptionsAction {
    type: UserListActionTypes.RESET_USER_LIST_OPTIONS;
}

export type UserListAction = FetchUsersAction | FetchUsersSuccessAction | FetchUsersErrorAction | SetUserListOptionsAction | ResetUserListOptionsAction;