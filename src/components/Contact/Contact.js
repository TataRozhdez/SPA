import React from 'react'
import phoneImg from '../../resources/img/phone.svg'
import mapImg from '../../resources/img/map.svg'
import facebookImg from '../../resources/img/facebook.svg'
import clockImg from '../../resources/img/clock.svg'
import instaImg from '../../resources/img/insta.svg'
import './Contact.css'

export const Contact = ({ t }) => {
  const iframe =
    '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40659.76249761815!2d30.484912756357538!3d50.436720381373526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce454e150021%3A0x72359aa69acc2603!2sZebra%20Lounge!5e0!3m2!1sen!2sua!4v1615839922748!5m2!1sen!2sua" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'

  return (
    <div className='contact'>
      <div className='contact-txt'>
        <h1>{t('contact')}</h1>
        <div className='text-right'>
          <p>
            <img
              className='contact-txt-icon'
              src={clockImg}
              alt='Working time'
            />
            <span>{t('shedule')}</span>
          </p>
          <a
            href='https://www.instagram.com/zebraloungekiev/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img className='contact-txt-icon' src={mapImg} alt='Google maps' />
            {t('address')}
          </a>
          <a href='tel:+38050701344'>
            <img
              className='contact-txt-icon'
              src={phoneImg}
              alt='Zebra phone'
            />
            +38 (050) 701 0344
          </a>
          <a
            href='https://www.instagram.com/zebraloungekiev/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img className='contact-txt-icon' src={instaImg} alt='Instagam' />
            @zebraloungekiev
          </a>
          <a
            href='https://www.facebook.com/zebraloungekiev/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              className='contact-txt-icon'
              src={facebookImg}
              alt='Facebook'
            />
            Zebra Lounge
          </a>
        </div>
      </div>
      <div
        className='google-maps'
        dangerouslySetInnerHTML={{ __html: iframe }}
      />
    </div>
  )
}
