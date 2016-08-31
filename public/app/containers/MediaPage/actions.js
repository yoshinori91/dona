import {FETCH_MEDIA_DATA} from './constans'
// Action creator
function fetchMediaData() {
  console.log('1 fetchMediaData')
  // return Action Object
  return {
    type: FETCH_MEDIA_DATA,
    text: 'jtb',
  }
}

export default fetchMediaData