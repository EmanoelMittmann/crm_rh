import { useContext, useMemo, useRef } from 'react'

import { Typography } from '@stardust-ds/react'
import { List } from 'contexts'
import { ReportsProps } from 'contexts/List/Reports/types'
import { theme } from 'styles'

import { Loading } from 'components/atoms'
import { TableHeader } from 'components/molecules'
import { Modal as Modais } from 'components/molecules/Modais'
import { IHandle as IDetailsReport } from 'components/molecules/Modais/Report/Details'

import { LoadingWrapper, Main, NotFoundWrapper } from '../style'
import { GRID_TEMPLATE, HEADER } from './constants'
import Shelf from './shelf'

export const Reports = () => {
  const { isLoading, reports, handleOrder, handleDownLoad } =
    useContext(List.Reports.Context)

  const modalRef = useRef<IDetailsReport>(null)

  const POPOVER_OPTIONS = (id: number, props: ReportsProps) => [
    {
      label: 'Detalhes',
      callback: () => modalRef.current?.open(props)
    },
    {
      label: 'Baixar PDF',
      callback: () => handleDownLoad(id, 'PDF')
    },
    { label: 'Baixar XML', callback: () => handleDownLoad(id, 'XML') }
  ]

  const Table = useMemo(() => {
    if (isLoading)
      return (
        <LoadingWrapper>
          <Loading />
        </LoadingWrapper>
      )

    if (reports.length === 0) {
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

    return reports.map((props) => (
      <Shelf
        key={props.id}
        config={{
          template: GRID_TEMPLATE,
          options: POPOVER_OPTIONS(props.user_id, props)
        }}
        {...{ props }}
      />
    ))
  }, [isLoading])

  return (
    <Main>
      <TableHeader
        headers={HEADER}
        template={GRID_TEMPLATE}
        handleOrder={handleOrder}
      />
      {Table}
      <Modais.Report.Details ref={modalRef} />
    </Main>
  )
}
