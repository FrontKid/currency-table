import { FC, useEffect, useState } from 'react';
import { RateTable } from '../../components/RateTable';
import { fetchRate } from '../../api';
import { IRateData } from '../../types/IRateData';

type THomeProps = object;

export const Home: FC<THomeProps> = () => {
  const [rateData, setRateData] = useState<IRateData[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const rateData = await fetchRate();
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
