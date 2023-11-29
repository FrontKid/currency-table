import {
  FC,
  ReactNode,
  createContext,
  useCallback,
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
  fetchData: (dataUrl?: string) => void;
}

const initialErrorProvider: IInitialRateProvider = {
  rateData: [],
  coef: 1,
  setCoef: () => {},
  setRateData: () => {},
  fetchData: () => {},
};

type TRateContext = {
  children: ReactNode;
};

export const RateProvider = createContext(initialErrorProvider);

const DEFAULT_COEFFICIENT = 1.2;

export const RateContext: FC<TRateContext> = ({ children }) => {
  const [rateData, setRateData] = useState<IRateData[]>([]);
  const [coef, setCoef] = useState(DEFAULT_COEFFICIENT);

  const fetchData = useCallback(async (dataUrl?: string) => {
    try {
      const rateData = await fetchRate(dataUrl);
      setRateData(rateData);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const provider = useMemo(
    () => ({
      rateData,
      coef,
      setCoef,
      setRateData,
      fetchData,
    }),
    [rateData, coef, fetchData],
  );

  return (
    <RateProvider.Provider value={provider}>{children}</RateProvider.Provider>
  );
};
