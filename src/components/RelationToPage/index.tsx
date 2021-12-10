import React from 'react';
import { LinkIcon } from '../Icon';
import CollapseToggle from '../CollapseToggle';
import type { ICollapseToggle } from '../CollapseToggle';

interface IRelationToPage extends Omit<ICollapseToggle, 'showItemsCount'> {}

const RelationToPage: React.FC<IRelationToPage> = ({ data }) => {
  return (
    <div>
      <div className='flex items-center bg-primary px-4 py-2'>
        <LinkIcon className='text-neutral-3 h-6 w-6' />
        <span className='block ml-2 text-base font-semibold text-neutral-3'>
          Relation to this page
        </span>
      </div>
      <div className='p-4 bg-primary-light'>
        <CollapseToggle data={data} />
      </div>
    </div>
  );
};

export default RelationToPage;
