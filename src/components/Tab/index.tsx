import React from 'react';
import TabItem from './TabItem';
import { HomeIcon, CommunityIcon, IdeaIcon } from '../Icon';

const items = [<HomeIcon />, <CommunityIcon />, <IdeaIcon />];

const Tab: React.FC<{}> = () => {
  return (
    <div className='px-12 py-4 flex justify-between bg-background-darker'>
      {items.map((item, key) => (
        <TabItem key={key}>{item}</TabItem>
      ))}
    </div>
  );
};

export default Tab;
