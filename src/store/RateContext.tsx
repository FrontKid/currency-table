import {
  FC,
  ReactNode,
  createContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { IRateData } from '../types/IRateData';
import { fetchRate } from '../api';

interface IInitialRateProvider {
  rateData: IRateData[];
  coef: number;
  setCoef: (state: number) => void;
  setRateData: (state: IRateData[]) => void;
}

const initialErrorProvider: IInitialRateProvider = {
  rateData: [],
  coef: 1,
  setCoef: () => {},
  setRateData: () => {},
};

type TRateContext = {
  children: ReactNode;
};

export const RateProvider = createContext(initialErrorProvider);

export const RateContext: FC<TRateContext> = ({ children }) => {
  const [rateData, setRateData] = useState<IRateData[]>([]);
  const [coef, setCoef] = useState(1.2);

  useEffect(() => {
    (async () => {
      try {
        const rateData = await fetchRate();
        const updatedRateData = rateData.map((data: IRateData) => ({
          ...data,
          coef,
          rate: (data.rate * coef).toFixed(5),
        }));

        setRateData(updatedRateData);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [coef]);

  const provider = useMemo(
    () => ({
      rateData,
      coef,
      setCoef,
      setRateData,
    }),
    [rateData, coef],
  );

  return (
    <RateProvider.Provider value={provider}>{children}</RateProvider.Provider>
  );
};
