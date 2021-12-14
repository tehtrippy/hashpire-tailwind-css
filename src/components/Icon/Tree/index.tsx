import React from 'react';
import type { Icon } from '..';

const Tree: React.FC<Icon> = ({ className }) => {
  return (
    <svg
      className={`fill-current hover:opacity-80 ${className}`}
      viewBox='0 0 64 64'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M58.6667 18.6667V25.3333C58.6667 27.6096 58.2184 29.8635 57.3473 31.9665C56.4762 34.0695 55.1994 35.9803 53.5899 37.5899C51.9804 39.1994 50.0695 40.4762 47.9666 41.3472C45.8636 42.2183 43.6096 42.6667 41.3334 42.6667H34.6667V56H29.3334V37.3333L29.384 34.6667C29.7199 30.3132 31.6865 26.2469 34.8906 23.2806C38.0947 20.3143 42.3003 18.6665 46.6667 18.6667H58.6667ZM16 8C19.9183 8.0003 23.7373 9.23289 26.9164 11.5233C30.0956 13.8138 32.4739 17.046 33.7147 20.7627C31.6741 22.4919 30.0023 24.614 28.7988 27.0026C27.5954 29.3913 26.8848 31.9977 26.7094 34.6667H24C19.0493 34.6667 14.3014 32.7 10.8007 29.1993C7.30004 25.6986 5.33337 20.9507 5.33337 16V8H16V8Z' />
    </svg>
  );
};

export default Tree;
