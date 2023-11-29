import { getCurrentDate } from '../utils/helpers';
import crrencyRatio from '../settings/crrencyRatio.json';
import { IRateData } from '../types/IRateData';

const currentDate = getCurrentDate();

interface ICurencyRatio {
  r030: number;
  coef: number;
}

type TDateUrl = string | undefined;

export async function fetchRate(dateUrl: TDateUrl = currentDate) {
  const API_URL = `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=${dateUrl}&json`;

  const resp = await fetch(API_URL);
  const data = await resp.json();

  return data.map((dataEntity: IRateData) => {
    const coef =
      crrencyRatio.find((coef: ICurencyRatio) => coef.r030 === dataEntity.r030)
        ?.coef ?? 1;
    const newRate = Number((Number(dataEntity.rate) * coef).toFixed(5));

    return {
      ...dataEntity,
      coef,
      rate: newRate,
    };
  });
}
