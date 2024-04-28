// /src/reducer.ts
import { combineReducers } from '@reduxjs/toolkit';
import { ColleaguesReducer } from '../pages/HomePage/colleagues.slice';

const reducers = {
  colleagues: ColleaguesReducer,
};

const rootReducer = combineReducers({
  ...reducers,
});

export default rootReducer;
