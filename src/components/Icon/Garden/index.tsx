import React from 'react';
import type { Icon } from '..';

const Garden: React.FC<Icon> = ({ className }) => {
  return (
    <svg
      className={`fill-current hover:opacity-80 ${className}`}
      viewBox='0 0 64 64'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M32 24C32 32.236 27.3333 39.0187 21.3333 39.9027V52H42.6667V40.0613H36.364C35.3811 40.0617 34.4269 39.7304 33.6559 39.1208C32.8848 38.5113 32.3421 37.6594 32.1156 36.703C31.8892 35.7466 31.9921 34.7417 32.4079 33.8511C32.8238 32.9606 33.528 32.2364 34.4067 31.796C34.0186 30.4899 34.1333 29.0858 34.7282 27.86C35.3231 26.6342 36.3551 25.6753 37.6213 25.172C37.4006 24.2128 37.3991 23.2161 37.6169 22.2563C37.8346 21.2964 38.2661 20.398 38.8791 19.6279C39.4921 18.8578 40.2709 18.2359 41.1575 17.8085C42.0441 17.381 43.0157 17.159 44 17.159C44.9843 17.159 45.9559 17.381 46.8425 17.8085C47.7291 18.2359 48.5079 18.8578 49.1209 19.6279C49.7339 20.398 50.1654 21.2964 50.3831 22.2563C50.6009 23.2161 50.5994 24.2128 50.3787 25.172C51.6448 25.6753 52.6769 26.6342 53.2718 27.86C53.8667 29.0858 53.9814 30.4899 53.5933 31.796C54.472 32.2364 55.1762 32.9606 55.592 33.8511C56.0078 34.7417 56.1108 35.7466 55.8844 36.703C55.6579 37.6594 55.1152 38.5113 54.3441 39.1208C53.5731 39.7304 52.6189 40.0617 51.636 40.0613H45.3333V52H54C54.5304 52 55.0391 52.2107 55.4142 52.5858C55.7893 52.9609 56 53.4696 56 54C56 54.5304 55.7893 55.0391 55.4142 55.4142C55.0391 55.7893 54.5304 56 54 56H10C9.46957 56 8.96086 55.7893 8.58579 55.4142C8.21071 55.0391 8 54.5304 8 54C8 53.4696 8.21071 52.9609 8.58579 52.5858C8.96086 52.2107 9.46957 52 10 52H18.6667V39.9027C12.6667 39.0187 8 32.236 8 24C8 15.164 13.3733 8 20 8C26.6267 8 32 15.164 32 24Z'
      />
    </svg>
  );
};

export default Garden;