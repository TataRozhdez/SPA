import React from 'react'
import Slider from 'react-slick'
import slide11 from '../../resources/img/slide1-1.jpg'
import slide12 from '../../resources/img/slide1-2.jpg'
import slide13 from '../../resources/img/slide1-3.jpg'
import './About.css'

export const About = ({ t }) => {
  const settings1 = {
    dots: true,
    infinite: true,
    fade: true,
    speed: 3000,
    autoplay: true,
    pauseOnHover: false,
    arrows: false,
    adaptiveHeight: true,
    className: 'slider1',
  }

  return (
    <div className='about'>
      <Slider {...settings1}>
        <img src={slide11} alt='Zebra space' />
        <img src={slide12} alt='Hookah' />
        <img src={slide13} alt='Tea ceremony' />
      </Slider>
      <div className='about-txt'>
        <h1>{t('about.header')}</h1>
        <p>&nbsp;&nbsp;{t('about.content1')}</p>
        <p>&nbsp;&nbsp;{t('about.content2')}</p>
      </div>
    </div>
  )
}
