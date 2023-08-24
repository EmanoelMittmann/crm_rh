import { useContext, useRef } from 'react'

import { Input, Select } from '@stardust-ds/react'
import { List } from 'contexts'

import { Button, IconGlass, Inputs } from 'components/atoms'
import { Modal } from 'components/molecules/Modais'
import { IHandleModalPropsNew } from 'components/molecules/Modais'

import { Main } from '../style'
import { Container } from '../style'
import { Option } from 'types'

export const Jobs = () => {
  const modalRef = useRef<IHandleModalPropsNew>(null)
  const {
    meta,
    filterOptions,
    handleSearch,
    handleStatus,
    handleJob
  } = useContext(List.Settings.Context)

  const { search } = meta

  return (
    <Main>
      <Container gap='1em'>
        <Inputs.Default
          value={search}
          iconLeft={<IconGlass />}
          placeholder='Buscar...'
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
            option && handleStatus(Number(option?.value))
          }
          onClear={() => handleStatus(null)}
        />
      </Container>
      <Button.New onClick={() => modalRef.current?.open(true)} />
      <Modal.New
        EventOne={handleJob}
        text='Cadastrar Cargo'
        placeholder='Cargo'
        ref={modalRef}
      />
    </Main>
  )
}
