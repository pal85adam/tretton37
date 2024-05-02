import { call, put, takeEvery } from 'redux-saga/effects';
import {
  setLoadingTrue,
  setLoadingFalse,
  setColleagues,
} from './colleagues.slice';
import configs from '../../configs';
import { Colleague } from '../../types/common';

export const colleaguesActions = {
  SET_COLLEAGUES: 'SET_COLLEAGUES',
};

export type ColleaguesActionType = typeof colleaguesActions;

export function* fetchColleagues() {
  try {
    yield put(setLoadingTrue());
    const colleaguesResponse: Response = yield call(
      async (): Promise<Response> => {
        const response = await fetch('https://api.1337co.de/v3/employees', {
          method: 'GET',
          headers: { Authorization: configs.apikey },
        });
        return response;
      },
    );

    const colleagues: Colleague[] = yield call([colleaguesResponse, 'json']);

    if (colleagues) yield put(setColleagues(colleagues));
  } catch (error) {
    // console.error(error);
  } finally {
    yield put(setLoadingFalse());
  }
}

export const colleaguesSagas = [
  takeEvery(colleaguesActions.SET_COLLEAGUES, fetchColleagues),
];
