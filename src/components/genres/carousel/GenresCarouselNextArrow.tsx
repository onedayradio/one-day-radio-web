import React from 'react'
import { FaAngleRight } from 'react-icons/fa'

import { arrowsStyles } from './styles'

interface GenresCarouselNextArrowProps {
  onClick?: () => void
}

export const GenresCarouselNextArrow = ({ onClick }: GenresCarouselNextArrowProps) => {
  return <FaAngleRight style={{ ...arrowsStyles, right: 0 }} onClick={onClick} size={40} />
}
