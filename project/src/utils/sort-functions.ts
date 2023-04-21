import { citiesData } from '@utils/data';
import { Offer, ReviewObject } from '@customTypes/index';

enum citiesCount {
  Start = 0,
  End = 5,
}

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

export function getRandomCity() {
  return Object.keys(citiesData)[Math.round(Math.random() * (citiesCount.End - citiesCount.Start) + citiesCount.Start)];
}
