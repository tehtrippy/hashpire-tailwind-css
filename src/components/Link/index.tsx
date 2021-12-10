import React from 'react';

interface ILink {
  title: string;
}

const Link: React.FC<ILink> = ({ title }) => {
  return (
    <button className='text-sm font-semibold hover:text-accent group-hover:text-accent focus:text-accent-pressed'>
      {title}
    </button>
  );
};

export default Link;
