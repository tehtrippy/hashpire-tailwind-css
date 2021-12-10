import React from 'react';
import IconWrapper, { IIconWrapper } from '../IconWrapper';

const RightPane: React.FC<IIconWrapper> = ({
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
      <path d='M56 34.6666H34.6667V40H56V34.6666ZM56 45.3333H34.6667V50.6666H56V45.3333ZM56 24H34.6667V29.3333H56V24ZM56 13.3333H34.6667V18.6666H56V13.3333ZM13.3333 18.6666V45.3333H24V18.6666H13.3333ZM8 13.3333H29.3333V50.6666H8V13.3333Z' />{' '}
    </IconWrapper>
  );
};

export default RightPane;
