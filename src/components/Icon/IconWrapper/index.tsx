import React from 'react';

export interface IIconWrapper {
  size?: 'smaller' | 'small' | 'medium' | 'large';
  theme?:
    | 'accent'
    | 'neutral-1'
    | 'neutral-2'
    | 'neutral-3'
    | 'neutral-4'
    | 'secondary';
  href?: string;
  className?: string;
  onClick?: () => void;
}

const IconWrapper: React.FC<IIconWrapper> = ({
  theme,
  size,
  className,
  href,
  onClick,
  children,
}) => {
  const computedSize =
    size === 'small'
      ? 'h-6 w-6'
      : size === 'smaller'
      ? 'h-5 w-5'
      : size === 'medium'
      ? 'h-10 w-10'
      : size === 'large'
      ? 'h-12 w-12'
      : 'h-8 w-8';
  const computedTheme =
    theme === 'accent'
      ? 'text-accent'
      : theme === 'secondary'
      ? 'text-secondary'
      : theme === 'neutral-1'
      ? 'text-neutral-1'
      : theme === 'neutral-2'
      ? 'text-neutral-2'
      : theme === 'neutral-4'
      ? 'text-neutral-4'
      : 'text-neutral-3';
  return href ? (
    <a href={href} onClick={onClick}>
      <svg
        className={`${computedSize} fill-current ${computedTheme} ${className} hover:opacity-80`}
        viewBox='0 0 64 64'
        xmlns='http://www.w3.org/2000/svg'
      >
        {children}
      </svg>
    </a>
  ) : (
    <svg
      onClick={onClick}
      className={`${computedSize} fill-current ${computedTheme} ${
        onClick && 'cursor-pointer'
      } ${className}`}
      viewBox='0 0 64 64'
      xmlns='http://www.w3.org/2000/svg'
    >
      {children}
    </svg>
  );
};

export default IconWrapper;
