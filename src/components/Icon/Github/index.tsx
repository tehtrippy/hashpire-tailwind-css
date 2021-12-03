import React from 'react';
import IconWrapper, { IIconWrapper } from '../IconWrapper';

const Github: React.FC<IIconWrapper> = ({ theme, size, href, className, onClick }) => {
  return (
    <IconWrapper className={className} href={href} size={size} theme={theme} onClick={onClick}>
      <path d='M32.0027 7.99999C18.7411 7.99448 8 19.0223 8 32.6335C8 43.3968 14.7192 52.5462 24.0769 55.9063C25.3371 56.2313 25.144 55.3114 25.144 54.6835V50.4145C17.8671 51.2903 17.5721 46.3438 17.0841 45.5175C16.0974 43.7879 13.7647 43.3472 14.4618 42.521C16.1189 41.6452 17.8081 42.7413 19.7654 45.7103C21.1811 47.8641 23.9428 47.5006 25.3424 47.1425C25.6481 45.848 26.3023 44.6913 27.2032 43.7934C19.6635 42.4053 16.5211 37.6791 16.5211 32.0606C16.5211 29.3339 17.3952 26.8276 19.1112 24.806C18.0172 21.4735 19.213 18.6201 19.3739 18.196C22.4896 17.9096 25.7285 20.4875 25.9806 20.6913C27.7502 20.201 29.7719 19.9421 32.0349 19.9421C34.3086 19.9421 36.3356 20.2121 38.1213 20.7078C38.7273 20.2341 41.7303 18.0197 44.6261 18.2896C44.7816 18.7138 45.9506 21.501 44.921 24.7895C46.6585 26.8166 47.5433 29.345 47.5433 32.0771C47.5433 37.7067 44.3794 42.4384 36.8182 43.8044C37.4659 44.4587 37.9801 45.2389 38.3309 46.0995C38.6817 46.9602 38.862 47.884 38.8614 48.8171V55.014C38.9043 55.5097 38.8614 56 39.6657 56C49.1628 52.7115 56 43.496 56 32.639C56 19.0222 45.2535 7.99999 32.0027 7.99999Z' />
    </IconWrapper>
  );
};

export default Github;
