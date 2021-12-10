import React from 'react';
import type { Icon } from '../../Icon';

const CaretDown: React.FC<Icon> = ({ className }) => {
  return (
    <svg
      className={`fill-current hover:opacity-80 ${className}`}
      viewBox='0 0 64 64'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M30.5858 18.5858C31.3668 17.8047 32.6332 17.8047 33.4142 18.5858L53.4142 38.5858C54.1953 39.3668 54.1953 40.6332 53.4142 41.4142C52.6332 42.1953 51.3668 42.1953 50.5858 41.4142L32 22.8284L13.4142 41.4142C12.6332 42.1953 11.3668 42.1953 10.5858 41.4142C9.80474 40.6332 9.80474 39.3668 10.5858 38.5858L30.5858 18.5858Z'
      />
    </svg>
  );
};

export default CaretDown;
