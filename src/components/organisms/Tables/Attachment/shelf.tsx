import { Popover } from 'components/molecules'
import { percentCalculate } from 'components/utils/percentCalculate'

import { ContainerShelf, ContainerShelfColumn, Text } from '../style'
import { ShelfProps } from '../types'
import { ProjectPropsHours } from './types'

export const Shelf = ({
  props,
  config
}: ShelfProps<ProjectPropsHours>) => {
  const {
    date_start,
    extra_hours_estimated,
    extra_hours_performed,
    extra_hours_percent = undefined,
    hours_mounths_estimated,
    hours_mounths_performed,
    hours_mounths_percent = undefined,
    name
  } = props

  return (
    <ContainerShelf template={config.template}>
      <ContainerShelfColumn justify='start' title={name}>
        <Text>{name}</Text>
      </ContainerShelfColumn>
      <ContainerShelfColumn justify='start' title={date_start}>
        <Text>{date_start}</Text>
      </ContainerShelfColumn>
      <ContainerShelfColumn
        justify='center'
        title={String(hours_mounths_estimated)}
      >
        <Text>{hours_mounths_estimated}</Text>
      </ContainerShelfColumn>
      <ContainerShelfColumn
        justify='center'
        title={String(hours_mounths_performed)}
      >
        <Text>{hours_mounths_performed}</Text>
      </ContainerShelfColumn>
      <ContainerShelfColumn
        justify='center'
        title={
          hours_mounths_percent
            ? String(hours_mounths_percent.toFixed())
            : String(
                percentCalculate(
                  hours_mounths_performed,
                  hours_mounths_estimated
                ).toFixed()
              )
        }
      >
        <Text>
          {hours_mounths_percent === undefined
            ? percentCalculate(
                hours_mounths_performed,
                hours_mounths_estimated
              ).toFixed()
            : hours_mounths_percent.toFixed()}
          %
        </Text>
      </ContainerShelfColumn>
      <ContainerShelfColumn
        justify='center'
        title={String(extra_hours_estimated)}
      >
        <Text>{extra_hours_estimated}</Text>
      </ContainerShelfColumn>
      <ContainerShelfColumn
        justify='center'
        title={String(extra_hours_performed)}
      >
        <Text>{extra_hours_performed}</Text>
      </ContainerShelfColumn>
      <ContainerShelfColumn
        justify='center'
        title={
          extra_hours_percent
            ? String(extra_hours_percent.toFixed())
            : String(
                percentCalculate(
                  extra_hours_performed,
                  extra_hours_estimated
                ).toFixed()
              )
        }
      >
        <Text>
          {extra_hours_percent === undefined
            ? percentCalculate(
                extra_hours_performed,
                extra_hours_estimated
              ).toFixed()
            : extra_hours_percent.toFixed()}
          %
        </Text>
      </ContainerShelfColumn>
      <ContainerShelfColumn justify='center' gap='2em'>
        {config.options.length > 0 && (
          <Popover options={config.options} />
        )}
      </ContainerShelfColumn>
    </ContainerShelf>
  )
}
