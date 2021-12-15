import React from 'react';
import { FolderIcon } from '../Icon';

export interface IMocLibrary {
  items: { title: string; url: string }[];
}

const MocLibrary: React.FC<IMocLibrary> = ({ items }) => {
  return (
    <div>
      <div className='flex items-center'>
        <FolderIcon className='text-neutral-400 w-8 h-8' />
        <span className='text-neutral-400 text-base font-semibold ml-2'>
          MOC Library
        </span>
      </div>
      {items.map((item, key) => (
        <div className='mt-4 text-sm text-neutral-100 font-normal' key={key}>
          {item.title}
        </div>
      ))}
    </div>
  );
};

export default MocLibrary;
