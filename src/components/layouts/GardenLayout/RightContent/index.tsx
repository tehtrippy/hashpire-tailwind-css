import React from 'react';
import type { IGardenLayout } from '../../GardenLayout';

interface IRightContent extends Omit<IGardenLayout, 'leftContent'> {}

const RightContent: React.FC<IRightContent> = ({
  right25Content,
  right75Content,
}) => {
  return (
    <div className='hidden lg:flex w-full bg-primary-light pt-6 pl-6 overflow-y-auto'>
      <div className='w-full flex justify-center bg-red-500'>
        <div className='max-w-5xl bg-green-300'>{right75Content}</div>
      </div>
      <div className='w-1/4 max-w-xs bg-yellow-500'>
        {right25Content}
      </div>
    </div>
  );
};

export default RightContent;
