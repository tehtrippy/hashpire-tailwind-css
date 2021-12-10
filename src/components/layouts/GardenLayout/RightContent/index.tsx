import React from 'react';
import type { IGardenLayout } from '../../GardenLayout';

interface IRightContent extends Omit<IGardenLayout, 'leftContent' | 'navbar'> {}

const RightContent: React.FC<IRightContent> = ({
  right25Content,
  right75Content,
}) => {
  return (
    <div className='flex flex-grow pt-6 pl-6 bg-primary-light overflow-y-auto'>
      <div className='flex-grow flex justify-center'>
        <div className='max-w-5xl'>{right75Content}</div>
      </div>
      <div className='flex-none w-1/4 max-w-xs'>{right25Content}</div>
    </div>
  );
};

export default RightContent;
