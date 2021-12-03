import React from 'react';
import hashpireTH from '../../../../assets/img/hashpire-tonghualabs.png';

interface IFoorter {
  className?: string;
}

const SidePanelFooter: React.FC<IFoorter> = ({ className }) => {
  return (
    <div className={className}>
      <div className='flex flex-wrap items-center justify-center px-2 py-4 bg-primary-light rounded-lg'>
        <img
          src={hashpireTH}
          alt='hashpire by tonghualabs logo'
          className='w-36'
        />
      </div>
    </div>
  );
};
export default SidePanelFooter;
