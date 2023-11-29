import { FC, useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { RateProvider } from '../../store/RateContext';
import { IRateData } from '../../types/IRateData';

type TRateEditingProps = object;

export const RateEditing: FC<TRateEditingProps> = () => {
  const location = useLocation();
  const { rateData } = useContext(RateProvider);

  const [currency, setCurrency] = useState<IRateData>();

  useEffect(() => {
    const parts = location.pathname.split('/');
    const currencyName = parts.at(-1);
    const currentCurrency = rateData.find(
      rateDataEntity => rateDataEntity.cc === currencyName,
    );

    setCurrency(currentCurrency);
  }, [location, rateData]);

  if (!currency) {
    return null;
  }

  return (
   <div>
     <ul>
      <li>{currency.r030}</li>
      <li>{currency.txt}</li>
      <li>{currency.rate}</li>
      <li>{currency.cc}</li>
      <li>{currency.exchangedate}</li>
      <li>{currency.coef}</li>
    </ul>

    <button>Save changes</button>
   </div>
  );
};
