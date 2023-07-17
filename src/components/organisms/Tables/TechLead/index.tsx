import { useContext, useMemo, useRef } from 'react'

import { toast } from '@stardust-ds/react'
import { List } from 'contexts'

import { Loading } from 'components/atoms'
import { TableHeader } from 'components/molecules'
import { IHandleTechLead, Modal } from 'components/molecules/Modais'

import { LoadingWrapper, Main } from '../style'
import { GRID_TEMPLATE, HEADERS } from './contants'
import { Shelf } from './shelf'

export const TechLead = () => {
  const modalRef = useRef<IHandleTechLead>(null)
  const {
    isLoading,
    techLead,
    handleOrder,
    fetchDetailsProfessional
  } = useContext(List.TechLeadHours.Context)

  const handlePreload = async (id: number, status: number) => {
    if (status === 1) {
      await fetchDetailsProfessional(id)
      modalRef.current?.open()
      return
    }
    return toast({
      type: 'info',
      title: 'Aviso',
      description:
        'Só é possível aprovar profissionais com o status Líder Técnico',
      position: 'bottom-right'
    })
  }

  const OPTIONS = (props: number, status: number) => [
    {
      label: 'Justificar',
      callback: async () => {
        handlePreload(props, status)
      }
    }
  ]

  const Table = useMemo(() => {
    if (isLoading)
      return (
        <LoadingWrapper>
          <Loading />
        </LoadingWrapper>
      )

    return techLead.map((props) => (
      <Shelf
        key={props.id}
        {...{ props }}
        config={{
          template: GRID_TEMPLATE,
          options: OPTIONS(props.id, props.status_id)
        }}
      />
    ))
  }, [isLoading])

  return (
    <Main>
      <TableHeader
        handleOrder={handleOrder}
        template={GRID_TEMPLATE}
        headers={HEADERS}
        handleCheckedAll={() => {}}
      />
      {Table}
      <Modal.TechLead ref={modalRef} />
    </Main>
  )
}
