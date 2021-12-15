import React from 'react';
import Tab from '../../../Tab';
import { LeftPaneIcon, RightPaneIcon } from '../../../Icon';
import hashpireLogo from '../../../../assets/img/hashpire-logo.png';

const MobileNavbar: React.FC<{}> = () => {
  return (
    <div className='flex flex-col'>
      <div className='h-16 bg-background-darker px-6 py-3 flex justify-between items-center'>
        <LeftPaneIcon className='text-neutral-400 w-9 h-9' />
        <img src={hashpireLogo} alt='hashpire logo' className='w-36' />
        <RightPaneIcon className='text-neutral-400 w-9 h-9' />
      </div>
      <Tab />
    </div>
  );
};

export default MobileNavbar;
