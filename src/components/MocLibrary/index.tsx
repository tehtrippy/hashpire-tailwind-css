import React from 'react';
import { FolderIcon } from '../Icon';

export interface IMocLibrary {
  items: { title: string; url: string }[];
}

const MocLibrary: React.FC<IMocLibrary> = ({ items }) => {
  return (
    <div>
      <div className='flex items-center'>
        <FolderIcon theme='neutral-4' />
        <span className='text-neutral-4 text-base font-semibold ml-2'>
          MOC Library
        </span>
      </div>
      {items.map((item, key) => (
        <span className="block mt-4 text-sm text-neutral-1 font-normal" key={key}>{item.title}</span>
      ))}
    </div>
  );
};

export default MocLibrary;
