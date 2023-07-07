import type { DefaultMetaProps } from './types'

const META_PROPS = {
  initialDate: null,
  finalDate: null,
  project_id: null,
  status_id: null,
  search: '',
  orderField: 'name',
  order: 'ASC',
  paginate: {
    current_page: 1,
    last_page: 1
  }
} as DefaultMetaProps

const FILTER_OPTIONS_STATUS = {
  status: []
}

const FILTER_OPTIONS_PROJECT = {
  project: []
}

export default {
  META_PROPS,
  FILTER_OPTIONS_STATUS,
  FILTER_OPTIONS_PROJECT
}
