import { User } from "../../models/core/user.model";

export interface UserState {
    user: User | null;
}

export enum UserActionTypes {
    UPDATE_USER = 'UPDATE_USER',
    RESET_USER = 'RESET_USER'
}

interface UpdateUserAction {
    type: UserActionTypes.UPDATE_USER;
    payload: User;
}

interface ResetUserAction {
    type: UserActionTypes.RESET_USER;
}

export type UserAction = UpdateUserAction | ResetUserAction;