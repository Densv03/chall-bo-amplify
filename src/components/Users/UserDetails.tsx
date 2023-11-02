import { useParams } from "react-router-dom";
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

    useEffect(() => {
        dispatch({type: CurrentUserActionTypes.SET_CURRENT_ID, payload: id});
        if (id) {
            fetchCurrentUser(id);
        }
    }, []);
    return <div>
        {loading && <div>Loading...</div>}
        {error && <div>{error}</div>}
        User details works!!
        <p>{user?.name}</p>
    </div>;
};
