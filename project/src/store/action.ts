import { createAction } from '@reduxjs/toolkit';
import { Offer, ReviewObject } from '@customTypes/index';


export const Action = {
  HANDLE_LOADING: 'HANDLE_LOADING',
  CHECK_AUTHORIZATION: 'CHECK_AUTHORIZATION',
  LOAD_OFFERS: 'LOAD_OFFERS',
  CHANGE_CITY: 'CHANGE_CITY',
  MARK_OFFER_ON_CARD: 'MARK_OFFER_ON_CARD',
  FIND_OFFER_BY_ID: 'FIND_OFFER_BY_ID',
  FIND_OFFER_NEARBY: 'FIND_OFFER_NEARBY',
  FIND_OFFER_REVIEW: 'FIND_OFFER_REVIEW',
  CHANGE_SORT_TYPE: 'CHANGE_SORT_TYPE'
};

// export const login = createAction(Action.CHECK_AUTHORIZATION, (value: boolean) => ({
//   payload: value,
// }));

export const handleLoadingStatus = createAction(Action.HANDLE_LOADING, (value: boolean) => ({
  payload: value,
}));

export const loadOffers = createAction(Action.LOAD_OFFERS, (value: Offer[]) => ({
  payload: value,
}));

export const changeCity = createAction(Action.CHANGE_CITY, (value: string) => ({
  payload: value,
}));

export const markOfferOnCard = createAction(Action.MARK_OFFER_ON_CARD, (value: Offer) => ({
  payload: value,
}));

export const findOfferById = createAction(Action.FIND_OFFER_BY_ID, (value: Offer) => ({
  payload: value,
}));

export const findOfferNearby = createAction(Action.FIND_OFFER_NEARBY, (value: Offer[]) => ({
  payload: value,
}));

export const findOfferReviews = createAction(Action.FIND_OFFER_REVIEW, (value: ReviewObject[]) => ({
  payload: value,
}));

export const changeSortType = createAction(Action.CHANGE_SORT_TYPE, (value: string | null) => ({
  payload: value,
}));
