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

export type ShelfProps = {
  props: NotesProps
}
