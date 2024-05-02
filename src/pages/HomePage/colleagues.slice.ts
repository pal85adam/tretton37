/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Colleague } from '../../types/common';

interface ColleaguesState {
  colleagues: [] | Colleague[];
  loading: false | true;
}

const initialState = {
  colleagues: [],
  loading: false,
} as ColleaguesState;

const ColleaguesSlice = createSlice({
  name: 'colleagues',
  initialState,
  reducers: {
    setColleagues: (state, action: PayloadAction<Colleague[]>) => {
      state.colleagues = action.payload;
      state.loading = false;
    },
    setLoadingTrue: (state) => {
      state.loading = true;
    },
    setLoadingFalse: (state) => {
      state.loading = false;
    },
  },
});

export const { setColleagues, setLoadingTrue, setLoadingFalse } =
  ColleaguesSlice.actions;
export const ColleaguesReducer = ColleaguesSlice.reducer;
