import React from 'react';

interface ILink {
  title: string;
  path?: string;
}

const Link: React.FC<ILink> = ({ title, path }) => {
  return (
    <button className='text-sm font-semibold hover:text-accent focus:text-accent-pressed'>
      {title}
    </button>
  );
};

export default Link;
