import React from 'react';
import Link from '../../../../Link';
import { Menu } from '@headlessui/react';
import { CaretDownIcon } from '../../../../Icon';

interface IDropdownMenu {
  menu: {
    title: string;
    menuItem: {
      title: string;
      path?: string;
    }[];
  };
}

const DropdownMenu: React.FC<IDropdownMenu> = ({ menu }) => {
  const { title, menuItem } = menu;
  return (
    <Menu as='div' className='relative text-sm text-neutral-2'>
      <Menu.Button className='flex items-center font-semibold group hover:text-accent'>
        {title}
        <CaretDownIcon
          size='small'
          theme='neutral-2'
          className='ml-2 group-hover:text-accent'
        />
      </Menu.Button>
      <Menu.Items className='absolute left-0 w-40 mt-5 p-3 bg-primary-light rounded-lg shadow-popup'>
        {menuItem.map((item, key) => (
          <Menu.Item key={key}>
            <Link title={item.title} path={item.path} />
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
};

export default DropdownMenu;
