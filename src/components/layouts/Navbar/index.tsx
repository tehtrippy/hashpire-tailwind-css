import React from 'react';
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';

const navbarLeftItems = [
  { name: 'Articles', path: '/' },
  { name: 'Knowledge-base', path: '/' },
  { name: 'MOCs', path: '/' },
  { name: 'Community', path: '/' },
  { name: 'About', path: '/' },
];

const Navbar: React.FC<{}> = () => {
  return (
    <>
      <div className='block lg:hidden'>
        <MobileNavbar leftItems={navbarLeftItems} />
      </div>
      <div className='hidden lg:block'>
        <DesktopNavbar leftItems={navbarLeftItems} />
      </div>
    </>
  );
};

export default Navbar;
