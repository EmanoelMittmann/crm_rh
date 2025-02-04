import type { DefaultMetaProps } from './types'

const META_PROPS = {
  initialDate: null,
  finalDate: null,
  referencesDate: null,
  status: null,
  status_O_S: null,
  search: '',
  orderField: 'id',
  order: 'DESC',
  paginate: {
    current_page: 1,
    last_page: 1
  }
} as DefaultMetaProps

const FILTER_OPTIONS = {
  status_O_S: []
}

export default { META_PROPS, FILTER_OPTIONS }
