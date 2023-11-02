import { User } from "../../models/core/user.model";

interface UserListItemProps {
    user: User;
    onClick?: () => void;
}

export const UserListItem: React.FC<UserListItemProps> = ({user, onClick}) => {
    return (<div className="user-list-item" onClick={onClick}>
        {user?.name}
    </div>)
};