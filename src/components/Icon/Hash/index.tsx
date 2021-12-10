import React from 'react';
import type { Icon } from '../../Icon';

const Hash: React.FC<Icon> = ({ className }) => {
  return (
    <svg
      className={`fill-current hover:opacity-80 ${className}`}
      viewBox='0 0 64 64'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M54 38H42V26H54C54.5304 26 55.0391 25.7893 55.4142 25.4142C55.7893 25.0391 56 24.5304 56 24C56 23.4696 55.7893 22.9609 55.4142 22.5858C55.0391 22.2107 54.5304 22 54 22H42V10C42 9.46957 41.7893 8.96086 41.4142 8.58579C41.0391 8.21071 40.5304 8 40 8C39.4696 8 38.9609 8.21071 38.5858 8.58579C38.2107 8.96086 38 9.46957 38 10V22H26V10C26 9.46957 25.7893 8.96086 25.4142 8.58579C25.0391 8.21071 24.5304 8 24 8C23.4696 8 22.9609 8.21071 22.5858 8.58579C22.2107 8.96086 22 9.46957 22 10V22H10C9.46957 22 8.96086 22.2107 8.58579 22.5858C8.21071 22.9609 8 23.4696 8 24C8 24.5304 8.21071 25.0391 8.58579 25.4142C8.96086 25.7893 9.46957 26 10 26H22V38H10C9.46957 38 8.96086 38.2107 8.58579 38.5858C8.21071 38.9609 8 39.4696 8 40C8 40.5304 8.21071 41.0391 8.58579 41.4142C8.96086 41.7893 9.46957 42 10 42H22V54C22 54.5304 22.2107 55.0391 22.5858 55.4142C22.9609 55.7893 23.4696 56 24 56C24.5304 56 25.0391 55.7893 25.4142 55.4142C25.7893 55.0391 26 54.5304 26 54V42H38V54C38 54.5304 38.2107 55.0391 38.5858 55.4142C38.9609 55.7893 39.4696 56 40 56C40.5304 56 41.0391 55.7893 41.4142 55.4142C41.7893 55.0391 42 54.5304 42 54V42H54C54.5304 42 55.0391 41.7893 55.4142 41.4142C55.7893 41.0391 56 40.5304 56 40C56 39.4696 55.7893 38.9609 55.4142 38.5858C55.0391 38.2107 54.5304 38 54 38ZM26 38V26H38V38H26Z' />
    </svg>
  );
};

export default Hash;
