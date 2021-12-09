import React from 'react';

interface IBadge {
  title: string;
}

const Badge: React.FC<IBadge> = ({ title }) => {
  return (
    <div className='inline-flex items-center justify-center h-6 px-2 py-1 bg-accent-focus bg-opacity-20 border border-accent shadow-1 rounded-2xl'>
      <span className='text-xs font-normal text-accent'>{title}</span>
    </div>
  );
};

export default Badge;
