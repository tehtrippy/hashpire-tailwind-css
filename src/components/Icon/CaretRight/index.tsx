import React from 'react';
import type { Icon } from '../../Icon';

const CaretRight: React.FC<Icon> = ({ className }) => {
  return (
    <svg
      className={`fill-current hover:opacity-80 ${className}`}
      viewBox='0 0 64 64'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M45.4142 30.5858C46.1953 31.3668 46.1953 32.6332 45.4142 33.4142L25.4142 53.4142C24.6332 54.1953 23.3668 54.1953 22.5858 53.4142C21.8047 52.6332 21.8047 51.3668 22.5858 50.5858L41.1716 32L22.5858 13.4142C21.8047 12.6332 21.8047 11.3668 22.5858 10.5858C23.3668 9.80474 24.6332 9.80474 25.4142 10.5858L45.4142 30.5858Z'
      />
    </svg>
  );
};

export default CaretRight;
