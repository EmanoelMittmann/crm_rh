import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Badge } from '@stardust-ds/react'

import { IconThreePoints } from '../../../atoms/Icons/IconThreePoints'
import Modal from '../../../molecules/Modal'
import {
  AlignItens,
  ContainerShelf,
  ContainerShelfColumn,
  IMG
} from '../style'

export const Shelf = ({ data }: any) => {
  const navigate = useNavigate()
  const [modal, setModal] = useState<boolean>(false)

  return (
    <ContainerShelf>
      <ContainerShelfColumn width='24%'>
        <AlignItens>
          <IMG src={data.avatar} />
          {data.name}
        </AlignItens>
      </ContainerShelfColumn>
      <ContainerShelfColumn width='15%'>
        {data.company}
      </ContainerShelfColumn>
      <ContainerShelfColumn width='20%'>
        {data.email}
      </ContainerShelfColumn>
      <ContainerShelfColumn width='12%'>
        {data.phone}
      </ContainerShelfColumn>
      <ContainerShelfColumn width='10%'>
        {data.address}
      </ContainerShelfColumn>
      <ContainerShelfColumn width='19%' justify='center' gap='3em'>
        <div className='status'>
          <Badge
            label={data.status ? 'Ativo' : 'Inativo'}
            variant='flat'
            bgColor={data.status ? '#1ECB4F26' : '#FF354126'}
            typographyProps={{
              textAlign: 'center',
              color: data.status ? '#1ECB4F' : '#FF3541'
            }}
          />
        </div>
        <IconThreePoints onClick={() => setModal((prev) => !prev)} />
        {modal && (
          <Modal
            optionOne='Editar'
            eventOne={() => navigate('/home')}
            optionTwo='Excluir '
          />
        )}
      </ContainerShelfColumn>
    </ContainerShelf>
  )
}
