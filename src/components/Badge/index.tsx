import React from 'react';

interface IBadge {
  title: string;
}

const Badge: React.FC<IBadge> = ({ title }) => {
  return (
    <span className='h-6 px-2 py-1 bg-accent-focus bg-opacity-20 border border-accent shadow-1 rounded-2xl text-xs font-normal text-accent'>
      {title}
    </span>
  );
};

export default Badge;
