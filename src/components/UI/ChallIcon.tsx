import React from 'react';
import arrowDown from '../../assets/icons/arrow-down.svg';
import arrowUp from '../../assets/icons/arrow-up.svg';

interface ChallIconProps {
  name: 'arrow-down' | 'arrow-up';
  className?: string;
}

const iconMapping: Record<ChallIconProps['name'], string> = {
  'arrow-down': arrowDown,
  'arrow-up': arrowUp,
};
export const ChallIcon: React.FC<ChallIconProps> = ({ name, className }) => {
  return (
    <img
      src={iconMapping[name]}
      alt={name}
      className={className ? className : ''}
    />
  );
};
