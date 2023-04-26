import type { DefaultMetaProps } from './types'

const META_PROPS = {
  isActive: '',
  search: '',
  order: 'ASC',
  paginate: {
    current_page: 1,
    last_page: 1
  }
} as DefaultMetaProps

const FILTER_OPTIONS = {
  status: []
}

export default { META_PROPS, FILTER_OPTIONS }
