import React, { useState } from 'react'

import { IconLeftArrow } from '../../atoms/Icons/IconLeftArrow'
import { IconRightArrow } from '../../atoms/Icons/IconRightArrow'
import { Paginate } from '../Paginate'
import { Container, Numbers, Pagination } from './style'

//  TODO: REVER COMPONENTE
export const Footer = () => {
  return (
    <>
      <Container>
        <Pagination>{/* <Paginate /> */}</Pagination>
      </Container>
    </>
  )
}
