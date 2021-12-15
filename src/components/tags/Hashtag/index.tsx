import React from 'react';
import { IHashtag } from '../../tags';

const Hashtag: React.FC<IHashtag> = ({ title, className }) => {
  return (
    <button
      className={`inline-flex items-center text-neutral-200 text-xs font-normal shadow-1 border bg-neutral-900 border-neutral-900 hover:border-primary hover:text-primary focus:border-primary-dark focus:outline-btnFocus focus:text-primary-dark ${className}`}
    >
      #{title}
    </button>
  );
};
export default Hashtag;
