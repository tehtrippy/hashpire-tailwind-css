import React from 'react';

interface IPaginationItem {
  title: string;
}

const PaginationItem: React.FC<IPaginationItem> = ({ title }) => {
  return (
    <button className='inline-flex items-center justify-center w-9 h-9 p-0.5 rounded-full text-sm font-semibold text-neutral-100 border border-transparent hover:border-primary focus:bg-primary select-none overflow-hidden'>
      {title}
    </button>
  );
};

export default PaginationItem;
