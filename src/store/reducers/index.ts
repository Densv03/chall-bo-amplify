import { tokenReducer } from "./tokenReducer";
import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { userListReducer } from "./userListReducer";
import { currentUserReducer } from "./currentUserReducer";

export const rootReducers = combineReducers({
    token: tokenReducer,
    user: userReducer,
    userList: userListReducer,
    currentUser: currentUserReducer
});

export type RootState = ReturnType<typeof rootReducers>;