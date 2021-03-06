import React from 'react';
import { Disclosure } from '@headlessui/react';
import { CaretRightIcon, CaretDownIcon } from '../Icon';
import MocLibrary from '../MocLibrary';
import SidePageLink from '../SidePageLink';
import type { IMocLibrary } from '../MocLibrary';
import type { ISidePageLink } from '../SidePageLink';

interface IPageLink {
  moc?: IMocLibrary;
  linkPage?: ISidePageLink;
}

const PageLink: React.FC<IPageLink> = ({ moc, linkPage }) => {
  return (
    <div className='flex flex-col bg-neutral-5 rounded-lg'>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className='flex justify-between items-center w-full px-4 py-2'>
              <span className='text-sm font-medium text-neutral-1'>
                Relationship to this page
              </span>
              {open ? (
                <CaretDownIcon theme='neutral-1' />
              ) : (
                <CaretRightIcon theme='neutral-1' />
              )}
            </Disclosure.Button>
            {(moc || linkPage) && (
              <Disclosure.Panel className='p-4 border-t rounded-b-lg'>
                {moc && <MocLibrary items={moc.items} />}
                {moc && linkPage && <div className='mt-6' />}
                {linkPage && <SidePageLink links={linkPage.links} />}
              </Disclosure.Panel>
            )}
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default PageLink;
