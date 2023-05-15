import { useContext, useRef } from 'react'

import { Input, Select } from '@stardust-ds/react'
import { List } from 'contexts'
import { Option } from 'types'

import { Button, IconGlass } from 'components/atoms'
import {
  IHandleModalColorsPropsNew,
  Modal
} from 'components/molecules/Modais'

import { Container, Main } from '../style'

export const StatusProject = () => {
  const modalRef = useRef<IHandleModalColorsPropsNew>(null)
  const {
    meta,
    filterOptions,
    handleSearch,
    handleStatus,
    handleCreateStatusProject
  } = useContext(List.Status.Context)

  return (
    <Main>
      <Container gap='1em'>
        <Input
          value={meta.search}
          iconLeft={<IconGlass />}
          placeholder='Buscar'
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
      <Button.New onClick={() => modalRef.current?.open()} />
      <Modal.Colors.New
        ref={modalRef}
        Event={handleCreateStatusProject}
        placeholder='Status'
        text='Cadastrar status'
      />
    </Main>
  )
}
