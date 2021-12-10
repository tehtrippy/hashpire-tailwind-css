import React from 'react';
import {
  GithubIcon,
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  MailIcon,
} from '../../../Icon';
import hashpireTH from '../../../../assets/img/hashpire-tonghualabs.png';

const items = [
  <GithubIcon />,
  <FacebookIcon />,
  <InstagramIcon />,
  <TwitterIcon />,
  <MailIcon />,
];

const MainPageFooter: React.FC<{}> = () => {
  return (
    <div className='p-10 flex flex-col items-center justify-center space-y-4 bg-gradient-to-r from-primary-light to-primary'>
      <img
        src={hashpireTH}
        alt='hashpire by tonguhaulabs logo'
        className='w-36'
      />
      <div className='flex space-x-2 text-neutral-3'>
        {items.map((item, key) => (
          <div className='w-7 h-7' key={key}>
            {item}
          </div>
        ))}
      </div>
      <div className='text-base text-neutral-4'>Copyright © Hashpire 2021.</div>
    </div>
  );
};

export default MainPageFooter;
