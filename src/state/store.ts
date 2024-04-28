import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import rootSaga from './rootSaga';
import rootReducer from './rootReducer';

export type ApplicationState = {
  // TODO:: will hold state for each chunk/feature in case there is one
};

function configureAppStore() {
  const reduxSagaMonitorOptions = {};
  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);

  // connect react router to redux

  const middlewares = [
    // sagaMiddleware: Makes redux saga work
    sagaMiddleware,
  ];

  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
        thunk: false,
      }).concat(middlewares),
  });

  sagaMiddleware.run(rootSaga);
  return store;
}

const store = configureAppStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useTypedDispatch: () => AppDispatch = useDispatch;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export { configureAppStore };

export default store;
