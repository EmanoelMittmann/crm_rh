import type { DefaultMetaProps } from './types'

const META_PROPS: DefaultMetaProps = {
  isActive: null,
  search: '',
  order: 'ASC',
  orderField: 'id',
  paginate: {
    current_page: 1,
    last_page: 1
  }
}

const FILTER_OPTIONS = {
  status: []
}

export default { META_PROPS, FILTER_OPTIONS }
