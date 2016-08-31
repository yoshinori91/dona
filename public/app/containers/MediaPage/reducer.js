import {fromJS} from 'immutable'

const initialState = fromJS({
  something: '',
});

function mediaPageReducer(state = initialState, action) {
  console.log('2 mediaPageReducer')
  switch (action.type) {
    case 'FETCH_MEDIA_DATA':
      console.log(state)
      return state.set('something', 'somethingA')
    default:
      return state
  }
}

export default mediaPageReducer;