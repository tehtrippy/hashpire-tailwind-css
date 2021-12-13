import React from 'react';

interface ITopicWithIcon {
  icon: React.ReactNode;
  title: string;
  description: string;
  subDescription?: string;
}

const TopicWithIcon: React.FC<ITopicWithIcon> = ({
  icon,
  title,
  description,
  subDescription,
}) => {
  return (
    <div className='text-center whitespace-pre-wrap space-y-2.5'>
      <span className='inline-block'>{icon}</span>
      <span className='block text-xl font-bold text-accent'>{title}</span>
      <span className='block text-xs font-normal text-neutral-3'>
        {description}
      </span>
      <span className='block text-xs font-normal text-neutral-4'>
        {subDescription}
      </span>
    </div>
  );
};

export default TopicWithIcon;
