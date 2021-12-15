import React from 'react';

const TabItem: React.FC<{}> = ({ children }) => {
  return (
    <div className='flex justify-center flex-grow'>
      <div className='text-neutral-400 w-7 h-7'>{children}</div>
    </div>
  );
};

export default TabItem;
