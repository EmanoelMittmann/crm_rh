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
  status: 'Pendente'
}

export const FILTER_OPTIONS = {
  status: []
}

export default { META, FILTER_OPTIONS }
