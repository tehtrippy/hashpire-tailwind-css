import React from 'react';
import type { Icon } from '../../Icon';

const CaretLeft: React.FC<Icon> = ({ className }) => {
  return (
    <svg
      className={`fill-current hover:opacity-80 ${className}`}
      viewBox='0 0 64 64'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M18.5858 30.5858C17.8047 31.3668 17.8047 32.6332 18.5858 33.4142L38.5858 53.4142C39.3668 54.1953 40.6332 54.1953 41.4142 53.4142C42.1953 52.6332 42.1953 51.3668 41.4142 50.5858L22.8284 32L41.4142 13.4142C42.1953 12.6332 42.1953 11.3668 41.4142 10.5858C40.6332 9.80474 39.3668 9.80474 38.5858 10.5858L18.5858 30.5858Z'
      />
    </svg>
  );
};

export default CaretLeft;
