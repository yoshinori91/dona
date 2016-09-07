import {takeEvery, delay} from 'redux-saga'
import {put, call} from "redux-saga/effects";

export function* incrementAsync() {
  yield call(delay, 1000);
  yield put(increment());
}

export default function* rootSaga() {
  yield* takeEvery('SAGA', incrementAsync);
}

function increment() {
  return {
    type: 'INCREMENT',
    text: 'tto'
  }
}