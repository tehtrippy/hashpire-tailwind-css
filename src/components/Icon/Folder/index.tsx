import React from 'react';
import IconWrapper, { IIconWrapper } from '../IconWrapper';

const Folder: React.FC<IIconWrapper> = ({ theme, size, href, className, onClick }) => {
  return (
    <IconWrapper className={className} href={href} size={size} theme={theme} onClick={onClick}>
      <path
        d='M53.9988 17.9995H32.6668L25.7292 12.7983C25.0376 12.2818 24.198 12.0017 23.3347 11.9995H9.99878C8.93823 12.0006 7.92143 12.4223 7.17151 13.1722C6.42159 13.9222 5.99983 14.939 5.99878 15.9995V49.9995C5.99983 51.0601 6.42159 52.0769 7.17151 52.8268C7.92143 53.5767 8.93824 53.9985 9.99878 53.9995H54.2214C55.2228 53.9981 56.1828 53.5997 56.8909 52.8916C57.599 52.1835 57.9974 51.2235 57.9988 50.2222V21.9995C57.9977 20.939 57.576 19.9222 56.826 19.1722C56.0761 18.4223 55.0593 18.0006 53.9988 17.9995Z'
      />
    </IconWrapper>
  );
};

export default Folder;
