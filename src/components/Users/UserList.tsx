import React, { useEffect } from 'react';
import { ChallInput } from '../UI/ChallInput';
import { ChallInputThemeEnum } from '../../enums/UI/chall-input-theme.enum';
import { SortBy } from '../shared/SortBy';
import Pagination from '../shared/Pagination';
import { useCustomState } from '../../hooks/useCustomState.hook';
import debounce from 'lodash/debounce';
import { ChallButton } from "../UI/ChallButton";
import { ChallButtonThemeEnum } from "../../enums/UI/chall-button-theme.enum";
import { Auth } from "aws-amplify";
import { UserListParams } from "../../store/types/userList";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";

export const UserList = () => {
    const {data, loading, error, params} = useTypedSelector((state) => state.userList);

    const {fetchUsers, setUserListOptions} = useActions();

    useEffect(() => {
        fetchUsers(params as unknown as UserListParams);
        console.log('params', params)
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

    const items = new Array(20).fill(0).map((_, i) => i + 1);

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
                {data.map(user => {
                    return (
                        <div key={user.id} className="user-list-item d-flex justify-content-around">
                            <div className="user-list-item__name">{user.name}</div>
                            <div className="user-list-item__email">{user.email}</div>
                        </div>
                    );
                })}
            </div>
            <div className="user-list-pagination">
                <Pagination items={items} itemsPerPage={2} togglePage={togglePage}/>
            </div>
            <ChallButton buttonTheme={ChallButtonThemeEnum.LIGHT_GRAY} onClick={logout}>Logout</ChallButton>
        </div>
    );
};
