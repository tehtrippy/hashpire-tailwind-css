import React from 'react';
import {
  GithubIcon,
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  MailIcon,
} from '../../Icon';
import Badge from '../../Badge';

interface IContributorCard {
  displayName: string;
  profileImageUrl: string;
  bio: string;
  badge: string;
  contacts: {
    github?: string;
    facebook?: string;
    instagram?: string;
    twitter?: string;
    mail?: string;
  };
  className?: string;
}

const ContributorCard: React.FC<IContributorCard> = ({
  displayName,
  profileImageUrl,
  bio,
  badge,
  contacts,
  className,
}) => {
  const { github, facebook, instagram, twitter, mail } = contacts;
  return (
    <div
      className={`relative flex flex-col items-center h-72 w-60 px-6 pb-6 bg-primary-light border border-neutral-4 rounded-3xl ${className}`}
    >
      <img
        src={profileImageUrl}
        alt={displayName}
        className='absolute -top-10 h-20 w-20 rounded-full object-cover border-4 border-neutral-2 shadow-1'
      />
      <div className='mt-16 h-full flex flex-col justify-between items-center'>
        <Badge title={badge} />
        <span className='block text-xl text-neutral-2 font-semibold'>
          {displayName}
        </span>
        <span className='block text-sm text-neutral-3 text-center line-clamp-3'>
          {bio}
        </span>
        <div className='flex items-center space-x-1 text-neutral-3'>
          {github && <GithubIcon className='w-6 h-6' />}
          {facebook && <FacebookIcon className='w-6 h-6' />}
          {instagram && <InstagramIcon className='w-6 h-6' />}
          {twitter && <TwitterIcon className='w-6 h-6' />}
          {mail && <MailIcon className='w-6 h-6' />}
        </div>
      </div>
    </div>
  );
};

export default ContributorCard;
