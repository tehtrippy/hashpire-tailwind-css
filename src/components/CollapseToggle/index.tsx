import React, { Fragment } from 'react';
import { Disclosure } from '@headlessui/react';
import { TriangleDownIcon, TriangleRightIcon } from '../Icon';

export interface ICollapseToggle {
  data: {
    title: string;
    children?: ICollapseToggle['data'];
  }[];
  showItemsCount?: boolean;
  className?: string;
}

const CollapseToggle: React.FC<ICollapseToggle> = ({
  data,
  showItemsCount,
  className,
}) => {
  const renderTriangleDownIcon = (renderDownIcon: boolean) => {
    return (
      <Disclosure.Button>
        {renderDownIcon ? (
          <TriangleDownIcon className='text-primary h-4 w-4' />
        ) : (
          <TriangleRightIcon className='text-neutral-100 h-4 w-4' />
        )}
      </Disclosure.Button>
    );
  };

  const renderTitle = (
    item: { title: string; children?: ICollapseToggle['data'] },
    open: boolean
  ) => {
    const lengthOfChildren = item.children?.length;
    return (
      <div className='flex items-center justify-between px-3 py-1 rounded  text-sm font-normal hover:bg-primary hover:bg-opacity-20'>
        <div className='flex items-center'>
          {lengthOfChildren && renderTriangleDownIcon(open)}
          <span className={`${!lengthOfChildren ? 'ml-7' : 'ml-3'}`}>
            {item.title}
          </span>
        </div>
        {showItemsCount && lengthOfChildren && (
          <div className='flex items-center bg-neutral-900 px-1.5 py-0.5 rounded'>
            {lengthOfChildren}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className={`flex flex-col space-y-2 text-neutral-100 ${className}`}>
      {data.map((item, key) => (
        <Disclosure key={key}>
          {({ open }) => (
            <div className='flex flex-col space-y-2'>
              {/* Level 1 */}
              {renderTitle(item, open)}
              <Disclosure.Panel className='ml-4  space-y-2'>
                {item.children?.map((child, key) => (
                  <Disclosure key={key}>
                    {({ open }) => (
                      <div className='flex flex-col space-y-2'>
                        {/* Level 2 */}
                        {renderTitle(child, open)}
                        <Disclosure.Panel className='ml-8  space-y-2'>
                          {child.children?.map((child, key) => (
                            <Disclosure key={key}>
                              {({ open }) => (
                                <div className='flex flex-col space-y-2'>
                                  {/* Level 3 */}
                                  {renderTitle(child, open)}
                                  <Disclosure.Panel className='ml-12  space-y-2'>
                                    {child.children?.map((child, key) => (
                                      //   Level 4
                                      <Fragment key={key}>
                                        {renderTitle(child, open)}
                                      </Fragment>
                                    ))}
                                  </Disclosure.Panel>
                                </div>
                              )}
                            </Disclosure>
                          ))}
                        </Disclosure.Panel>
                      </div>
                    )}
                  </Disclosure>
                ))}
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
      ))}
    </div>
  );
};

export default CollapseToggle;
