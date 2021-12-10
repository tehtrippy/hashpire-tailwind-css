import React from 'react';
import { Disclosure } from '@headlessui/react';
import { ListBulletIcon, CaretRightIcon, CaretDownIcon } from '../../Icon';
import CollapseToggle from '../../CollapseToggle';
import type { ITableOfContent } from '..';

const MobileTableOfContent: React.FC<ITableOfContent> = ({ data }) => {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button
            className={`w-full flex items-center justify-between bg-neutral-5 px-4 py-2 ${
              open ? 'rounded-t-lg' : 'rounded-lg'
            } border-b border-primary`}
          >
            <div className='flex items-center'>
              <ListBulletIcon className='text-neutral-3 h-6 w-6' />
              <div className='ml-2 text-base font-semibold text-neutral-3'>
                Table of contents
              </div>
            </div>
            {open ? (
              <CaretDownIcon className='text-neutral-3 h-6 w-6' />
            ) : (
              <CaretRightIcon className='text-neutral-3 h-6 w-6' />
            )}
          </Disclosure.Button>
          <Disclosure.Panel>
            <div className='p-4 bg-neutral-5 rounded-b-lg'>
              <CollapseToggle data={data} />
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default MobileTableOfContent;
