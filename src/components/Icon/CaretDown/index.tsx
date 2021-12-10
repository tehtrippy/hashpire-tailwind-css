import React from 'react';
import type { Icon } from '../../Icon';

const CaretUp: React.FC<Icon> = ({ className }) => {
  return (
    <svg
      className={`fill-current hover:opacity-80 ${className}`}
      viewBox='0 0 64 64'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M10.5858 22.5858C11.3668 21.8047 12.6332 21.8047 13.4142 22.5858L32 41.1716L50.5858 22.5858C51.3668 21.8047 52.6332 21.8047 53.4142 22.5858C54.1953 23.3668 54.1953 24.6332 53.4142 25.4142L33.4142 45.4142C32.6332 46.1953 31.3668 46.1953 30.5858 45.4142L10.5858 25.4142C9.80474 24.6332 9.80474 23.3668 10.5858 22.5858Z'
      />
    </svg>
  );
};

export default CaretUp;
