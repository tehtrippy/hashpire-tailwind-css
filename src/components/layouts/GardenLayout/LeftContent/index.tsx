import React from 'react';
import { SidePanelFooter } from '../../footer';

const LeftContent: React.FC<{}> = ({ children }) => {
  return (
    <div className='flex flex-col flex-none justify-between h-full w-64 p-6 bg-primary'>
      <div className='flex flex-wrap content-start flex-grow overflow-auto'>
        {children}
      </div>
      <SidePanelFooter className='p-2' />
    </div>
  );
};

export default LeftContent;
