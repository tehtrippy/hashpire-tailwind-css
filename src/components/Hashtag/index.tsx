import React from 'react';

interface IHashtag {
  name: string;
  size?: 'small' | 'medium';
  disabled?: boolean;
  className?: string;
}

const Hashtag: React.FC<IHashtag> = ({ name, size, disabled, className }) => {
  const computedStyle = `${
    disabled
      ? 'border-neutral-3 text-neutral-3 bg-transparent cursor-default'
      : 'bg-neutral-5 border-neutral-5 hover:border-accent hover:text-accent focus:border-accent-pressed focus:outline-btnFocus focus:text-accent-pressed'
  }`;

  return (
    <button
      className={`inline-flex items-center text-neutral-2 text-xs font-normal shadow-1 border ${
        size === 'small'
          ? `h-6 py-1 px-2.5 rounded-2xl ${computedStyle}`
          : `h-8 py-1.5 px-4 rounded-3xl ${computedStyle}`
      } ${className}`}
    >
      #{name}
    </button>
  );
};
export default Hashtag;
