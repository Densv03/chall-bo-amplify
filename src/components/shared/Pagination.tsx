import React, { useEffect } from 'react';
import usePagination from '../../hooks/usePagination.hook';

interface PaginationProps {
  items: any[];
  itemsPerPage: number;
  togglePage: (page: number) => void;
}
export const Pagination: React.FC<PaginationProps> = ({
  items,
  itemsPerPage,
  togglePage,
}) => {
  const { currentPage, totalPages, prevPage, nextPage, goToPage, pageNumbers } =
    usePagination(items, itemsPerPage);

  useEffect(() => {
    togglePage(currentPage);
  }, [currentPage]);

  return (
    <div className="pagination">
      <div>
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="pagination-item">
          Previous
        </button>
        {pageNumbers.map((page, index) => (
          <button
            key={index}
            onClick={() => goToPage(page)}
            className={
              index + 1 === currentPage
                ? 'pagination-item pagination-item--active'
                : 'pagination-item'
            }>
            {page}
          </button>
        ))}
        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className="pagination-item">
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
