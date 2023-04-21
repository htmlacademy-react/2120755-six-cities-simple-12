import { OffersSlice, changeSortType, changeCity, choseRandomCity } from './offers';
import { fetchOffers } from '../api-actions';
import { priceHighToLow, priceLowToHigh, topRaiting, idLowToHigh } from '@utils/sort-functions';
import { mockOffersList } from '../../mocks/offers';

const state = {
  city: 'Paris',
  sortType: 'Popular',
  offers: [],
};

describe('Reducer: offers', () => {
  it('without additional parameters should return initial state', () => {
    expect(OffersSlice.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({
        city: 'Paris',
        sortType: 'Popular',
        offers: [],
      });
  });
  it('should update sortType state to "Price: high to low" and sort offers with "priceHighToLow" sort function', () => {
    expect(OffersSlice.reducer(state, {type: changeSortType, payload: 'Price: high to low'}))
      .toEqual({
        city: 'Paris',
        sortType: 'Price: high to low',
        offers: state.offers.sort(priceHighToLow),
      });
  });
  it('should update sortType state to "Price: high to low" and sort offers with "priceLowToHigh" sort function', () => {
    expect(OffersSlice.reducer(state, {type: changeSortType, payload: 'Price: low to high'}))
      .toEqual({
        city: 'Paris',
        sortType: 'Price: low to high',
        offers: state.offers.sort(priceLowToHigh),
      });
  });
  it('should update sortType state to "Top rated first" and sort offers with "Top rated first" sort function', () => {
    expect(OffersSlice.reducer(state, {type: changeSortType, payload: 'Top rated first'}))
      .toEqual({
        city: 'Paris',
        sortType: 'Top rated first',
        offers: state.offers.sort(topRaiting),
      });
  });
  it('should update sortType state to "Popular" and sort offers with "idLowToHigh" sort function', () => {
    expect(OffersSlice.reducer(state, {type: changeSortType, payload: 'Popular'}))
      .toEqual({
        city: 'Paris',
        sortType: 'Popular',
        offers: state.offers.sort(idLowToHigh),
      });
  });
  it('should update city state to chosenCity from action payload', () => {
    expect(OffersSlice.reducer(state, {type: changeCity, payload: 'ChosenCity'}))
      .toEqual({
        city: 'ChosenCity',
        sortType: 'Popular',
        offers: [],
      });
  });
  it('should update city state to random city ussing "getRandomCity" sorting function', () => {
    expect(OffersSlice.reducer(state, {type: choseRandomCity}))
      .toEqual({
        city: state.city,
        sortType: 'Popular',
        offers: [],
      });
  });
  it('should update offers state loaded offers if response recived from fetchOffers', () => {
    expect(OffersSlice.reducer(state, {type: fetchOffers.fulfilled.type, payload: mockOffersList}))
      .toEqual({
        city: 'Paris',
        sortType: 'Popular',
        offers: mockOffersList,
      });
  });
});
