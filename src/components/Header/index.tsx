import React from 'react';

interface IHeader {
  title: string;
}

const Header: React.FC<IHeader> = ({ title }) => {
  return (
    <div className='flex items-center'>
      <div className='text-2xl text-neutral-100'>{title}</div>
      <div className='flex-grow ml-8 border-2 border-dashed' />
    </div>
  );
};

export default Header;
