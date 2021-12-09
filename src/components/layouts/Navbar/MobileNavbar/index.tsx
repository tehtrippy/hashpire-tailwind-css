import React, { useState } from 'react';
import MenuOverlay from './MenuOverlay';
import Link from '../../../Link';
import { ListIcon } from '../../../Icon';
import hashpireLogo from '../../../../assets/img/hashpire-logo.png';

interface IMobileNavbar {
  leftItems: { name: string; path: string }[];
}

const MobileNavbar: React.FC<IMobileNavbar> = ({ leftItems }) => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <div>
      <div className='h-16 bg-primary px-4 py-2 text-neutral-2 flex justify-between items-center border-b border-solid border-neutral-4 shadow-2'>
        {/* Left Items */}
        <div className='flex items-center'>
          <ListIcon theme='secondary' onClick={() => setShow(true)} />
          <img src={hashpireLogo} alt='hashpire logo' className='w-36 ml-4' />
        </div>
      </div>

      {/* Show menu overlay */}
      <MenuOverlay
        show={show}
        topLeftContent={
          <img src={hashpireLogo} alt='hashpire Logo' className='w-36' />
        }
        handleShowMenu={(open) => setShow(open)}
      >
        <div className='inline-flex flex-col items-start space-y-6 px-6 pt-4 text-base font-semibold text-neutral-2'>
          {leftItems.map((item, key) => (
            <Link title={item.name} path={item.path} key={key} />
          ))}
        </div>
      </MenuOverlay>
    </div>
  );
};

export default MobileNavbar;
