import React, { useReducer } from 'react'
import { useCookies } from 'react-cookie'
import i18n from '../i18n'
import { appReducer } from './appReducer'
import AppContext from './appContext'
import { SET_LANGUAGE } from './types'

const AppState = (props) => {
  const [cookies, setCookie, removeCookie] = useCookies(['zlang'])

  const initialState = {
    lang: 'uk',
    errorMsg: null,
  }

  const [state, dispatch] = useReducer(appReducer, initialState)

  const changeLang = (lg) => {
    if (Object.keys(cookies).includes('zlang') && cookies.zlang !== lg) {
      removeCookie('zlang')
    }
    setCookie('zlang', lg)

    i18n.changeLanguage(lg)

    dispatch({
      type: SET_LANGUAGE,
      payload: lg,
    })
  }

  return (
    <AppContext.Provider
      value={{
        lang: state.lang,
        errorMsg: state.errorMsg,

        changeLang,
      }}
    >
      {props.children}
    </AppContext.Provider>
  )
}

export default AppState
