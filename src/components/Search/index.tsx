import React from 'react';

const Search: React.FC<{}> = () => {
  return (
    <div className='h-11 bg-primary px-6'>
      <div className='relative h-full flex items-center rounded-full bg-primary-light'>
        <svg
          viewBox='0 0 24 24'
          className='w-4 h-4 absolute flex items-center ml-4 stroke-2 stroke-current fill-current text-neutral-4'
        >
          <path d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'></path>
        </svg>
        <input
          className='text-sm text-neutral-4 pl-10 bg-transparent h-full w-full rounded-full focus:outline-none'
          placeholder='Discover'
        />
      </div>
    </div>
  );
};

export default Search;
