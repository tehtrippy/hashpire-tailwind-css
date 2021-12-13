import React from 'react';
import Navbar from '../Navbar';
import { MainPageFooter } from '../footer';

const Layout: React.FC<{}> = ({ children }) => {
  return (
    <div className='min-h-screen flex flex-col justify-center bg-primary-light'>
      <Navbar />
      <div className='flex-grow px-4 py-6 md:p-6 lg:p-9 lg:mx-auto max-w-6xl'>
        {children}
      </div>
      <MainPageFooter />
    </div>
  );
};

export default Layout;
