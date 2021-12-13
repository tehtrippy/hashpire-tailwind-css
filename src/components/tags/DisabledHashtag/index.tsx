import React from 'react';
import { IHashtag } from '../../tags';

const DisabledHashtag: React.FC<IHashtag> = ({ title, className }) => {
  return (
    <button
      className={`inline-flex items-center text-neutral-2 text-xs font-normal shadow-1 border border-neutral-3 text-neutral-3 bg-transparent cursor-default ${className}`}
    >
      #{title}
    </button>
  );
};
export default DisabledHashtag;
