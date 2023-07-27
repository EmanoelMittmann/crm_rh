import { useContext, useMemo, useRef } from 'react'

import { Typography, toast } from '@stardust-ds/react'
import { List } from 'contexts'

import { Loading } from 'components/atoms'
import { TableHeader } from 'components/molecules'
import { IHandleTechLead, Modal } from 'components/molecules/Modais'

import { LoadingWrapper, Main, NotFoundWrapper } from '../style'
import { GRID_TEMPLATE, HEADERS } from './contants'
import { Shelf } from './shelf'
import { theme } from 'styles'

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
    if (techLead.length === 0) {
      return (
        <NotFoundWrapper>
          <Typography
            color={theme.neutrals.gray5}
            fontWeight='bold'
            type='h3'
          >
            Profissional não encontrado
          </Typography>
        </NotFoundWrapper>
      )
    }

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
      />
      {Table}
      <Modal.TechLead ref={modalRef} />
    </Main>
  )
}
