import { DefaultMetaProps } from './types'

export const META: DefaultMetaProps = {
  search: '',
  finalDate: '',
  initialDate: '',
  order: 'ASC',
  orderField: 'id',
  paginate: {
    current_page: 1,
    last_page: 1
  },
  status: ''
}

export const FILTER_OPTIONS = {
  status: [
    { label: 'Pendente', value: 'Pendente' },
    { label: 'Assinado', value: 'Assinado' },
    { label: 'Encerrado', value: 'Encerrado' }
  ]
}

export default { META, FILTER_OPTIONS }
