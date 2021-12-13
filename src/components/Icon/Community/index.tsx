import React from 'react';
import type { Icon } from '../../Icon';

const Community: React.FC<Icon> = ({ className }) => {
  return (
    <svg
      className={`fill-current hover:opacity-80 ${className}`}
      viewBox='0 0 64 64'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M12 12C12 9.87827 12.8429 7.84344 14.3431 6.34315C15.8434 4.84285 17.8783 4 20 4C22.1217 4 24.1566 4.84285 25.6569 6.34315C27.1571 7.84344 28 9.87827 28 12C28 14.1217 27.1571 16.1566 25.6569 17.6569C24.1566 19.1571 22.1217 20 20 20C17.8783 20 15.8434 19.1571 14.3431 17.6569C12.8429 16.1566 12 14.1217 12 12Z' />
      <path d='M39.116 18.3359L39.284 18.4639C40.9812 19.7219 43.1071 20.2575 45.1977 19.9539C47.2884 19.6503 49.1741 18.532 50.4433 16.8432C51.7125 15.1544 52.2621 13.0321 51.9723 10.9395C51.6825 8.84685 50.5767 6.95382 48.8963 5.6735C47.2159 4.39319 45.0972 3.82952 43.0028 4.10552C40.9083 4.38153 39.008 5.47479 37.7166 7.14672C36.4252 8.81865 35.8476 10.9335 36.1098 13.0298C36.372 15.126 37.4527 17.0335 39.116 18.3359Z' />
      <path d='M25.0719 23.9998C25.5743 23.0484 26.2635 22.2082 27.0981 21.5294C27.9328 20.8505 28.8958 20.347 29.9295 20.0489C30.9632 19.7508 32.0465 19.6643 33.1144 19.7945C34.1824 19.9247 35.2131 20.269 36.1449 20.8068C37.0767 21.3445 37.8905 22.0647 38.5375 22.9243C39.1846 23.7838 39.6516 24.765 39.9107 25.8092C40.1697 26.8534 40.2155 27.9392 40.0453 29.0015C39.8751 30.0638 39.4923 31.0808 38.9199 31.9918C37.8188 33.7443 36.0813 35.0019 34.0725 35.5002C32.0637 35.9986 29.9399 35.6991 28.1472 34.6645C26.3546 33.63 25.0327 31.9409 24.4593 29.9522C23.8858 27.9635 24.1054 25.83 25.0719 23.9998Z' />
      <path d='M10 24H20.68C20.24 25.252 20 26.6 20 28C20 31.072 21.156 33.88 23.056 36H22C19.9377 35.9997 17.9258 36.6368 16.2395 37.8239C14.5533 39.0111 13.2751 40.6904 12.58 42.632C11.2373 42.0926 9.98019 41.361 8.848 40.46C5.84 38.04 4 34.464 4 30C4 28.4087 4.63214 26.8826 5.75736 25.7574C6.88258 24.6321 8.4087 24 10 24Z' />
      <path d='M42 36C46.34 36 50.036 38.764 51.416 42.632C52.776 42.076 54.036 41.352 55.152 40.46C58.16 38.04 60 34.464 60 30C60 28.4087 59.3678 26.8826 58.2426 25.7574C57.1174 24.6321 55.5913 24 54 24H43.32C43.76 25.252 44 26.6 44 28C44.0037 30.9525 42.9152 33.8019 40.944 36H42Z' />
      <path d='M47.548 43.712C47.84 44.416 48 45.192 48 46C48 50.464 46.164 54.04 43.152 56.46C40.188 58.84 36.212 60 32 60C27.788 60 23.812 58.84 20.848 56.46C17.84 54.04 16 50.464 16 46C15.9979 45.2115 16.1517 44.4303 16.4524 43.7014C16.7532 42.9725 17.1951 42.3102 17.7527 41.7527C18.3102 41.1951 18.9725 40.7532 19.7014 40.4524C20.4303 40.1517 21.2115 39.9979 22 40H42C43.1884 39.9997 44.3502 40.3524 45.3379 41.0133C46.3256 41.6741 47.0948 42.6134 47.548 43.712Z' />
    </svg>
  );
};

export default Community;