import type { DefaultMetaProps } from './types'

const META_PROPS = {
  date_start: null,
  date_end: null,
  project_id: null,
  status_id: null,
  approved: null,
  search: '',
  orderField: 'id',
  order: 'ASC',
  pagination: {
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

const FILTER_OPTIONS = {
  approved: []
}

export default {
  META_PROPS,
  FILTER_OPTIONS_STATUS,
  FILTER_OPTIONS_PROJECT,
  FILTER_OPTIONS
}
