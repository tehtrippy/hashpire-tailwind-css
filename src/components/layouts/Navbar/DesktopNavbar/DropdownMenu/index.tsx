import React from 'react';
import Link from '../../../../Link';
import { Menu } from '@headlessui/react';
import { CaretDownIcon } from '../../../../Icon';

interface IDropdownMenu {
  menu: {
    title: string;
    menuItem: {
      title: string;
    }[];
  };
}

const DropdownMenu: React.FC<IDropdownMenu> = ({ menu }) => {
  const { title, menuItem } = menu;
  return (
    <Menu as='div' className='relative text-sm text-neutral-200'>
      <Menu.Button className='flex items-center font-semibold group hover:text-primary'>
        {title}
        <CaretDownIcon className='ml-2 text-neutral-200 group-hover:text-primary' />
      </Menu.Button>
      <Menu.Items className='absolute left-0 w-40 mt-5 p-3 bg-background rounded-lg shadow-popup'>
        {menuItem.map((item, key) => (
          <Menu.Item key={key}>
            <Link title={item.title} />
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
};

export default DropdownMenu;
