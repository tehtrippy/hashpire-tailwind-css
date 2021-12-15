import React, { Fragment } from 'react';
import ProfileImage from './ProfileImage';

export interface IContributor {
  users: { displayName: string; profileImageUrl: string }[];
}

const Contributor: React.FC<IContributor> = ({ users }) => {
  const { profileImageUrl, displayName } = users[0];
  return (
    <>
      {users.length === 1 ? (
        <div className='flex items-center'>
          <ProfileImage
            src={profileImageUrl}
            alt={displayName}
            className='mr-2'
          />
          <span className='text-xs font-semibold text-neutral-100'>
            {displayName}
          </span>
        </div>
      ) : users.length > 5 ? (
        <div className='relative flex items-center'>
          {users.map((user, key) => {
            return (
              key < 5 && (
                <Fragment key={key}>
                  <ProfileImage
                    src={user.profileImageUrl}
                    alt={user.displayName}
                    className={key > 0 ? '-ml-2' : undefined}
                  />
                  {key === 4 && (
                    <div className='flex items-center justify-center relative w-7 h-7 bg-background border border-neutral-100 rounded-full text-xs text-neutral-400 -ml-2'>
                      <span>+{users.length - 5}</span>
                    </div>
                  )}
                </Fragment>
              )
            );
          })}
        </div>
      ) : (
        <div className='relative flex items-center'>
          {users.map((user, key) => (
            <ProfileImage
              src={user.profileImageUrl}
              alt={user.displayName}
              className={key > 0 ? '-ml-2' : undefined}
              key={key}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Contributor;
