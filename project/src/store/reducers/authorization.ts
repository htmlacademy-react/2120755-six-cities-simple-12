import { createSlice, createDraftSafeSelector } from '@reduxjs/toolkit';
import { checkAuthAction, login, logout } from '../api-actions';
import { AuthorizationState } from '@customTypes/store';
import { InitialState } from '@customTypes/store';
import { UserData } from '@customTypes/index';

const initialAuthorizationStateState: AuthorizationState = {
  authorized: false,
  userData: undefined,
};

export const authorizationSlice = createSlice({
  name: 'authorization',
  initialState: initialAuthorizationStateState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(checkAuthAction.fulfilled, (state, action) => {
        state.userData = action.payload;
        state.authorized = true;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorized = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.userData = action.payload;
        state.authorized = true;
      })
      .addCase(login.rejected, (state) => {
        state.authorized = false;
      })
      .addCase(logout.fulfilled, (state) => {
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
