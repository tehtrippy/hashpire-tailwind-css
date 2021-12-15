import React from 'react';
import hashpireTH from '../../../../assets/img/hashpire-tonghualabs.png';

const SidePanelFooter: React.FC<{}> = () => {
  return (
    <div className='flex flex-wrap items-center justify-center px-2 py-4 bg-background rounded-lg'>
      <img
        src={hashpireTH}
        alt='hashpire by tonghualabs logo'
        className='w-36'
      />
    </div>
  );
};
export default SidePanelFooter;
