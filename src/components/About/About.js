import React from 'react'
import Slider from 'react-slick'
import slide11 from '../../resources/img/slide1-1.jpg'
import slide12 from '../../resources/img/slide1-2.jpg'
import slide13 from '../../resources/img/slide1-3.jpg'
import './About.css'

export const About = () => {
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
        <h1>ПРО НАС</h1>
        <p>
          &nbsp;&nbsp; Zebra Lounge - це унікальний простір, який поєднує в собі
          дивовжну пристрасть кальяну, терпкість справжнього китайського чаю та
          різнобарв’я екзотичних коктейлів. У нас каьляни самі “димні”,
          настольні ігри - найцікавішi, коктейлі - найалкогольніші. Все це
          поєднанно з ритмічною музикою та дружньою атмосферою. Zebra - це твій
          пристанок на відпочинок.
        </p>
        <p>
          &nbsp;&nbsp; Наш заклад знаходиться в самому центрі кам’яних джунглів
          - на Майдані Незаложнесті. Ми ради тебе вітати кожного дня з півдня до
          півночі.
        </p>
      </div>
    </div>
  )
}
