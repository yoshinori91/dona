import * as types from '../constants/actionTypes'

// action creator
export function increment() {
  return {type: types.INCREMENT}
}

export function decrement() {
  return {type: types.DECREMENT}
}
