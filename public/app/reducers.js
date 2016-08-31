import {combineReducers} from 'redux';
import mediaPageReducer from './containers/MediaPage/reducer'

export default function createReducer() {
  return combineReducers({
    mediaPage: mediaPageReducer,
  });
}