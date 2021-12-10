import React from 'react';
import type { Icon } from '../../Icon';

const More: React.FC<Icon> = ({ className }) => {
  return (
    <svg
      className={`fill-current hover:opacity-80 ${className}`}
      viewBox='0 0 64 64'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle cx='16' cy='32' r='4' />
      <circle cx='32' cy='32' r='4' />
      <circle cx='48' cy='32' r='4' />
    </svg>
  );
};

export default More;
