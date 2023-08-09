import React, { useContext, useRef } from 'react'

import { Input, Select } from '@stardust-ds/react'
import { List } from 'contexts'

import { Button, IconGlass } from 'components/atoms'
import {
  IHandleModalPropsNew,
  Modal
} from 'components/molecules/Modais'

import { Main } from '../style'
import { Container } from '../style'
import { Option } from 'types'

export const TypeProject = () => {
  const modalRef = useRef<IHandleModalPropsNew>(null)
  const {
    meta,
    filterOptions,
    handleStatus,
    handleSearch,
    handleCreateType
  } = useContext(List.Types.Context)

  const { search } = meta

  return (
    <Main>
      <Container gap='1em'>
        <Input
          value={search}
          iconLeft={<IconGlass />}
          placeholder='Buscar...'
          width={230}
          height={42}
          onChange={(e) => handleSearch(e.target.value)}
          style={{
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            fontSize: '14px',
            fontWeight: '500',
            fontFamily: 'Poppins, sans-serif'
          }}
        />
        <Select
          width={230}
          searchable
          options={filterOptions.status}
          placeholder='Status'
          onSelect={(option: Option | null) =>
            option && handleStatus(Number(option.value))
          }
          onClear={() => handleStatus(null)}
        />
      </Container>
      <Button.New onClick={() => modalRef.current?.open(true)} />
      <Modal.New
        placeholder='Tipo de projeto'
        text='Cadastro de tipo de projeto'
        EventOne={handleCreateType}
        ref={modalRef}
      />
    </Main>
  )
}
