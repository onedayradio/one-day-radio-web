import React from 'react'
import { FaAngleLeft } from 'react-icons/fa'

import { arrowsStyles } from './styles'

interface GenresCarouselPreviousArrowProps {
  onClick?: () => void
}

export const GenresCarouselPreviousArrow = ({ onClick }: GenresCarouselPreviousArrowProps) => {
  return <FaAngleLeft style={arrowsStyles} onClick={onClick} size={40} />
}
