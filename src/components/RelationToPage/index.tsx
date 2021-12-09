import React from 'react';
import { HashIcon } from '../Icon';
import CollapseToggle from '../CollapseToggle';
import type { ICollapseToggle } from '../CollapseToggle';

interface IRelationToPage extends Omit<ICollapseToggle, 'showItemsCount'> {}

const RelationToPage: React.FC<IRelationToPage> = ({ data }) => {
  return (
    <div>
      <div className='flex items-center bg-primary px-4 py-2'>
        <HashIcon theme='neutral-3' />
        <span className='block ml-2 text-base font-semibold text-neutral-3'>
          Relation to this page
        </span>
      </div>
      <div className='p-4 bg-primary-light'>
        <CollapseToggle data={data} theme='neutral-3' />
      </div>
    </div>
  );
};

export default RelationToPage;
