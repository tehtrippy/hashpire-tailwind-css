import React from 'react';
import IconWrapper, { IIconWrapper } from '../IconWrapper';

const CaretDown: React.FC<IIconWrapper> = ({
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
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M10.5858 22.5858C11.3668 21.8047 12.6332 21.8047 13.4142 22.5858L32 41.1716L50.5858 22.5858C51.3668 21.8047 52.6332 21.8047 53.4142 22.5858C54.1953 23.3668 54.1953 24.6332 53.4142 25.4142L33.4142 45.4142C32.6332 46.1953 31.3668 46.1953 30.5858 45.4142L10.5858 25.4142C9.80474 24.6332 9.80474 23.3668 10.5858 22.5858Z'
      />
    </IconWrapper>
  );
};

export default CaretDown;
