import React from 'react';

interface ILink {
  title: string;
}

const Link: React.FC<ILink> = ({ title }) => {
  return (
    <button className='text-sm font-semibold hover:text-primary group-hover:text-primary focus:text-primary-dark'>
      {title}
    </button>
  );
};

export default Link;
