import React from 'react';
import Link from '../../../Link';
import {
  GithubIcon,
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  MailIcon,
} from '../../../Icon';
import HashpireLogo from '../../../../assets/img/hashpire-logo.png';

interface IDesktopNavbar {
  leftItems: { name: string; path: string }[];
}

const DesktopNavbar: React.FC<IDesktopNavbar> = ({ leftItems }) => {
  return (
    <div className='flex justify-between items-center px-6 h-16 bg-primary border-solid border-b border-neutral-4'>
      {/* Left Item */}
      <div className='flex space-x-10 items-center text-sm text-neutral-2'>
        <img src={HashpireLogo} alt='hashpire logo' className='w-28 pb-1.5' />
        {leftItems.map((item, key) => (
          <Link title={item.name} path={item.path} key={key} />
        ))}
      </div>
      {/* Right Item */}
      <div className='flex space-x-4'>
        <GithubIcon href='https://github.com/hashpire' />
        <FacebookIcon href='https://www.facebook.com/hashpire' />
        <InstagramIcon />
        <TwitterIcon />
        <MailIcon />
      </div>
    </div>
  );
};

export default DesktopNavbar;
