import React from 'react';

interface IPaginationItem {
  title: string | React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}

const PaginationItem: React.FC<IPaginationItem> = ({
  title,
  active,
  onClick,
}) => {
  return (
    <span
      onClick={onClick}
      className={`inline-flex items-center justify-center w-9 h-9 p-0.5 rounded-full text-sm font-semibold text-secondary border border-transparent hover:border-accent focus:bg-accent select-none overflow-hidden ${
        onClick && 'cursor-pointer'
      } ${active && 'border-accent bg-accent'}`}
    >
      {title}
    </span>
  );
};

export default PaginationItem;
