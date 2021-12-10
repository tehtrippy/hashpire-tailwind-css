import React from 'react';
import Navbar, { INavbar } from '../Navbar';
import { MainPageFooter } from '../footer';

export interface ILayout {
  navbar: INavbar;
}

const Layout: React.FC<ILayout> = ({ children, navbar }) => {
  return (
    <div className='min-h-screen flex flex-col bg-primary-light'>
      <Navbar config={navbar.config} />
      <div className='flex-grow px-4 py-6 md:p-6 lg:p-9'>{children}</div>
      <MainPageFooter />
    </div>
  );
};

export default Layout;
