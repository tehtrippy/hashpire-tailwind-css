import React from 'react';
import { Link } from 'react-router-dom';
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
            <Link
              to={item.path || '/'}
              className='block px-3 py-1.5 hover:bg-primary rounded hover:text-accent'
            >
              {item.title}
            </Link>
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
};

export default DropdownMenu;
