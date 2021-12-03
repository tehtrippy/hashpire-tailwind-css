import React, { useEffect } from 'react';
import { Transition } from '@headlessui/react';
import { CrossIcon } from '../../../../Icon';
import { SidePanelFooter } from '../../../footer';

interface IMenuOverlay {
  topLeftContent?: React.ReactNode;
  showFooter?: boolean;
  show: boolean;
  handleShowMenu: (show: boolean) => void;
}

const body = document.getElementsByTagName('body');

const MenuOverlay: React.FC<IMenuOverlay> = ({
  handleShowMenu,
  showFooter,
  topLeftContent,
  show,
  children,
}) => {
  // lock and unlock body scroll when menu overlay visible
  useEffect(() => {
    show
      ? (body[0].style.overflow = 'hidden')
      : (body[0].style.overflow = 'visible');
  }, [show]);

  return (
    <Transition show={show}>
      <Transition.Child
        enter='transition ease-in-out duration-300 transform'
        enterFrom='-translate-x-full'
        enterTo='translate-x-0'
        leave='transition ease-in-out duration-300 transform'
        leaveFrom='translate-x-0'
        leaveTo='-translate-x-full'
        className='flex flex-col absolute top-0 bg-neutral-5 min-h-screen w-10/12 md:w-8/12'
      >
        <div className='h-16 flex items-center justify-between px-6'>
          {topLeftContent}
          <CrossIcon onClick={() => handleShowMenu(false)} />
        </div>
        <div className='flex-grow p-4'>{children}</div>
        {showFooter && <SidePanelFooter className='p-6' />}
      </Transition.Child>
    </Transition>
  );
};

export default MenuOverlay;
