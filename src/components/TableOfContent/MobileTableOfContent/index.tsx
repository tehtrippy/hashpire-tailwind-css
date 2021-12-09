import React from 'react';
import { Disclosure } from '@headlessui/react';
import { ListIcon, CaretRightIcon, CaretDownIcon } from '../../Icon';
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
              <ListIcon theme='neutral-3' />
              <div className='ml-2 text-base font-semibold text-neutral-3'>
                Table of contents
              </div>
            </div>
            {open ? (
              <CaretDownIcon theme='neutral-3' />
            ) : (
              <CaretRightIcon theme='neutral-3' />
            )}
          </Disclosure.Button>
          <Disclosure.Panel>
            <div className='p-4 bg-neutral-5 rounded-b-lg'>
              <CollapseToggle data={data} theme='neutral-3' />
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default MobileTableOfContent;
