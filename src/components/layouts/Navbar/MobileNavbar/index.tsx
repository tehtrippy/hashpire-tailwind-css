import React, { useState } from 'react';
import MenuOverlay from './MenuOverlay';
import { ListIcon } from '../../../Icon';
import NavigationCollapse from './NavigationCollapse';
import hashpireLogo from '../../../../assets/img/hashpire-logo.png';
import { Link } from 'react-router-dom';

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
          <Link to='/' className='ml-4'>
            <img src={hashpireLogo} alt='hashpire logo' className='w-36' />
          </Link>
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
        <>
          <NavigationCollapse className='px-2' />
          <div className='flex flex-col space-y-6 px-6 pt-4 text-base font-semibold text-neutral-2'>
            {leftItems.map((item, key) => (
              <Link to={item.path} key={key}>
                {item.name}
              </Link>
            ))}
          </div>
        </>
      </MenuOverlay>
    </div>
  );
};

export default MobileNavbar;
