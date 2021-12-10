import React from 'react';
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';

const Navbar: React.FC<{}> = () => {
  return (
    <>
      <div className='block lg:hidden'>
        <MobileNavbar />
      </div>
      <div className='hidden lg:block'>
        <DesktopNavbar />
      </div>
    </>
  );
};

export default Navbar;
