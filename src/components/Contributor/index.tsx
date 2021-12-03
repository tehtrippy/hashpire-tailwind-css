import React, { Fragment } from 'react';

export interface IContributor {
  users: { displayName: string; profileImageUrl: string }[];
}

const Contributor: React.FC<IContributor> = ({ users }) => {
  const { profileImageUrl, displayName } = users[0];
  const imageStyle = `w-7 h-7 rounded-full object-cover border border-neutral-1`;
  return (
    <>
      {users.length === 1 ? (
        <div className='flex items-center'>
          <img
            src={profileImageUrl}
            alt={displayName}
            className={`${imageStyle} mr-2`}
          />
          <span className='text-xs font-semibold text-neutral-1'>
            {displayName}
          </span>
        </div>
      ) : users.length > 5 ? (
        <div className='relative flex items-center'>
          {users.map((user, key) => {
            return (
              key < 5 && (
                <Fragment key={key}>
                  <img
                    src={user.profileImageUrl}
                    alt={user.displayName}
                    className={`${imageStyle} ${key > 0 && '-ml-2'}`}
                  />
                  {key === 4 && (
                    <div className='flex items-center justify-center relative w-7 h-7 bg-primary-light border border-neutral-1 rounded-full text-xs text-neutral-3 -ml-2'>
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
            <img
              key={key}
              src={user.profileImageUrl}
              alt={user.displayName}
              className={`${imageStyle} ${key > 0 && '-ml-2'}`}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Contributor;
