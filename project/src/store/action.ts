import {createAction} from '@reduxjs/toolkit';

export const Action = {
  CHANGE_CITY: 'CHANGE_CITY',
  FILL_OFFERS_LIST: 'FILL_OFFERS_LIST',
};

export const changeCity = createAction(Action.CHANGE_CITY, (value: string) => ({
  payload: value,
  currentTime: new Date().getTime(),
}));
export const fillOfferList = createAction(Action.FILL_OFFERS_LIST);


// export const addSomeValueAction = window.RTK.createAction(Action.ADD_SOME_VALUE, (value) => {
//   return {
//     payload: value,
//     currentTime: new Date().getTime(),
//   };
// }););
