import React from 'react';
import Navbar from '../Navbar';
import { MainPageFooter } from '../footer';

interface ILayout {
  fullWidth?: boolean;
}

const Layout: React.FC<ILayout> = ({ children, fullWidth }) => {
  return (
    <div className='min-h-screen flex flex-col justify-center bg-primary-light'>
      <Navbar />
      <div
        className={`flex-grow ${
          !fullWidth && 'px-4 py-6 md:p-6 lg:p-9 mx-auto max-w-6xl'
        }`}
      >
        {children}
      </div>
      <MainPageFooter />
    </div>
  );
};

export default Layout;
