import { FC, useEffect, useState } from 'react';
import { fetchRate } from '../../api';
import { IRateData } from '../../types/IRateData';
import { RateTable } from '../../components/RateTable';

type TRateSearchProps = object;

export const RateSearch: FC<TRateSearchProps> = () => {
  const [rateData, setRateData] = useState<IRateData[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const rateData = await fetchRate('20191107');
        const updatedRateData = rateData.map((data: IRateData) => ({
          ...data,
          coef: 1,
        }));

        setRateData(updatedRateData);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return <RateTable data={rateData} />;
};
