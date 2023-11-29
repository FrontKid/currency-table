import { FC, useEffect, useState } from 'react';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { format } from 'date-fns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { fetchRate } from '../../api';
import { IRateData } from '../../types/IRateData';
import { RateTable } from '../../components/RateTable';
import { prepareRateData } from '../../utils/prepareRateData';
import dayjs from 'dayjs';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const formatDate = (date:any) => {
  return date ? format(date, 'yyyyMMdd') : '';
};

const MIN_SELECT_DATE = dayjs('2000-01-01')
const CURRENT_DAY_DATA = dayjs()
const CURRENT_DAY = dayjs().format('YYYYMMDD')

export const RateSearch: FC = () => {
  const [rateData, setRateData] = useState<IRateData[]>([]);
  const [date, setDate] = useState(CURRENT_DAY);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleDatePicker = (date: any) => {
    setDate(formatDate(date.$d))
  } 

  useEffect(() => {
    (async () => {
      try {
        const rateData = await fetchRate(date);
        const updatedRateData = prepareRateData(rateData);

        setRateData(updatedRateData);
      } catch (error) {
        console.log('No data');
      }
    })();
  }, [date]);

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
      <RateTable data={rateData} />
    </>
  );
};
