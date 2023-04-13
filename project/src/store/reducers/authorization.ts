import { createSlice } from '@reduxjs/toolkit';
import { checkAuthorization, loadUserData } from '../action';
import { authorizationState } from '@customTypes/store';

const authorizationSlice = createSlice({
  name: 'authorization',
  initialState: {
    authorized: false,
    userData: undefined,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(checkAuthorization, (state: authorizationState , action) => {
        state.authorized = action.payload;
      })
      .addCase(loadUserData, (state: authorizationState , action) => {
        state.userData = action.payload;
      });
  },
});

export default authorizationSlice.reducer;
