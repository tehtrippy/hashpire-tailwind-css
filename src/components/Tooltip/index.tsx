import React from 'react';

const Tooltip: React.FC<{}> = ({ children }) => {
  return (
    <div className='md:h-52 md:w-80 lg:h-64 lg:w-96 bg-background-darker px-4 pt-4 rounded-2xl'>
      <div className='aspect-w-3 aspect-h-2 bg-neutral-400 overflow-hidden'>
        <div className='overflow-y-auto'>{children}</div>
      </div>
    </div>
  );
};

export default Tooltip;
