import React from 'react';
import Contributor from '../../../Contributor';
import type { IPostCard } from '../../PostCard';

interface IMobilePostCard extends Omit<IPostCard, 'description'> {}

const MobilePostCard: React.FC<IMobilePostCard> = ({
  title,
  tags,
  publishedAt,
  coverImage,
  users,
}) => {
  return (
    <div className='flex items-center h-32 overflow-hidden'>
      <div className='flex flex-col justify-between w-3/4 pr-2'>
        <div>
          <Contributor users={users} />
          <span className='block mt-2 text-base font-semibold text-neutral-1 line-clamp-2'>
            {title}
          </span>
          <div className='line-clamp-1 mt-2'>
            {tags.map((tag, key) => (
              <span
                key={key}
                className='mr-2 text-xs text-neutral-3 font-normal'
              >
                #{tag.name}
              </span>
            ))}
          </div>
        </div>
        <span className='block text-xs text-neutral-3 font-normal mt-2'>
          {publishedAt}
        </span>
      </div>
      <div className='w-1/4'>
        <div className='aspect-w-3 aspect-h-2'>
          <img
            src={coverImage}
            alt={title}
            className='absolute top-0 left-0 right-0 bottom-0 h-full w-full object-cover'
          />
        </div>
      </div>
    </div>
  );
};

export default MobilePostCard;
