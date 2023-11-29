import { IRateData } from "../types/IRateData";

export function getCurrentDate() {
  return new Date().toISOString().split('T').at(0)?.replace(/-/g, '');
}

export function getCoef() { 
  return localStorage.getItem('coef') ?? []
}

export function setCoef(data:IRateData[]) {
  localStorage.setItem('coef', JSON.stringify(data))
}

