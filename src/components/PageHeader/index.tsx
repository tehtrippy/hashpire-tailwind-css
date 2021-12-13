import React from 'react';

interface IPageHeader {
  title: string;
}

const PageHeader: React.FC<IPageHeader> = ({ title }) => {
  return (
    <div className='inline-block text-4xl font-semibold text-neutral-1'>
      {title}
      <div className='mt-2 h-1 w-2/4 bg-accent rounded-full mx-auto' />
    </div>
  );
};

export default PageHeader;
