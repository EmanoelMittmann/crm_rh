import { useContext, useMemo, useRef } from 'react'

import { Input, Select } from '@stardust-ds/react'
import { List } from 'contexts'
import { Option } from 'types'

import { Button, IconGlass } from 'components/atoms'
import { Modal } from 'components/molecules/Modais'
import { IHandleModalProps } from 'components/molecules/Modais/New'

import { Main } from '../style'
import { Container } from '../style'

export const Jobs = () => {
  const modalRef = useRef<IHandleModalProps>(null)
  const {
    meta,
    filterOptions,
    handleSearch,
    handleStatus,
    handleJob
  } = useContext(List.Settings.Context)

  return (
    <Main>
      <Container gap='1em'>
        <Input
          value={meta.search}
          iconLeft={<IconGlass />}
          placeholder='Buscar...'
          onChange={(e) => handleSearch(e.target.value)}
          width={272}
        />
        <Select
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
