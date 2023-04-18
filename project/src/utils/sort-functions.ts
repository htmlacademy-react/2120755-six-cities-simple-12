import { CityData, Offer, ReviewObject } from '@customTypes/index';

export function priceHighToLow(a: Offer, b: Offer) {
  return Math.sign(b.price - a.price);
}

export function priceLowToHigh(a: Offer, b: Offer) {
  return Math.sign(a.price - b.price);
}

export function topRaiting(a: Offer, b: Offer) {
  return Math.sign(b.rating - a.rating);
}

export function idLowToHigh(a: Offer, b: Offer) {
  return Math.sign(a.id - b.id);
}

export function dateNewToOld(a: ReviewObject, b: ReviewObject) {
  const dateA = new Date(a.date).getTime();
  const dateB = new Date(b.date).getTime();
  return Math.sign(dateB - dateA);
}

function copyArray(source: string[] , array: string[] | undefined) {
  let index = -1;
  const length = source.length;

  array || (array = new Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

export function shuffleCities(cityData: CityData) {
  const array = Object.keys(cityData);
  const length = array === null ? 0 : array.length;
  if (!length) {
    return [];
  }
  let index = -1;
  const lastIndex = length - 1;
  const result = copyArray(array, array);
  while (++index < length) {
    const rand = index + Math.floor(Math.random() * (lastIndex - index + 1));
    const value = result[rand];
    result[rand] = result[index];
    result[index] = value;
  }
  return result;
}
