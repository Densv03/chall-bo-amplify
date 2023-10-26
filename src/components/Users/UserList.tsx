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

interface UserListState {
  sortBy: 'asc' | 'desc';
  page: number;
  q: string;
}

export const UserList = () => {
  const [userListState, setUserListState] = useCustomState<UserListState>({
    sortBy: 'asc',
    page: 1,
    q: '',
  });

  useEffect(() => {
    updateUsersList();
  }, [userListState]);

  function updateUserListState<K extends keyof UserListState>(
    key: K,
    value: UserListState[K]
  ): void {
    setUserListState({ ...userListState, [key]: value });
  }

  function changeSortBy(direction: 'asc' | 'desc'): void {
    updateUserListState('sortBy', direction);
  }

  function togglePage(page: number): void {
    updateUserListState('page', page);
  }

  const debouncedUpdateSearchQuery = debounce((value: string) => {
    updateUserListState('q', value);
  }, 300);

  function updateUsersList(): void {
    // Fetch users
    console.log('fetch', userListState);
  }

  const items = [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
  ];
  function logout(): void {
    Auth.currentUserInfo().then((user) => {
        console.log(user);
    });
    // Auth.signOut();
  }

  return (
    <div className="user-list-wrapper">
      <ChallInput
        theme={ChallInputThemeEnum.BACKGROUND_GRAY}
        placeholder="Search"
        className="w-100 px-3"
        onChange={(e) => debouncedUpdateSearchQuery(e.target.value)}
      />
      <div className="sort-by-wrapper">
        <SortBy onSortChange={changeSortBy} initialDirection={'asc'} />
      </div>
      <div className="user-list-pagination">
        <Pagination items={items} itemsPerPage={2} togglePage={togglePage} />
      </div>
      <ChallButton buttonTheme={ChallButtonThemeEnum.LIGHT_GRAY} onClick={logout}>Logout</ChallButton>
    </div>
  );
};
