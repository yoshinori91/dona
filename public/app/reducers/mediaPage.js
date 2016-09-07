function mediaPageReducer(state = {}, action) {
  console.log('2 mediaPageReducer')
  switch (action.type) {
    case 'FETCH_MEDIA_DATA':
      console.log('FETCH_MEDIA_DATA')
      return state.set('something', 'somethingA')
    case 'INCREMENT':
      return {
        hoge: 'from saga'
      }
    default:
      return state
  }
}

export default mediaPageReducer;
