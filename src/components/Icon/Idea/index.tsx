import React from 'react';
import IconWrapper, { IIconWrapper } from '../IconWrapper';

const Idea: React.FC<IIconWrapper> = ({
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
      <path d='M23.9999 56.0002C23.9999 57.3336 25.0666 58.6669 26.6666 58.6669H37.3333C38.9333 58.6669 39.9999 57.3336 39.9999 56.0002V53.3336H23.9999V56.0002ZM31.9999 5.33356C21.5999 5.33356 13.3333 13.6002 13.3333 24.0002C13.3333 30.4002 16.5333 36.0002 21.3333 39.2002V45.3336C21.3333 46.6669 22.3999 48.0002 23.9999 48.0002H39.9999C41.5999 48.0002 42.6666 46.6669 42.6666 45.3336V39.2002C47.4666 35.7336 50.6666 30.1336 50.6666 24.0002C50.6666 13.6002 42.3999 5.33356 31.9999 5.33356Z' />
    </IconWrapper>
  );
};

export default Idea;
