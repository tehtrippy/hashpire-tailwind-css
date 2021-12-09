import React from 'react';
import DesktopTableOfContent from './DesktopTableOfContent';
import MobileTableOfContent from './MobileTableOfContent';
import type { ICollapseToggle } from '../CollapseToggle';

export interface ITableOfContent
  extends Omit<ICollapseToggle, 'showItemsCount'> {}

const TableOfContents: React.FC<ITableOfContent> = ({ ...args }) => {
  return (
    <div>
      <div className='hidden lg:block'>
        <DesktopTableOfContent {...args} />
      </div>
      <div className='block lg:hidden'>
        <MobileTableOfContent {...args} />
      </div>
    </div>
  );
};

export default TableOfContents;
