import { FC, useEffect, useState } from 'react';
import { fetchRate } from '../../api';
import { IRateData } from '../../types/IRateData';
import { RateTable } from '../../components/RateTable';
import { prepareRateData } from '../../utils/prepareRateData';

type TRateSearchProps = object;

export const RateSearch: FC<TRateSearchProps> = () => {
  const [rateData, setRateData] = useState<IRateData[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const rateData = await fetchRate('20191107');
        const updatedRateData = prepareRateData(rateData);

        setRateData(updatedRateData);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return <RateTable data={rateData} />;
};
