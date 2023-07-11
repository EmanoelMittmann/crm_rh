import { DefaultMetaProps } from './types'

const META: DefaultMetaProps = {
  date_end: '',
  date_start: '',
  order: 'ASC',
  orderField: 'user_id',
  project_id: null,
  search: '',
  status_id: null,
  paginate: {
    current_page: 1,
    last_page: 1
  }
}

const FILTER_OPTIONS = {
  professional: [],
  status: []
}

export default { META, FILTER_OPTIONS }
