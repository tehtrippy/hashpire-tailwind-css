import React from 'react';
import { ListBulletIcon } from '../../Icon';
import CollapseToggle from '../../CollapseToggle';
import type { ITableOfContent } from '../../TableOfContent';

const DesktopTableOfContent: React.FC<ITableOfContent> = ({ data }) => {
  return (
    <div>
      <div className='flex items-center bg-primary px-4 py-2'>
        <ListBulletIcon className='text-neutral-3 h-6 w-6' />
        <span className='block ml-2 text-base font-semibold text-neutral-3'>
          Table of contents
        </span>
      </div>
      <div className='p-4 bg-primary-light'>
        <CollapseToggle data={data} className='text-neutral-3' />
      </div>
    </div>
  );
};

export default DesktopTableOfContent;
