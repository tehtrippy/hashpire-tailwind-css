import React from 'react';
import { Hashtag } from '../../../tags';
import Contributor from '../../../Contributor';
import type { IPostCard } from '../../PostCard';

const DesktopPostCard: React.FC<IPostCard> = ({
  title,
  description,
  coverImage,
  publishedAt,
  tags,
  users,
}) => {
  return (
    <div className='flex items-center justify-between h-44'>
      <div className='flex flex-col justify-between h-full w-4/6 pr-4'>
        <div className='space-y-2'>
          <Contributor users={users} />
          <span className='block text-xl font-semibold text-neutral-100 line-clamp-2'>
            {title}
          </span>
          <span className='block text-sm font-normal text-neutral-400 line-clamp-2'>
            {description}
          </span>
        </div>
        <div className='flex items-center'>
          <span className='text-xs text-neutral-400 font-normal'>
            {publishedAt}
          </span>
          <div className='w-0.5 h-0.5 rounded-full bg-neutral-400 mx-2' />
          <div className='line-clamp-1'>
            {tags.map((tag, key) => (
              <Hashtag
                className={`h-6 py-1 px-2.5 rounded-2xl ${key > 0} && mr-2`}
                title={tag.name}
                key={key}
              />
            ))}
          </div>
        </div>
      </div>
      <div className='h-full w-2/6'>
        <img
          src={coverImage}
          alt={title}
          className='object-cover w-full h-full'
        />
      </div>
    </div>
  );
};

export default DesktopPostCard;
