import type { DefaultMetaProps } from './types'

const META_PROPS: DefaultMetaProps = {
  cnpj: '',
  cityName: '',
  search: '',
  typeCompany: '',
  uf: '',
  registrationStatus: '',
  orderField: 'id',
  order: 'ASC',
  referencesDate: '',
  razaoSocial: '',
  paginate: {
    current_page: 1,
    last_page: 1
  }
}

export const FILTER_OPTIONS = {
  typeCompany: [],
  registration: [],
  uf: []
}

export default { META_PROPS, FILTER_OPTIONS }
