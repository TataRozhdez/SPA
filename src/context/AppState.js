import React, { useReducer } from 'react'
import { appReducer } from './appReducer'
import AppContext from './appContext'
import { SET_LANGUAGE } from './types'

const AppState = (props) => {
  const initialState = {
    locale: 'uk',
    errorMsg: null,
  }

  const [state, dispatch] = useReducer(appReducer, initialState)

  const setChangeLocal = (lang) => {
    dispatch({
      type: SET_LANGUAGE,
      payload: lang,
    })
  }

  return (
    <AppContext.Provider
      value={{
        locale: state.locale,
        errorMsg: state.errorMsg,

        setChangeLocal,
      }}
    >
      {props.children}
    </AppContext.Provider>
  )
}

export default AppState
