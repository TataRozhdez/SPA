import { SET_LANGUAGE } from './types'

export const appReducer = (state, action) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return {
        ...state,
        lang: action.payload,
      }
    default:
      return state
  }
}
