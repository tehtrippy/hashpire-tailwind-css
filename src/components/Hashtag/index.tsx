import React from 'react';

interface IHashtag {
  title: string;
  disabled?: boolean;
  className?: string;
}

const Hashtag: React.FC<IHashtag> = ({ title, disabled, className }) => {
  const computedStyle = `${
    disabled
      ? 'border-neutral-3 text-neutral-3 bg-transparent cursor-default'
      : 'bg-neutral-5 border-neutral-5 hover:border-accent hover:text-accent focus:border-accent-pressed focus:outline-btnFocus focus:text-accent-pressed'
  }`;

  return (
    <button
      className={`inline-flex items-center text-neutral-2 text-xs font-normal shadow-1 border ${computedStyle} ${className}`}
    >
      #{title}
    </button>
  );
};
export default Hashtag;
