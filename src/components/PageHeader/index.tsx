import React from 'react';
import classNames from 'classnames';

interface IPageHeader {
  title: string;
  className?: string;
}

const PageHeader: React.FC<IPageHeader> = ({ title, className }) => {
  return (
    <div
      className={classNames(
        'inline-block text-4xl font-semibold text-neutral-100',
        className
      )}
    >
      {title}
      <div className='mt-2 h-1 w-2/4 bg-primary rounded-full mx-auto' />
    </div>
  );
};

export default PageHeader;
