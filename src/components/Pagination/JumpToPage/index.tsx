import React from 'react';

const JumpToPage: React.FC<{}> = ({}) => {
  return (
    <div className='w-28 h-10 p-0.5 flex items-center justify-between bg-background-darker rounded overflow-hidden'>
      <input
        type='number'
        className='h-full rounded-l bg-background-darker text-neutral-100 text-sm text-center focus:outline-none flex-grow'
      />
      <div className='text-sm font-semibold text-neutral-100 px-2.5'>Go</div>
    </div>
  );
};

export default JumpToPage;
