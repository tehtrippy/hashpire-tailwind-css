import React from 'react';
import { Disclosure } from '@headlessui/react';
import { CaretDownIcon, CaretRightIcon } from '../../../../Icon';

interface INavigationCollapse {
  className?: string;
}

const items = [{ title: 'Articles' }, { title: 'Notes' }];

const NavigationCollapse: React.FC<INavigationCollapse> = ({ className }) => {
  return (
    <div className={className}>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button
              className={`w-full flex justify-between items-center px-4 py-1.5 text-base font-semibold rounded-lg
              ${open ? 'text-primary bg-primary' : 'text-neutral-200'}`}
            >
              <span>Garden</span>
              {open ? (
                <CaretDownIcon className='text-primary' />
              ) : (
                <CaretRightIcon className='text-neutral-100' />
              )}
            </Disclosure.Button>
            <Disclosure.Panel className='flex flex-col'>
              {items.map((item, key) => (
                <span
                  className='inline-block px-10 py-1.5 mt-2 rounded-lg text-base font-semibold text-neutral-200 hover:text-primary'
                  key={key}
                >
                  {item.title}
                </span>
              ))}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default NavigationCollapse;
