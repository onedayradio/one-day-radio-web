import React from 'react'
import Slider from 'react-slick'

import { GenresCarouselNextArrow } from './GenresCarouselNextArrow'
import { GenresCarouselPreviousArrow } from './GenresCarouselPreviousArrow'
import { Children } from '../../../shared'

import './styles.css'

const carouselOptions = {
  dots: false,
  infinite: true,
  adaptiveHeight: false,
  draggable: false,
  swipe: false,
  speed: 500,
  autoplay: false,
  slidesToShow: 3,
  slidesToScroll: 3,
  nextArrow: <GenresCarouselNextArrow />,
  prevArrow: <GenresCarouselPreviousArrow />,
}

interface GenresCarouselProps {
  children: Children
}

export const GenresCarousel = ({ children }: GenresCarouselProps) => {
  return (
    <Slider {...carouselOptions} className="genres-slider">
      {children}
    </Slider>
  )
}
