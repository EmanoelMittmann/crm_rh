import type { HeaderProps } from 'components/molecules'

export const HEADERS: HeaderProps[] = [
  { field: 'razao_social', label: 'Razão Social', on: true },
  { field: 'cnpj', label: 'CPNJ' },
  { field: 'launch_date', label: 'Data de Abertura' },
  { field: 'city_name', label: 'Cidade' },
  { field: 'type_company', label: 'Tipos' },
  { field: 'uf', label: 'UF' },
  { field: 'registration_status', label: 'Situação Cadastral' }
]

export const TypesCompanys = (type: string) => {
  switch (type) {
    case 'CLIENT':
      return 'Cliente'
    case 'UBISTART':
      return 'Ubistart'
    case 'SUPPLIER':
      return 'Fornecedor'
    default:
      return
  }
}

export const GRID_TEMPLATE = '1fr 1fr 1fr 1fr 1fr 1fr 1fr'
