import { ChallIcon } from '../UI/ChallIcon';
import React, { useState } from 'react';

interface SortByProps {
  onSortChange: (direction: 'asc' | 'desc') => void;
  initialDirection?: 'asc' | 'desc';
}

export const SortBy: React.FC<SortByProps> = ({
  onSortChange,
  initialDirection = 'asc',
}) => {
  const [direction, setDirection] = useState<'asc' | 'desc'>(initialDirection);

  const toggleDirection = (): void => {
    const newDirection = direction === 'asc' ? 'desc' : 'asc';
    setDirection(newDirection);
    onSortChange(newDirection);
  };

  return (
    <div className="sort-by" onClick={toggleDirection}>
      <div className="sort-by__label">Sort by:</div>
      <div className="sort-by__filter">Recent</div>
      <div className="sort-by__direction">
        <ChallIcon
          name={direction === 'asc' ? 'arrow-up' : 'arrow-down'}
          className="chall-icon"
        />
      </div>
    </div>
  );
};
