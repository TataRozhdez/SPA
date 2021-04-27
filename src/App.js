import React, { useContext, useState, useEffect } from 'react'
import { withNamespaces } from 'react-i18next'
import { useCookies } from 'react-cookie'

import AppContext from './context/appContext'
import { About } from './components/About/About'
import { BarMenu } from './components/BarMenu/BarMenu'
import { Contact } from './components/Contact/Contact'

import logoImg from './resources/img/logo.svg'
import mapImg from './resources/img/map.svg'
import instaImg from './resources/img/insta.svg'
import phoneImg from './resources/img/phone.svg'
import rightLeafImg from './resources/img/right-leaf.png'
import leftLeafImg from './resources/img/left-leaf.png'
import footImg from './resources/img/footer.png'

import './resources/app.css'

function App({ t }) {
  const [cookies] = useCookies(['zlang'])

  const appContext = useContext(AppContext)
  const { lang, changeLang } = appContext

  const [menuOpen, setMenuOpen] = useState(false)

  const mouseMoveRight = (e) => {
    const pageX = e.clientX - window.innerWidth / 2,
      pageY = e.clientY - window.innerHeight / 2
    e.target.style.transform =
      'translateX(' + pageX / 25 + '%) translateY(-' + pageY / 25 + '%)'
  }

  const mouseMoveLeft = (e) => {
    const pageX = e.clientX - window.innerWidth / 2,
      pageY = e.clientY - window.innerHeight / 2
    e.target.style.transform =
      'translateX(' + pageX / 50 + '%) translateY(-' + pageY / 50 + '%)'
  }

  useEffect(() => {
    if (Object.keys(cookies).includes('zlang') && cookies.zlang !== lang) {
      changeLang(cookies.zlang)
    }
    // eslint-disable-next-line
  }, [])

  return (
    <div className='app fade-in-image'>
      <div className='menu-btn-group'>
        <button
          className='btn-menu-action'
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className='spot' />
          <span className='spot' />
          <span className='spot' />
        </button>
        <div className='links-btn-menu'>
          <a
            className='links-btn-menu_link'
            href='https://g.page/zebraloungekiev'
            data-tooltip='Google maps'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src={mapImg} alt='Google maps' />
          </a>
          <a
            className='links-btn-menu_link'
            href='https://www.instagram.com/zebraloungekiev/'
            data-tooltip='Instagram'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src={instaImg} alt='Instagam' />
          </a>
          <a
            href='tel:+38050701344'
            className='links-btn-menu_link'
            data-tooltip='Call to ZebaPhone'
          >
            <img src={phoneImg} alt='Call to Zebra' />
          </a>
        </div>
      </div>

      <div className='land'>
        <div className='btn-group-language'>
          <button
            className={lang === 'uk' ? 'active' : 'notactive'}
            onClick={() => changeLang('uk')}
          >
            Uk
          </button>
          <button
            className={lang === 'en' ? 'active' : 'notactive'}
            onClick={() => changeLang('en')}
          >
            En
          </button>
        </div>
        <img className='land-logo' src={logoImg} alt='Zebra lounge' />

        <img
          className='land-leaf-decor-right'
          onMouseMove={mouseMoveRight}
          src={rightLeafImg}
          alt=''
        />
        <img
          className='land-leaf-decor-left'
          onMouseMove={mouseMoveLeft}
          src={leftLeafImg}
          alt=''
        />
      </div>

      <About t={t} />
      <BarMenu t={t} />
      <Contact t={t} />
      <img className='footer' src={footImg} alt='Hero leaf' />
    </div>
  )
}

export default withNamespaces()(App)
