import React from 'react';
import DesktopNavbar, { IDesktopNavbar } from './DesktopNavbar';
import MobileNavbar, { IMobileNavbar } from './MobileNavbar';

export interface INavbar {
  config: { mobile: IMobileNavbar; desktop: IDesktopNavbar };
}

const Navbar: React.FC<INavbar> = ({ config }) => {
  return (
    <>
      <div className='block lg:hidden'>
        <MobileNavbar {...config.mobile} />
      </div>
      <div className='hidden lg:block'>
        <DesktopNavbar {...config.desktop} />
      </div>
    </>
  );
};

export default Navbar;
