import { IDailyCoef } from '../settings/CurrencyRatio';
import { IRateData } from '../types/IRateData';

export function prepareRateData(data: IRateData[]) {
  return data.map(dataEntity => {
    const dailycoefs = JSON.parse(localStorage.getItem('coefs') ?? '[]')
    const coef = dailycoefs.find((coe: IDailyCoef) => coe.r030 === dataEntity.r030)?.coef ?? 1;
    const newRate = Number((Number(dataEntity.rate) * coef).toFixed(5));

    return {
      ...dataEntity,
      rate: newRate,
      coef,
    };
  });
}
