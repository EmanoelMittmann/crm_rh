export interface DefaultMetaProps {
  search: string
  date_start: string
  date_end: string
  orderField: string
  order: 'ASC' | 'DESC'
  pagination: {
    current_page: number
    last_page: number
  }
}

export interface ContextNotesProps {
  meta: DefaultMetaProps
  notes: NotesProps[]
  isLoading: boolean
  paginate: {
    current_page: number
    last_page: number
    setCurrent_page(page: number): void
  }
  handleSearch(text: string): void
  handleOrder(field: string): void
  handleDateReference(start: string, end: string): void
  downloadFile(id: number, name: string): void
}

export interface NotesProps {
  id: number
  created_at: string
  user_id: number
  file_id: number
  file: {
    name: string
    id: number
  }
  file_xml: {
    date_emission_nf: string
    id: number
    name: string
    number_nf: string
    value_nf: string
  }
}
