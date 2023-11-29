import { IRateData } from '../types/IRateData';

type IPrepareRateData = {
  (
    data: IRateData[],
    options: {
      currentPage: number;
      pageSize: number;
    },
  ): IRateData[];
};

export const prepareRateData: IPrepareRateData = (data, options) => {
  const { currentPage, pageSize } = options;

  const preparedData = data.map(dataEntity => {
    const dailycoefs = JSON.parse(localStorage.getItem('coefs') ?? '[]');
    const coef =
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      dailycoefs.find((coef:any) => coef.r030 === dataEntity.r030)
        ?.coef ?? 1;
    const newRate = Number((Number(dataEntity.rate) * coef).toFixed(5));

    return {
      ...dataEntity,
      rate: newRate,
      coef,
    };
  });

  const firstPageIndex = (currentPage - 1) * pageSize;
  const lastPageIndex = firstPageIndex + pageSize;

  return preparedData.slice(firstPageIndex, lastPageIndex);
};
