import React from 'react';

interface IJumpToPage {
  page: number;
  max?: number;
  onChange: (page: number) => void;
  onClick?: () => void;
}

const JumpToPage: React.FC<IJumpToPage> = ({
  page,
  max,
  onChange,
  onClick,
}) => {
  return (
    <div className='w-28 h-10 p-0.5 flex items-center justify-between bg-accent rounded overflow-hidden'>
      <input
        type='number'
        value={page}
        max={max}
        min={1}
        onChange={(event) => onChange(Number(event.target.value))}
        className='h-full rounded-l bg-primary text-neutral-1 text-sm text-center focus:outline-none flex-grow'
      />
      <div
        className={`text-sm font-semibold text-secondary px-2.5 ${
          onClick && 'cursor-pointer'
        }`}
        onClick={onClick}
      >
        Go
      </div>
    </div>
  );
};

export default JumpToPage;
