import React from 'react';
import IconWrapper, { IIconWrapper } from '../IconWrapper';

const TriangleDown: React.FC<IIconWrapper> = ({
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
      <path d='M21.1242 51.4223L46.9639 35.7103C47.5831 35.3337 48.0972 34.7926 48.4545 34.1414C48.8119 33.4902 49 32.7517 49 32C49 31.2483 48.8119 30.5098 48.4545 29.8586C48.0972 29.2074 47.5831 28.6663 46.9639 28.2897L46.9639 28.2911L21.1242 12.5777C20.5042 12.2001 19.8004 12.0009 19.0837 12C18.367 11.9991 17.6627 12.1966 17.0418 12.5727C16.4209 12.9487 15.9053 13.49 15.5468 14.142C15.1884 14.794 14.9998 15.5337 15 16.2866L15 47.7134C14.9998 48.4663 15.1884 49.206 15.5468 49.858C15.9053 50.51 16.4209 51.0513 17.0418 51.4273C17.6627 51.8034 18.367 52.0009 19.0837 52C19.8003 51.9991 20.5042 51.7999 21.1242 51.4223Z' />
    </IconWrapper>
  );
};

export default TriangleDown;
