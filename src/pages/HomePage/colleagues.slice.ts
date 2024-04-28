/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Colleague {
  name?: string | null;
  email?: string | null;
  phoneNumber?: string | null;
  office?: string | null;
  manager?: string | null;
  orgUnit?: string | null;
  mainText?: string | null;
  gitHub?: string | null;
  twitter?: string | null;
  stackOverflow?: string | null;
  linkedIn?: string | null;
  imagePortraitUrl?: string | null;
  imageWallOfLeetUrl?: string | null;
  highlighted?: true | false;
  published?: true | false;
  primaryRole?: string | null;
  secondaryRole?: string | null;
  area?: string | null;
}

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
