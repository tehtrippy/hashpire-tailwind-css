import React from 'react';
import { Disclosure } from '@headlessui/react';
import { CaretDownIcon, CaretRightIcon } from '../../../../Icon';
import { Link } from 'react-router-dom';

interface INavigationCollapse {
  className?: string;
}

const items = [
  { title: 'Articles', path: '/' },
  { title: 'Notes', path: '/' },
];

const NavigationCollapse: React.FC<INavigationCollapse> = ({ className }) => {
  return (
    <div className={className}>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button
              className={`w-full flex justify-between items-center px-4 py-1.5 text-base font-semibold rounded-lg
              ${open ? 'text-accent bg-primary' : 'text-neutral-2'}`}
            >
              <span>Garden</span>
              {open ? (
                <CaretDownIcon theme='accent' />
              ) : (
                <CaretRightIcon theme='neutral-1' />
              )}
            </Disclosure.Button>
            <Disclosure.Panel className='flex flex-col'>
              {items.map((item, key) => (
                <Link
                  key={key}
                  to={item.path}
                  className='px-10 py-1.5 mt-2 rounded-lg text-base font-semibold text-neutral-2 hover:text-accent'
                >
                  {item.title}
                </Link>
              ))}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default NavigationCollapse;
