import React from 'react';
import IconWrapper, { IIconWrapper } from '../IconWrapper';

const LeftPane: React.FC<IIconWrapper> = ({
  theme,
  size,
  href,
  className,
  onClick,
}) => {
  return (
    <IconWrapper
      className={className}
      href={href}
      size={size}
      theme={theme}
      onClick={onClick}
    >
      <path d='M8 34.6666H29.3333V40H8V34.6666ZM8 45.3333H29.3333V50.6666H8V45.3333ZM8 24H29.3333V29.3333H8V24ZM8 13.3333H29.3333V18.6666H8V13.3333ZM50.6667 18.6666V45.3333H40V18.6666H50.6667ZM56 13.3333H34.6667V50.6666H56V13.3333Z' />
    </IconWrapper>
  );
};

export default LeftPane;
