import { useState } from 'react';
import { UsePagination } from '../models/hooks/use-pagination.model';

function usePagination(items: any[], itemsPerPage: number): UsePagination {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return {
    currentPage,
    totalPages,
    nextPage,
    prevPage,
    goToPage,
    pageNumbers,
  };
}

export default usePagination;
