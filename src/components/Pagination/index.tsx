import React from 'react';
import PaginationItem from './PaginationItem';
import { CaretLeftIcon, CaretRightIcon } from '../Icon';

const items = [...Array(10)];

const Pagination: React.FC<{}> = () => {
  return (
    <div className='flex items-center justify-center mt-6'>
      <CaretLeftIcon className='text-neutral-100 h-8 w-8' />
      <div className='flex items-center px-2 space-x-2'>
        {items.map((_, key) => (
          <PaginationItem key={key} title={`${key + 1}`} />
        ))}
      </div>
      <CaretRightIcon className='text-neutral-100 h-8 w-8' />
    </div>
  );
};

export default Pagination;
