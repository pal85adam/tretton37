/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { sortBy } from 'lodash';
import { Colleague, ColleagueFilters } from '../../types/common';

interface ColleaguesState {
  colleagues: [] | Colleague[];
  colleaguesFiltered: [] | Colleague[];
  filters: ColleagueFilters;
  loading: false | true;
}

const initialState = {
  colleagues: [],
  colleaguesFiltered: [],
  filters: { name: '', office: '' },
  loading: false,
} as ColleaguesState;

const ColleaguesSlice = createSlice({
  name: 'colleagues',
  initialState,
  reducers: {
    setColleagues: (state, action: PayloadAction<Colleague[]>) => {
      state.colleagues = action.payload;
      state.loading = false;
      state.colleaguesFiltered = state.colleagues.filter(
        (colleague) =>
          (!state.filters.name
            ? true
            : colleague.name
                ?.toLowerCase()
                .includes(state.filters.name.toLowerCase())) &&
          (!state.filters.office
            ? true
            : colleague.office
                ?.toLowerCase()
                .includes(state.filters.office.toLowerCase())),
      );
    },
    setLoadingTrue: (state) => {
      state.loading = true;
    },
    setLoadingFalse: (state) => {
      state.loading = false;
    },
    setFilters: (
      state,
      action: PayloadAction<{
        filterKey: keyof ColleagueFilters;
        filterValue: string;
      }>,
    ) => {
      const { filterKey, filterValue } = action.payload;
      state.filters[filterKey] = filterValue;
      // eslint-disable-next-line prefer-destructuring
      const filters = state.filters;
      filters[filterKey] = filterValue;
      state.colleaguesFiltered = state.colleagues.filter(
        (colleague) =>
          (!filters.name
            ? true
            : colleague.name
                ?.toLowerCase()
                .includes(filters.name.toLowerCase())) &&
          (!filters.office
            ? true
            : colleague.office
                ?.toLowerCase()
                .includes(filters.office.toLowerCase())),
      );
    },
    sortColleaguesBy: (
      state,
      action: PayloadAction<keyof ColleagueFilters>,
    ) => {
      const sortKey = action.payload;
      state.colleaguesFiltered = sortBy(state.colleaguesFiltered, sortKey);
    },
  },
});

export const {
  setColleagues,
  setLoadingTrue,
  setLoadingFalse,
  setFilters,
  sortColleaguesBy,
} = ColleaguesSlice.actions;
export const ColleaguesReducer = ColleaguesSlice.reducer;
