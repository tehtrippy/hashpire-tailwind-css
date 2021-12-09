import React from 'react';
import IconWrapper, { IIconWrapper } from '../IconWrapper';

const TriangleRight: React.FC<IIconWrapper> = ({
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
      <path d='M12.5777 21.1242L28.2897 46.9639C28.6663 47.5831 29.2074 48.0972 29.8586 48.4545C30.5098 48.8119 31.2483 49 32 49C32.7517 49 33.4902 48.8119 34.1414 48.4545C34.7926 48.0972 35.3337 47.5831 35.7103 46.9639L35.7089 46.9639L51.4223 21.1242C51.7999 20.5042 51.9991 19.8004 52 19.0837C52.0009 18.367 51.8034 17.6627 51.4273 17.0418C51.0513 16.4209 50.51 15.9053 49.858 15.5468C49.206 15.1884 48.4663 14.9998 47.7134 15L16.2866 15C15.5337 14.9998 14.794 15.1884 14.142 15.5468C13.49 15.9053 12.9487 16.4209 12.5727 17.0418C12.1966 17.6627 11.9991 18.367 12 19.0837C12.0009 19.8003 12.2001 20.5042 12.5777 21.1242Z' />
    </IconWrapper>
  );
};

export default TriangleRight;
