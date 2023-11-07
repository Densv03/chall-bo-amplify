import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { CurrentUserActionTypes } from "../../store/types/currentUser";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";

export const UserDetails = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const {fetchCurrentUser} = useActions();
    const {user, loading, error} = useTypedSelector((state) => state.currentUser);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch({type: CurrentUserActionTypes.SET_CURRENT_ID, payload: id});
        if (id) {
            fetchCurrentUser(id);
        }
    }, []);

    const redirectBack = () => {
        dispatch({type: CurrentUserActionTypes.SET_CURRENT_ID, payload: null});
        navigate('/users');
    }
    return <div className="user-details">
        {loading && <div>Loading...</div>}
        {error && <div>{error}</div>}
        <div className="member-since">
            Member since: [date and time]
        </div>
        <div className="header">
            <div className="back" onClick={redirectBack}>&lt; Back</div>
            <div className="username">[@username]</div>
            <div></div>
        </div>

        <div className="content">
            <div className="image">
                <div className="logo">Logo</div>
                <div className="header-image">Header image</div>
            </div>

            <div className="info-item">
                <div className="label">Organization Name</div>
                <div className="value">[Organization name]</div>
            </div>
            <div className="info-item">
                <div className="label">Organization Username</div>
                <div className="value">[Organization username]</div>
            </div>
            <div className="info-item">
                <div className="label">Biography</div>
                <div className="value">[Biography]</div>
            </div>
            <div className="info-item">
                <div className="label">E-mail address</div>
                <div className="value">[e-mail]</div>
            </div>
        </div>
        <p>{user?.name}</p>
    </div>;
};
