import React from 'react';
import Tab from '../../../Tab';
import type { ITab } from '../../../Tab';
import { LeftPaneIcon, RightPaneIcon } from '../../../Icon';
import hashpireLogo from '../../../../assets/img/hashpire-logo.png';

export interface IMobileNavbar {
  tab: ITab;
  leftIconClick?: () => void;
  rightIconClick?: () => void;
}

const MobileNavbar: React.FC<IMobileNavbar> = ({
  tab,
  leftIconClick,
  rightIconClick,
}) => {
  return (
    <div className='flex flex-col'>
      <div className='h-16 bg-primary px-6 py-3 flex justify-between items-center'>
        {leftIconClick ? (
          <LeftPaneIcon onClick={leftIconClick} size='medium' />
        ) : (
          <div className='h-10 w-10' />
        )}
        <img src={hashpireLogo} alt='hashpire logo' className='w-36' />
        {rightIconClick ? (
          <RightPaneIcon onClick={rightIconClick} size='medium' />
        ) : (
          <div className='h-10 w-10' />
        )}
      </div>
      <Tab active={tab.active} />
    </div>
  );
};

export default MobileNavbar;
