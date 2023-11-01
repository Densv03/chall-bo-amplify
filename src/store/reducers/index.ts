import { tokenReducer } from "./tokenReducer";
import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { userListReducer } from "./userListReducer";

export const rootReducers = combineReducers({
    token: tokenReducer,
    user: userReducer,
    userList: userListReducer
});

export type RootState = ReturnType<typeof rootReducers>;