// /src/saga.ts
import { all } from 'redux-saga/effects';
import { colleaguesSagas } from '../pages/HomePage/colleagues.sagas';

function* rootSaga() {
  yield all([...colleaguesSagas]);
}

export default rootSaga;
