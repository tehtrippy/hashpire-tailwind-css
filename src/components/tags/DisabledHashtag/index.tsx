import React from 'react';
import { IHashtag } from '../../tags';

const DisabledHashtag: React.FC<IHashtag> = ({ title, className }) => {
  return (
    <button
      className={`inline-flex items-center text-neutral-200 text-xs font-normal shadow-1 border border-neutral-400 text-neutral-400 bg-transparent cursor-default ${className}`}
    >
      #{title}
    </button>
  );
};
export default DisabledHashtag;
