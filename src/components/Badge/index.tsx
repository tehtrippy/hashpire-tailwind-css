import React from 'react';

interface IBadge {
  title: string;
}

const Badge: React.FC<IBadge> = ({ title }) => {
  return (
    <span className='h-6 px-2 py-1 bg-primary bg-opacity-20 border border-primary shadow-1 rounded-2xl text-xs font-normal text-primary'>
      {title}
    </span>
  );
};

export default Badge;
