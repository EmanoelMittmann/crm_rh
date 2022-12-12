import React from 'react'
import { IconLeftArrow } from '../../atoms/Icons/IconLeftArrow'
import { IconRightArrow } from '../../atoms/Icons/IconRightArrow'
import { Container, Pagination } from './style'

export const Footer = () => {
  return (
    <>
        <Container>
            <div className='left'>
                <IconLeftArrow/>
                Anterior
            </div>
            <Pagination>
                <div>
                    1
                    2
                    3
                    ...
                    8
                    9
                    10
                </div>
            </Pagination>
            <div className='right'> 
                Próximo
                <IconRightArrow/>
            </div>
        </Container>
    </>
  )
}
