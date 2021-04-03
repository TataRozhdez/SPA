import React, { useContext, useState } from 'react'

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

export const App = () => {
  const appContext = useContext(AppContext)
  const { locale, setChangeLocal } = appContext

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className='app'>
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
            className={locale === 'uk' ? 'active' : 'notactive'}
            onClick={() => setChangeLocal('uk')}
          >
            Uk
          </button>
          <button
            className={locale === 'en' ? 'active' : 'notactive'}
            onClick={() => setChangeLocal('en')}
          >
            En
          </button>
        </div>
        <img className='land-logo' src={logoImg} alt='Zebra lounge' />

        <img className='land-leaf-decor-right' src={rightLeafImg} alt='' />
        <img className='land-leaf-decor-left' src={leftLeafImg} alt='' />
      </div>

      <About />
      <BarMenu />
      <Contact />
      <img className='footer' src={footImg} alt='Hero leaf' />
    </div>
  )
}
