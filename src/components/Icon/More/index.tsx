import React from 'react';
import IconWrapper, { IIconWrapper } from '../IconWrapper';

const More: React.FC<IIconWrapper> = ({
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
      <circle cx='16' cy='32' r='4' />
      <circle cx='32' cy='32' r='4' />
      <circle cx='48' cy='32' r='4' />
    </IconWrapper>
  );
};

export default More;
