import React from 'react';
import { FolderIcon } from '../../Icon';
import Contributor from '../../Contributor';
import type { IContributor } from '../../Contributor';

interface IMocCard extends IContributor {
  title: string;
  description: string;
  coverImage: string;
  publishedAt: string;
}

const MocCard: React.FC<IMocCard> = ({
  title,
  description,
  coverImage,
  publishedAt,
  users,
}) => {
  return (
    <div
      className='h-80 max-w-md px-6 pb-6 flex flex-col place-content-end rounded-2xl shadow-1 border
       border-neutral-4 bg-center bg-no-repeat bg-cover'
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(30, 30, 30, 0.2) 0%, rgba(30, 30, 30, 0.1) 0.01%, rgba(30, 30, 30, 0.9) 72.97%, #1E1E1E 100%), url(${coverImage})`,
      }}
    >
      <div className='flex flex-col justify-between'>
        <div className='flex flex-col'>
          <div className='flex items-center'>
            <FolderIcon theme='neutral-1' />
            <span className='text-neutral-1 font-semibold line-clamp-1 ml-2'>
              {title}
            </span>
          </div>
          <span className='line-clamp-2 text-neutral-3 text-sm font-normal mt-1'>
            {description}
          </span>
        </div>
        <div className='flex items-center mt-3'>
          <span className='text-xs text-neutral-3 font-normal'>
            {publishedAt}
          </span>
          <div className='w-0.5 h-0.5 rounded-full bg-neutral-4 mx-2' />
          <Contributor users={users} />
        </div>
      </div>
    </div>
  );
};

export default MocCard;
