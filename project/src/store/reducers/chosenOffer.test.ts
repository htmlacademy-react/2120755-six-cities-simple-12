import { chosenOfferSlice, markOfferOnCard, cleanOfferToShowData } from './chosenOffer';
import { fetchOfferData, fetchOffersNearby, fetchOffersReviews, postReview } from '../api-actions';
import { mockOfferToShow, mockOffersNearby, mockReviewList } from '../../mocks/offer-to-show-data';


const state = {
  offerToShow: undefined,
  offersNearby: undefined,
  offerReviews: undefined,
  hoveredOffer: undefined,
};

describe('Reducer: chosenOffer', () => {
  it('without additional parameters should return initial state', () => {
    expect(chosenOfferSlice.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({
        offerToShow: undefined,
        offersNearby: undefined,
        offerReviews: undefined,
        hoveredOffer: undefined,
      });
  });
  it('should update hoveredOffer state to chosenOffer', () => {
    expect(chosenOfferSlice.reducer(state, {type: markOfferOnCard, payload: mockOfferToShow}))
      .toEqual({
        offerToShow: undefined,
        offersNearby: undefined,
        offerReviews: undefined,
        hoveredOffer: mockOfferToShow,
      });
  });
  it('should update  offerToShow, offersNearby, offerReviews to underfined', () => {
    expect(chosenOfferSlice.reducer(state, {type: cleanOfferToShowData }))
      .toEqual({
        offerToShow: undefined,
        offersNearby: undefined,
        offerReviews: undefined,
        hoveredOffer: undefined
      });
  });

  it('should update  offerToShow from loaded offer', () => {
    expect(chosenOfferSlice.reducer(state, {type: fetchOfferData.fulfilled.type, payload: mockOfferToShow}))
      .toEqual({
        offerToShow: mockOfferToShow,
        offersNearby: undefined,
        offerReviews: undefined,
        hoveredOffer: undefined
      });
  });
  it('should update  offersToShowNearby from loaded offersNearby', () => {
    expect(chosenOfferSlice.reducer(state, {type: fetchOffersNearby.fulfilled.type, payload: mockOffersNearby}))
      .toEqual({
        offerToShow: undefined,
        offersNearby: mockOffersNearby,
        offerReviews: undefined,
        hoveredOffer: undefined
      });
  });
  it('should update  offerReviews from loaded reviews', () => {
    expect(chosenOfferSlice.reducer(state, {type: fetchOffersReviews.fulfilled.type, payload: mockReviewList}))
      .toEqual({
        offerToShow: undefined,
        offersNearby: undefined,
        offerReviews: mockReviewList,
        hoveredOffer: undefined
      });
  });
  it('should update  offerReviews from updated loaded reviews', () => {
    expect(chosenOfferSlice.reducer(state, {type: postReview.fulfilled.type, payload: mockReviewList}))
      .toEqual({
        offerToShow: undefined,
        offersNearby: undefined,
        offerReviews: mockReviewList,
        hoveredOffer: undefined
      });
  });
});
