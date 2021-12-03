import React from 'react';
import IconWrapper, { IIconWrapper } from '../IconWrapper';

const Hash: React.FC<IIconWrapper> = ({ theme, size, href, className, onClick }) => {
  return (
    <IconWrapper className={className} href={href} size={size} theme={theme} onClick={onClick}>
      <path d='M8 32.134C8 44.066 16.666 53.988 28 56V38.666H22V32H28V26.666C28 20.666 31.866 17.334 37.334 17.334C39.066 17.334 40.934 17.6 42.666 17.866V24H39.6C36.666 24 36 25.466 36 27.334V32H42.4L41.334 38.666H36V56C47.334 53.988 56 44.068 56 32.134C56 18.86 45.2 7.99999 32 7.99999C18.8 7.99999 8 18.86 8 32.134Z' />
    </IconWrapper>
  );
};

export default Hash;
