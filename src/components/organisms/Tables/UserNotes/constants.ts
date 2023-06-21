import { HeaderProps } from 'components/molecules'

export const HEADERS: HeaderProps[] = [
  { field: 'id', label: 'Item', on: true },
  { field: 'created_at', label: 'Data de Lançamento', on: true },
  {
    field: 'file_xml.date_emission_nf',
    label: 'Data de emissão da NF'
  },
  { field: 'file_xml.number_nf', label: 'Numero da NF' },
  { field: 'file_xml.value_nf', label: 'Valor da NF' },
  { field: 'file.name', label: 'Arquivo' }
]

export const GRID_TEMPLATE = '1fr 1fr 1fr 1fr 1fr 1fr'
