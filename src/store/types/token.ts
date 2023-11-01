export interface TokenState {
    token: string | null;
}

export enum TokenActionTypes {
    UPDATE_TOKEN = 'UPDATE_TOKEN',
    RESET_TOKEN = 'RESET_TOKEN'
}

interface UpdateTokenAction {
    type: TokenActionTypes.UPDATE_TOKEN;
    payload: string;
}

interface ResetTokenAction {
    type: TokenActionTypes.RESET_TOKEN;
}

export type TokenAction = UpdateTokenAction | ResetTokenAction;