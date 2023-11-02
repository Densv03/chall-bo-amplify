import * as UserListActionCreators from './userList';
import * as CurrentUserActionCreators from './currentUser';
export default {
    ...UserListActionCreators,
    ...CurrentUserActionCreators
}