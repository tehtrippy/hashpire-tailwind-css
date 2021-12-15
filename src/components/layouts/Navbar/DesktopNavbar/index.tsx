import React from 'react';
import HashpireLogo from '../../../../assets/img/hashpire-logo.png';
import {
  GithubIcon,
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  MailIcon,
  HomeIcon,
  CommunityIcon,
  IdeaIcon,
} from '../../../Icon';

const leftItems = [
  { icon: <HomeIcon className='w-6 h-6' />, title: 'Home' },
  { icon: <CommunityIcon className='w-6 h-6' />, title: 'Community' },
  { icon: <IdeaIcon className='w-6 h-6' />, title: 'About' },
];

const rightItems = [
  <GithubIcon />,
  <FacebookIcon />,
  <InstagramIcon />,
  <TwitterIcon />,
  <MailIcon />,
];

const DesktopNavbar: React.FC<{}> = () => {
  return (
    <div className='flex justify-between items-center px-6 h-16 bg-background-darker border-solid border-b border-neutral-400'>
      {/* Left Item */}
      <div className='flex space-x-10 items-center text-sm text-neutral-200'>
        <img src={HashpireLogo} alt='hashpire logo' className='w-32 pb-1.5' />
        <div className='flex items-center space-x-10'>
          {leftItems.map((item, key) => (
            <div className='flex items-center text-neutral-400' key={key}>
              {item.icon}
              <span className='text-sm font-semibold ml-2'>{item.title}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Right Item */}
      <div className='flex items-center text-neutral-400 space-x-4'>
        {rightItems.map((item, key) => (
          <div className='h-7 w-7' key={key}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DesktopNavbar;
