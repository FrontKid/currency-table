import { FC, useContext, useEffect, useState } from 'react';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { RateTable } from '../../components/RateTable';
import Pagination from '../../utils/Pagination/Pagination.js';

import dayjs, { Dayjs } from 'dayjs';
import { RateProvider } from '../../store/RateContext.js';
import { getSlicedData } from '../../utils/helpers.js';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const formatDate = (date: Dayjs | null) => {
  return date ? dayjs(date).format('YYYYMMDD') : '';
};

const PAGE_SIZE = 10;
const MIN_SELECT_DATE = dayjs('2000-01-01');
const CURRENT_DAY_DATA = dayjs();
const CURRENT_DAY = dayjs().format('YYYYMMDD');

export const RateSearch: FC = () => {
  const [date, setDate] = useState(CURRENT_DAY);
  const [currentPage, setCurrentPage] = useState(1);
  const { fetchData, rateData } = useContext(RateProvider);


  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleDatePicker = (date: Dayjs | null) => {
    setDate(formatDate(date));
  };

  useEffect(() => {
    fetchData(date);
  }, [fetchData, date]);

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Select date"
          maxDate={CURRENT_DAY_DATA}
          minDate={MIN_SELECT_DATE}
          onChange={handleDatePicker}
        />
      </LocalizationProvider>
      <RateTable data={getSlicedData(rateData, {currentPage, PAGE_SIZE})} />
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={rateData.length}
        pageSize={PAGE_SIZE}
        onPageChange={setCurrentPage}
      />
    </>
  );
};
