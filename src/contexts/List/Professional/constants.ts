import type { DefaultMetaProps } from './types'

const META_PROPS = {
  job_id: null,
  search: '',
  orderField: 'name',
  order: 'ASC',
  paginate: {
    current_page: 1,
    last_page: 1,
  },
} as DefaultMetaProps

const FILTER_OPTIONS = {
  job: [],
}

export default { META_PROPS, FILTER_OPTIONS }
