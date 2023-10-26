import { ChallInput } from '../UI/ChallInput';
import { ChallInputThemeEnum } from '../../enums/UI/chall-input-theme.enum';
import { useCustomState } from '../../hooks/useCustomState.hook';
import { SortBy } from '../shared/SortBy';
import React, { useEffect } from 'react';
import Pagination from '../shared/Pagination';
import debounce from 'lodash/debounce';

interface OrganizationsListingState {
  q: string;
  filter: 'all' | 'approval' | 'deletion';
  page: number;
  sortBy: 'asc' | 'desc';
}

export const OrganizationList = () => {
  const [organizationsListingState, setOrganizationsListingState] =
    useCustomState<OrganizationsListingState>({
      q: '',
      filter: 'all',
      page: 1,
      sortBy: 'asc',
    });
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

  useEffect(() => {
    console.log('fetch', organizationsListingState);
  }, [organizationsListingState]);

  function updateOrganizationsListingState<
    K extends keyof OrganizationsListingState,
  >(key: K, value: OrganizationsListingState[K]): void {
    setOrganizationsListingState({
      ...organizationsListingState,
      [key]: value,
    });
  }

  function togglePage(page: number): void {
    updateOrganizationsListingState('page', page);
  }

  const debouncedUpdateSearchQuery = debounce((value: string) => {
    updateOrganizationsListingState('q', value);
  }, 300);

  return (
    <div className="organization-list">
      OrganizationList works
      <ChallInput
        theme={ChallInputThemeEnum.BACKGROUND_GRAY}
        placeholder="Search"
        className="w-100 px-2"
        onChange={(e) => debouncedUpdateSearchQuery(e.target.value)}
      />
      <SortBy
        onSortChange={(direction) =>
          updateOrganizationsListingState('sortBy', direction)
        }
      />
      <Pagination items={items} itemsPerPage={2} togglePage={togglePage} />
    </div>
  );
};
