import { useContext, useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { List } from 'contexts'
import { Loading } from 'components/atoms'
import { TableHeader } from 'components/molecules'
import {
  LoadingWrapper,
  Main
} from 'components/organisms/Tables/style'

import { GRID_TEMPLATE, HEADERS } from './constants'
import { Shelf } from './Shelf'
import { useFormContext } from 'react-hook-form'
import { FormProjectProps } from './types'


export const ProjectTeam = () => {
  const { watch } = useFormContext<FormProjectProps>()
  const Team = watch('team', [])
  const {isLoading, handleOrder } = useContext(
    List.Project.Context
  )
  const navigate = useNavigate()



  const POPOVER_OPTIONS = (id: number, status: any) => [
    {
      label: 'Editar',
      callback: () => navigate(`/project/${id}`)
    }
  ]

  const Table = useMemo(() => {
    if (isLoading)
      return (
        <LoadingWrapper>
          <Loading />
        </LoadingWrapper>
      )

    return Team.map((props) => (
      <Shelf
        key={props.id}
        config={{
          template: GRID_TEMPLATE,
          options: POPOVER_OPTIONS(props.id, props.status)
        }}
        {...{ props }}
      />
    ))
  }, [isLoading, Team])

  return (
    <Main>
      <TableHeader
        headers={HEADERS}
        template={GRID_TEMPLATE}
        handleOrder={handleOrder}
      />
      {Table}
    </Main>
  )
}
