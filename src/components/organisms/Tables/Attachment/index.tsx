import { useMemo} from 'react'
import { useFormContext } from 'react-hook-form'
import { Loading } from 'components/atoms'
import {TableHeader} from 'components/molecules'
import { FormProps } from 'components/organisms/Forms/Professional/types'
import { percentCalculate } from 'components/utils/percentCalculate'
import { LoadingWrapper, Main } from '../style'
import { GRID_TEMPLATE, HEADERS } from '../Projects/constants'
import { Shelf } from './shelf'



export const Projects = () => {
  const { watch, setValue } = useFormContext<FormProps>()

  const attachment = watch('projects.attachment', [])

  const POPOVER_OPTIONS = (id: number) => [
    {
      label: 'Excluir',
      callback: () => {
        setValue('projects.attachment', [
          ...attachment.filter((item) => item.id !== id)
        ])
      }
    }
  ]

  /* TODO: adicionar loading ao buscar dados para a tabela */
  const Table = useMemo(() => {
    if (false)
      return (
        <LoadingWrapper>
          <Loading />
        </LoadingWrapper>
      )

    return (
      <>
        {attachment.map((props) => (
          <Shelf
            key={props.id}
            config={{
              template: GRID_TEMPLATE,
              options: POPOVER_OPTIONS(props.id)
            }}
            {...{ props }}
          />
        ))}
        {attachment.length > 0 && (
          <Shelf
            config={{
              template: GRID_TEMPLATE,
              options: []
            }}
            {...{
              props: {
                name: '',
                date_start: 'Total',
                hours_mounths_estimated: attachment.reduce(
                  (acc, cur) => acc + cur.hours_mounths_estimated,
                  0
                ),
                hours_mounths_performed: attachment.reduce(
                  (acc, cur) => acc + cur.hours_mounths_performed,
                  0
                ),
                extra_hours_estimated: attachment.reduce(
                  (acc, cur) => acc + cur.extra_hours_estimated,
                  0
                ),
                extra_hours_performed: attachment.reduce(
                  (acc, cur) => acc + cur.extra_hours_performed,
                  0
                ),
                hours_mounths_percent: +attachment
                  .map((item) =>
                    percentCalculate(
                      item.hours_mounths_performed,
                      item.hours_mounths_estimated
                    )
                  )
                  .reduce((acc, cur) => acc + cur, 0)
                  .toFixed(),
                extra_hours_percent: attachment
                  .map((item) =>
                    percentCalculate(
                      item.extra_hours_performed,
                      item.extra_hours_estimated
                    )
                  )
                  .reduce((acc, cur) => acc + cur, 0),
                id: 1
              }
            }}
          />
        )}
      </>
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [attachment])

  return (
    <Main>
      <TableHeader
        headers={HEADERS}
        template={GRID_TEMPLATE}
        handleOrder={() => {}}
      />
      {Table}
    </Main>
  )
}
