import { createSlice } from '@reduxjs/toolkit';
import { changeLoadingStatus } from '../action';
import { loadingState } from '@customTypes/store';

const loadingSlice = createSlice({
  name: 'loading',
  initialState: {
    isLoaded: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(changeLoadingStatus, (state: loadingState, action) => {
        state.isLoaded = action.payload;
      });
  },
});

export default loadingSlice.reducer;
