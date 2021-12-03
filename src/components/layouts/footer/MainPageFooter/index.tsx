import React from 'react';
import {
  GithubIcon,
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  MailIcon,
} from '../../../Icon';
import hashpireTH from '../../../../assets/img/hashpire-tonghualabs.png';

const MainPageFooter: React.FC<{}> = () => {
  return (
    <div className='p-10 flex flex-col items-center justify-center space-y-4 bg-gradient-to-r from-primary-light to-primary'>
      <img
        src={hashpireTH}
        alt='hashpire by tonguhaulabs logo'
        className='w-36'
      />
      <div className='flex space-x-2'>
        <GithubIcon href='https://github.com/hashpire' />
        <FacebookIcon href='https://www.facebook.com/hashpire' />
        <InstagramIcon />
        <TwitterIcon />
        <MailIcon />
      </div>
      <div className='text-base text-neutral-4'>Copyright © Hashpire 2021.</div>
    </div>
  );
};

export default MainPageFooter;
