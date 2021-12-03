import React from 'react';

const LeftContent: React.FC<{}> = ({ children }) => {
  return <div className='w-72 bg-primary'>{children}</div>;
};

export default LeftContent;
