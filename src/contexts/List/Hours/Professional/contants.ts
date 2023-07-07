import { DefaultMetaProps } from './types'

const META: DefaultMetaProps = {
  search: null,
  status_id: null,
  project_id: null,
  order: 'DESC',
  date_start: '',
  date_end: '',
  paginate: {
    current_page: 1,
    last_page: 1
  }
}

const FILTER_OPTIONS = {
  project: [],
  status: []
}

export default { META, FILTER_OPTIONS }
