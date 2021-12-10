import React, { useState } from 'react';
import { HomeIcon, CommunityIcon, IdeaIcon } from '../Icon';

export interface ITab {
  active: 'home' | 'community' | 'about';
}

const Tab: React.FC<ITab> = ({ active = 'home' }) => {
  const [tabActive, setTabActive] = useState<ITab>({ active });

  return (
    <div className='flex justify-between px-12 py-4 bg-primary'>
      <HomeIcon
        size='medium'
        theme={tabActive.active === 'home' ? 'accent' : undefined}
        onClick={() => setTabActive({ active: 'home' })}
      />
      <CommunityIcon
        size='medium'
        theme={tabActive.active === 'community' ? 'accent' : undefined}
        onClick={() => setTabActive({ active: 'community' })}
      />
      <IdeaIcon
        size='medium'
        theme={tabActive.active === 'about' ? 'accent' : undefined}
        onClick={() => setTabActive({ active: 'about' })}
      />
    </div>
  );
};

export default Tab;
