import { IRateData } from '../types/IRateData';

interface IPuginationOptions {
  currentPage: number;
  PAGE_SIZE: number;
}

export function getCurrentDate() {
  return new Date().toISOString().split('T').at(0)?.replace(/-/g, '');
}

export function getSlicedData(data: IRateData[], options: IPuginationOptions) {
  const { currentPage, PAGE_SIZE } = options;
  const firstPageIndex = (currentPage - 1) * PAGE_SIZE;
  const lastPageIndex = firstPageIndex + PAGE_SIZE;

  return data.slice(firstPageIndex, lastPageIndex);
}
