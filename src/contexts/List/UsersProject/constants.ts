import type { DefaultMetaProps } from './types'

const META_PROPS = {
  users: null,
  job: null,
  search: '',
  orderField: 'id',
  order: 'ASC',
  paginate: {
    current_page: 1,
    last_page: 1
  }
} as DefaultMetaProps

const FILTER_OPTIONS_USERS = {
  users: []
}

export default { META_PROPS, FILTER_OPTIONS_USERS }
