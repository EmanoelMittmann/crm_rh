import type { DefaultMetaProps } from './types'

const META_PROPS: DefaultMetaProps = {
  companies_id: null,
  date_end: '',
  date_start: '',
  order: 'ASC',
  orderField: 'id',
  paginate: {
    current_page: 1,
    last_page: 1
  },
  search: '',
  status: ''
}

const FILTER_OPTIONS = {
  companies: [],
  status: []
}

export default { FILTER_OPTIONS, META_PROPS }
