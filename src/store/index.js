
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import { UNSPLASH, unsplashReducer } from '../features/login/slice';
import { watchUnsplash } from '../features/login/saga';

export const rootReducer = combineReducers({
  [UNSPLASH]: unsplashReducer,
});
const sagaMiddleware = createSagaMiddleware();
function* rootSaga() {
  yield all([
    watchUnsplash(),
  ]);
}
const createStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    devTools: true,
    middleware: [sagaMiddleware],
  });
  sagaMiddleware.run(rootSaga);
  return store;
};
export default createStore;
