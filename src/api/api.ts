import { getCurrentDate } from '../utils/helpers';

const currentDate = getCurrentDate();

export async function fetchRate(date = currentDate) {
  const API_URL = `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=${date}&json`;

  const resp = await fetch(API_URL);

  return resp.json();
}
