import React, { useEffect } from 'react';
import { ChallInput } from '../UI/ChallInput';
import { ChallInputThemeEnum } from '../../enums/UI/chall-input-theme.enum';
import { SortBy } from '../shared/SortBy';
import Pagination from '../shared/Pagination';
import debounce from 'lodash/debounce';
import { ChallButton } from "../UI/ChallButton";
import { ChallButtonThemeEnum } from "../../enums/UI/chall-button-theme.enum";
import { Auth } from "aws-amplify";
import { UserListParams } from "../../store/types/userList";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import { UserListItem } from "./UserListItem";
import { User } from "../../models/core/user.model";
import { useNavigate } from "react-router-dom";

export const UserList = () => {
    const {data, loading, error, params} = useTypedSelector((state) => state.userList);
    const navigate = useNavigate();

    const {fetchUsers, setUserListOptions} = useActions();

    useEffect(() => {
        fetchUsers(params as unknown as UserListParams);
    }, [params]);

    const updateUserListState = <K extends keyof UserListParams>
    (key: K, value: UserListParams[K]) => {
        setUserListOptions({...params, [key]: value});
    }

    const changeSortBy = (direction: 'asc' | 'desc') => {
        updateUserListState('sortBy', direction);
    }

    const togglePage = (page: number) => {
        updateUserListState('page', page);
    }

    const debouncedUpdateSearchQuery = debounce((value: string) => {
        updateUserListState('q', value);
    }, 300);

    const logout = () => {
        Auth.signOut();
    }

    const isLoading = () => {
        if (loading) {
            return (<div>Loading...</div>)
        }
    }

    const isError = () => {
        if (error) {
            return (<div>Unexpected error</div>)
        }
    }

    const redirectToUserDetails = (user: User): void => {
        navigate(`/users/${user.id}`);
    }

    return (
        <div className="user-list-wrapper">
            {isLoading()}
            {isError()}
            <ChallInput
                theme={ChallInputThemeEnum.BACKGROUND_GRAY}
                placeholder="Search"
                className="w-100 px-3"
                onChange={(e) => debouncedUpdateSearchQuery(e.target.value)}
            />
            <div className="sort-by-wrapper">
                <SortBy onSortChange={changeSortBy} initialDirection={'asc'}/>
            </div>
            <div className="user-list">
                {data.map(user => (<UserListItem user={user} key={user.id} onClick={() => redirectToUserDetails(user)} />))}
            </div>
            <div className="user-list-pagination">
                <Pagination length={10} itemsPerPage={2} togglePage={togglePage}/>
            </div>
            <ChallButton buttonTheme={ChallButtonThemeEnum.LIGHT_GRAY} onClick={logout}>Logout</ChallButton>
        </div>
    );
};
