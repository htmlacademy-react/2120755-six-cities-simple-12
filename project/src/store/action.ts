import {createAction} from '@reduxjs/toolkit';
import { Offer } from 'mocks/offers';

export const Action = {
  CHANGE_CITY: 'CHANGE_CITY',
  FILL_OFFERS_LIST: 'FILL_OFFERS_LIST',
  MARK_OFFER_ON_CARD: 'MARK_OFFER_ON_CARD'
};

export const changeCity = createAction(Action.CHANGE_CITY, (value: string) => ({
  payload: value,
}));
export const fillOfferList = createAction(Action.FILL_OFFERS_LIST);
export const markOfferOnCard = createAction(Action.MARK_OFFER_ON_CARD, (value: Offer) => ({
  payload: value,
}));

