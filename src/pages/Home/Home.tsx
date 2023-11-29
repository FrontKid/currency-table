import { FC, useContext, useEffect, useState } from 'react';
import { RateTable } from '../../components/RateTable';
import Pagination from '../../utils/Pagination/Pagination.js';
import { RateProvider } from '../../store/RateContext.js';
import { getSlicedData } from '../../utils/helpers.js';

type THomeProps = object;
const PAGE_SIZE = 10;

export const Home: FC<THomeProps> = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { fetchData, rateData } = useContext(RateProvider);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <RateTable data={getSlicedData(rateData, { currentPage, PAGE_SIZE })} />
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={rateData.length}
        pageSize={PAGE_SIZE}
        onPageChange={page => setCurrentPage(page)}
      />
    </>
  );
};
