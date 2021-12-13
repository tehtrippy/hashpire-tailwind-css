import React from 'react';
import { Layout } from '../../../components/layouts';
import Navbar from '../Navbar';
import LeftContent from './LeftContent';
import RightCotnent from './RightContent';

export interface IGardenLayout {
  leftContent?: React.ReactNode;
  right75Content?: React.ReactNode;
  right25Content?: React.ReactNode;
  mobileContent?: React.ReactNode;
}

const GardenLayout: React.FC<IGardenLayout> = ({
  leftContent,
  right75Content,
  right25Content,
  mobileContent,
}) => {
  return (
    <>
      <div className='hidden lg:block'>
        <Navbar />
        <div className='h-content flex bg-primary-light'>
          <LeftContent>{leftContent}</LeftContent>
          <RightCotnent
            right25Content={right25Content}
            right75Content={right75Content}
          />
        </div>
      </div>
      <div className='block lg:hidden'>
        <Layout>{mobileContent}</Layout>
      </div>
    </>
  );
};

export default GardenLayout;
