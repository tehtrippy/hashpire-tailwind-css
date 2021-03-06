import React from 'react';
import IconWrapper, { IIconWrapper } from '../IconWrapper';

const Mail: React.FC<IIconWrapper> = ({ theme, size, href, className, onClick }) => {
  return (
    <IconWrapper className={className} href={href} size={size} theme={theme} onClick={onClick}>
      <path d='M14.6667 11C12.3681 11 10.1637 11.885 8.53841 13.4603C6.91309 15.0356 6 17.1722 6 19.4V20.2442L32 33.8144L58 20.2484V19.4C58 17.1722 57.0869 15.0356 55.4616 13.4603C53.8363 11.885 51.6319 11 49.3333 11H14.6667Z' />
      <path d='M58 25.0154L33.027 38.048C32.7114 38.2127 32.3585 38.2989 32 38.2989C31.6415 38.2989 31.2886 38.2127 30.973 38.048L6 25.0154V44.6C6 46.8278 6.91309 48.9644 8.53841 50.5397C10.1637 52.115 12.3681 53 14.6667 53H49.3333C51.6319 53 53.8363 52.115 55.4616 50.5397C57.0869 48.9644 58 46.8278 58 44.6V25.0154Z' />
    </IconWrapper>
  );
};

export default Mail;
