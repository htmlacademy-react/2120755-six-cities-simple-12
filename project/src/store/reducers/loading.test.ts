import { loadingSlice } from './loading';
import { fetchOffers, fetchOfferData } from '../api-actions';

describe('Reducer: loading', () => {
  const state = {isLoaded: false, isOfferLoaded: false};
  it('without additional parameters should return initial state', () => {
    expect(loadingSlice.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({isLoaded: false, isOfferLoaded: false});
  });
  it('should update isLoaded then load completed', () => {
    expect(loadingSlice.reducer(state, {type: fetchOffers.fulfilled.type, payload: true}))
      .toEqual({isLoaded: true, isOfferLoaded: false});
  });
  it('should update isOfferLoaded then load completed', () => {
    expect(loadingSlice.reducer(state, {type: fetchOfferData.fulfilled.type, payload: true}))
      .toEqual({isLoaded: false, isOfferLoaded: true});
  });
  it('should update isOfferLoaded then load in progress', () => {
    expect(loadingSlice.reducer(state, {type: fetchOfferData.rejected.type, payload: true}))
      .toEqual({isLoaded: false, isOfferLoaded: false});
  });
});
