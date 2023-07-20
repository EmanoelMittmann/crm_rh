import type { DefaultMetaProps } from './types'

const META_PROPS = {
  isActive: null,
  search: '',
  order: 'ASC',
  paginate: {
    current_page: 1,
    last_page: 1
  }
} as DefaultMetaProps

const FILTER_OPTIONS = {
  status: [
    { label: 'Inativo', value: '0' },
    { label: 'Ativo', value: '1' }
  ]
}

export default { META_PROPS, FILTER_OPTIONS }
