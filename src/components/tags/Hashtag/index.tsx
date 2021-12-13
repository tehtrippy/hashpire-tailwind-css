import React from 'react';
import { IHashtag } from '../../tags';

const Hashtag: React.FC<IHashtag> = ({ title, className }) => {
  return (
    <button
      className={`inline-flex items-center text-neutral-2 text-xs font-normal shadow-1 border bg-neutral-5 border-neutral-5 hover:border-accent hover:text-accent focus:border-accent-pressed focus:outline-btnFocus focus:text-accent-pressed ${className}`}
    >
      #{title}
    </button>
  );
};
export default Hashtag;
