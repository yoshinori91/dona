// Action creator
export function fetchMediaData() {
  console.log('11111111 fetchMediaData')
  // return Action Object
  return {
    type: 'FETCH_MEDIA_DATA',
    text: 'jtb',
  }
}
export function incre() {
  return {
    type: 'incre'
  }
}

export function sagaData() {
  console.log('sagaData')
  return {
    type: 'SAGA',
  }
}


