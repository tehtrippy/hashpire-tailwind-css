import React from 'react';

interface IDOT {
  title: string;
}

const DOT: React.FC<IDOT> = ({ title }) => {
  return (
    <div className='text-center whitespace-pre-wrap'>
      <span className='inline-block w-4 h-4 rounded-full bg-accent' />
      <span className='block mt-2 text-base font-semibold text-neutral-2'>
        {title}
      </span>
    </div>
  );
};

export default DOT;
