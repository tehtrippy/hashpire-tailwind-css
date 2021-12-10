import React from 'react';
import IconWrapper, { IIconWrapper } from '../IconWrapper';

const Home: React.FC<IIconWrapper> = ({
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
      <path d='M59.1563 31.5622L33.4126 5.83724C33.2272 5.65152 33.007 5.50417 32.7647 5.40364C32.5223 5.30311 32.2625 5.25136 32.0001 5.25136C31.7377 5.25136 31.4779 5.30311 31.2355 5.40364C30.9931 5.50417 30.7729 5.65152 30.5876 5.83724L4.84382 31.5622C4.09382 32.3122 3.66882 33.331 3.66882 34.3935C3.66882 36.5997 5.46257 38.3935 7.66882 38.3935H10.3813V56.7498C10.3813 57.856 11.2751 58.7498 12.3813 58.7498H28.0001V44.7497H35.0001V58.7498H51.6188C52.7251 58.7498 53.6188 57.856 53.6188 56.7498V38.3935H56.3313C57.3938 38.3935 58.4126 37.9747 59.1626 37.2185C60.7188 35.656 60.7188 33.1247 59.1563 31.5622Z' />
    </IconWrapper>
  );
};

export default Home;
