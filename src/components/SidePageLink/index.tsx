import React from 'react';

export interface ISidePageLink {
  links: { title: string; url: string }[];
}

const SidePageLink: React.FC<ISidePageLink> = ({ links }) => {
  return (
    <div>
      <span className='bloc text-base font-semibold text-neutral-400'>
        Link to this page
      </span>
      <div className='flex mt-4'>
        <div className='border-2 border-primary' />
        <div className='ml-6 flex flex-col space-y-4'>
          {links.map((link, key) => (
            <span className='text-sm font-normal text-neutral-100' key={key}>
              {link.title}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SidePageLink;
