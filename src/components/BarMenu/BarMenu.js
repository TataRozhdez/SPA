import React from 'react'
import Slider from 'react-slick'
import slide21 from '../../resources/img/slide2-1.png'
import slide22 from '../../resources/img/slide2-2.png'
import slide23 from '../../resources/img/slide2-3.png'
import slide24 from '../../resources/img/slide2-4.png'
import slide25 from '../../resources/img/slide2-5.png'
import slide26 from '../../resources/img/slide2-6.png'
import slide27 from '../../resources/img/slide2-7.png'
import './BarMenu.css'

export const BarMenu = () => {
  const screenWidth = window.screen.width

  let slidesToShow = 3

  if (screenWidth < 779) slidesToShow = 2
  if (screenWidth < 625) slidesToShow = 1

  const settings2 = {
    lazyLoad: true,
    className: 'barMenu-slider',
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
  }

  return (
    <div className='barMenu'>
      <div className='barMenu-filter' />
      <Slider {...settings2}>
        <img src={slide21} alt='Coctail 1' />
        <img src={slide22} alt='Coctail 2' />
        <img src={slide23} alt='Coctail 3' />
        <img src={slide24} alt='Coctail 4' />
        <img src={slide25} alt='Coctail 5' />
        <img src={slide26} alt='Coctail 6' />
        <img src={slide27} alt='Coctail 7' />
      </Slider>
      <a
        className='barMenu-menuOpen'
        href='http://zebralounge.com.ua/menu'
        target='_blank'
        rel='noopener noreferrer'
      >
        переглянути меню
      </a>
    </div>
  )
}
