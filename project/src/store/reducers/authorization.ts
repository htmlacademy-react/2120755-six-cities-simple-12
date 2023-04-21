import { createSlice, createDraftSafeSelector } from '@reduxjs/toolkit';
import { checkAuthAction, login, logout } from '../api-actions';
import { AuthorizationState } from '@customTypes/store';
import { InitialState } from '@customTypes/store';
import { UserData } from '@customTypes/index';

export const authorizationSlice = createSlice({
  name: 'authorization',
  initialState: {
    authorized: false,
    userData: undefined,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(checkAuthAction.fulfilled, (state: AuthorizationState, action) => {
        state.userData = action.payload;
        state.authorized = true;
      })
      .addCase(checkAuthAction.rejected, (state: AuthorizationState) => {
        state.authorized = false;
      })
      .addCase(login.fulfilled, (state: AuthorizationState, action) => {
        state.userData = action.payload;
        state.authorized = true;
      })
      .addCase(login.rejected, (state: AuthorizationState) => {
        state.authorized = false;
      })
      .addCase(logout.fulfilled, (state: AuthorizationState) => {
        state.authorized = false;
        state.userData = undefined;
      });
  },
});

const selectAuthorization = (state: InitialState) => state.authorization.authorized;
const selectUserData = (state: InitialState ) => state.authorization.userData;


const authorizationSelector = createDraftSafeSelector(
  selectAuthorization,
  (authorized: boolean) => authorized
);

const userDataSelector = createDraftSafeSelector(
  selectUserData,
  (userData: UserData | undefined) => userData
);

export {authorizationSelector, userDataSelector};
