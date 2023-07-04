import type { DefaultMetaProps } from './types'

const META_PROPS = {
  search: '',
  orderField: 'name',
  order: 'ASC',
  paginate: {
    current_page: 1,
    last_page: 1
  }
} as DefaultMetaProps

export default { META_PROPS }
