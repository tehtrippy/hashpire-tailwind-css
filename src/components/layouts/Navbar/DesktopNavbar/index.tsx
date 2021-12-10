import React, { useState } from 'react';
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
import HashpireLogo from '../../../../assets/img/hashpire-logo.png';

export interface IDesktopNavbar {
  active: 'home' | 'community' | 'about';
}

const DesktopNavbar: React.FC<IDesktopNavbar> = ({ active = 'home' }) => {
  const [activeItem, setActiveItem] = useState<IDesktopNavbar>({
    active,
  });

  const renderTitle = ({ active }: IDesktopNavbar) => {
    return (
      <span
        className={`text-sm font-semibold  group-hover:text-accent ${
          activeItem.active === active ? 'text-accent' : 'text-neutral-3'
        }
      `}
      >
        {active === 'home'
          ? 'Home'
          : active === 'community'
          ? 'Community'
          : 'About'}
      </span>
    );
  };

  return (
    <div className='flex justify-between items-center px-6 h-16 bg-primary border-solid border-b border-neutral-4'>
      {/* Left Item */}
      <div className='flex space-x-10 items-center text-sm text-neutral-2'>
        <img src={HashpireLogo} alt='hashpire logo' className='w-32 pb-1.5' />
        <div className='flex items-center space-x-10'>
          <div
            className='flex items-center cursor-pointer group space-x-2'
            onClick={() => setActiveItem({ active: 'home' })}
          >
            <HomeIcon
              size='small'
              className='group-hover:text-accent'
              theme={activeItem.active === 'home' ? 'accent' : undefined}
            />
            {renderTitle({ active: 'home' })}
          </div>
          <div
            className='flex items-center cursor-pointer group space-x-2'
            onClick={() => setActiveItem({ active: 'community' })}
          >
            <CommunityIcon
              size='small'
              theme={activeItem.active === 'community' ? 'accent' : undefined}
              className='group-hover:text-accent'
            />
            {renderTitle({ active: 'community' })}
          </div>

          <div
            className='flex items-center  cursor-pointer group space-x-2'
            onClick={() => setActiveItem({ active: 'about' })}
          >
            <IdeaIcon
              size='small'
              theme={activeItem.active === 'about' ? 'accent' : undefined}
              className='group-hover:text-accent'
            />
            {renderTitle({ active: 'about' })}
          </div>
        </div>
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
