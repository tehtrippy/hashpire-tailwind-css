import React, { useState, useMemo } from 'react';
import { PostCard, IPostCard } from '../cards';
import PaginationItem from './PaginationItem';
import JumpToPage from './JumpToPage';
import { CaretLeftIcon, CaretRightIcon, MoreIcon } from '../Icon';
import { usePagination, DOTS } from '../../hooks';

interface IPagination {
  data: IPostCard[];
  perPage: number;
  siblingCount: number;
  showJumpToPage?: boolean;
}

const Pagination: React.FC<IPagination> = ({
  data,
  perPage,
  siblingCount = 1,
  showJumpToPage,
}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [jumpPageValue, setJumpPageValue] = useState<number>(1);

  const paginationRange = usePagination({
    currentPage,
    totalCount: data.length,
    siblingCount,
    pageSize: perPage,
  });

  const lastPage =
    paginationRange && paginationRange[paginationRange.length - 1];

  const currentData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * perPage;
    const lastPageIndex = firstPageIndex + perPage;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, data, perPage]);

  const onNext = () => {
    setCurrentPage((page) => page + 1);
  };

  const onPrevious = () => {
    setCurrentPage((page) => page - 1);
  };

  const handleJumpPageChange = (jumpPage: number) => {
    if (lastPage && typeof lastPage === 'number') {
      setJumpPageValue(jumpPage > lastPage ? lastPage : jumpPage);
    }
  };

  return (
    <div>
      <div className='space-y-4'>
        {currentData.map((post, key) => (
          <PostCard {...post} key={key} />
        ))}
      </div>
      <div className='flex items-center justify-center mt-6'>
        <CaretLeftIcon
          theme={currentPage !== 1 ? 'neutral-1' : undefined}
          onClick={currentPage !== 1 ? onPrevious : undefined}
        />
        <div className='flex items-center px-2 space-x-2'>
          {paginationRange &&
            paginationRange.map((pageNumber, key) => {
              if (pageNumber === DOTS) {
                return <MoreIcon key={key} theme='neutral-1' />;
              }
              return (
                <PaginationItem
                  key={key}
                  onClick={() => setCurrentPage(Number(pageNumber))}
                  title={pageNumber}
                  active={Number(pageNumber) === currentPage}
                />
              );
            })}
        </div>
        <CaretRightIcon
          theme={currentPage !== lastPage ? 'neutral-1' : undefined}
          onClick={currentPage !== lastPage ? onNext : undefined}
        />
      </div>
      {showJumpToPage && (
        <div className='flex justify-center mt-4'>
          <JumpToPage
            page={jumpPageValue}
            max={Number(lastPage)}
            onChange={(page) => handleJumpPageChange(page)}
            onClick={() => setCurrentPage(jumpPageValue)}
          />
        </div>
      )}
    </div>
  );
};

export default Pagination;
