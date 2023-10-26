export interface UsePagination {
  currentPage: number;
  totalPages: number;
  pageNumbers: number[];
  nextPage: () => void;
  prevPage: () => void;
  goToPage: (page: number) => void;
}
