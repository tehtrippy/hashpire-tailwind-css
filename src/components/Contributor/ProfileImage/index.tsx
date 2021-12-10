import React from 'react';

interface IProfileImage {
  src: string;
  alt: string;
  className?: string;
}

const ProfileImage: React.FC<IProfileImage> = ({ src, alt, className }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`w-7 h-7 rounded-full object-cover border border-neutral-1 ${className}`}
    />
  );
};

export default ProfileImage;
