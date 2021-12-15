import React from 'react';
import { ListBulletIcon } from '../../Icon';
import CollapseToggle from '../../CollapseToggle';
import type { ITableOfContent } from '../../TableOfContent';

const DesktopTableOfContent: React.FC<ITableOfContent> = ({ data }) => {
  return (
    <div>
      <div className='flex items-center bg-background-darker px-4 py-2'>
        <ListBulletIcon className='text-neutral-400 h-6 w-6' />
        <span className='block ml-2 text-base font-semibold text-neutral-400'>
          Table of contents
        </span>
      </div>
      <div className='p-4 bg-background'>
        <CollapseToggle data={data} className='text-neutral-400' />
      </div>
    </div>
  );
};

export default DesktopTableOfContent;
