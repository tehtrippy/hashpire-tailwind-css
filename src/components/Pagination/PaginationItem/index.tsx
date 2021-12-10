import React from 'react';

interface IPaginationItem {
  title: string;
}

const PaginationItem: React.FC<IPaginationItem> = ({ title }) => {
  return (
    <button className='inline-flex items-center justify-center w-9 h-9 p-0.5 rounded-full text-sm font-semibold text-secondary border border-transparent hover:border-accent focus:bg-accent select-none overflow-hidden'>
      {title}
    </button>
  );
};

export default PaginationItem;
