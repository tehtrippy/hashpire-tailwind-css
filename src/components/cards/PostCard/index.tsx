import React from 'react';
import type { IContributor } from '../../Contributor';
import DesktopPostCard from './DesktopPostCard';
import MobilePostCard from './MobilePostCard';

export interface IPostCard extends IContributor {
  title: string;
  description: string;
  coverImage: string;
  publishedAt: string;
  tags: { name: string }[];
}

const PostCard: React.FC<IPostCard> = ({ ...args }) => {
  return (
    <div>
      <div className='hidden md:block'>
        <DesktopPostCard {...args} />
      </div>
      <div className='block md:hidden'>
        <MobilePostCard {...args} />
      </div>
    </div>
  );
};

export default PostCard;
