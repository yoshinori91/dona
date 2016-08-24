import {MEDIA_POST} from '../constants'

const initialState = {data: []}

export default function media(state = initialState, action) {
  switch (action.type) {
    case MEDIA_POST:
      return state
    default:
      console.log(state)
      return state
  }
}