import { useContext, useMemo, useRef } from 'react'

import { List } from 'contexts'

import { Loading } from 'components/atoms'
import { TableHeader } from 'components/molecules'
import Edit, {
  IHandleModalProps
} from 'components/molecules/Modais/Edit'

import { LoadingWrapper } from '../style'
import { Main } from '../style'
import { GRID_TEMPLATE, HEADERS } from './constants'
import Shelf from './Shelf'

export const Jobs = () => {
  const modalRef = useRef<IHandleModalProps>(null)
  const {
    jobs,
    isLoading,
    handleUpdateStatus,
    handleOrder,
    handleUpdateJob
  } = useContext(List.Settings.Context)

  const POPOVER_OPTIONS = (id: number, status: boolean) => [
    {
      label: 'Editar',
      callback: () => modalRef.current?.open(id)
    },
    {
      label: status ? 'Inativar' : 'Ativar',
      callback: () => handleUpdateStatus(id)
    }
  ]

  const Table = useMemo(() => {
    if (isLoading)
      return (
        <LoadingWrapper>
          <Loading />
        </LoadingWrapper>
      )

    return jobs.map((props) => (
      <Shelf
        key={props.id}
        config={{
          template: GRID_TEMPLATE,
          options: POPOVER_OPTIONS(props.id, props.is_active)
        }}
        {...{ props }}
      />
    ))
  }, [isLoading])

  return (
    <Main>
      <TableHeader
        headers={HEADERS}
        template={GRID_TEMPLATE}
        handleOrder={handleOrder}
      />
      <Edit
        ref={modalRef}
        placeholder='Cargos'
        text='Cadastrar Cargos'
        EventOne={handleUpdateJob}
      />
      {Table}
    </Main>
  )
}
