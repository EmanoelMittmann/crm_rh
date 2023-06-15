import type { TemplateProps } from '../types'

interface OptionsProps {
    label: string
    callback: () => void
}

interface ConfigProps extends TemplateProps {
    options: OptionsProps[]
}

export interface OrderOfServiceProps {
    id: number
    name: string
    professional_id: number
    cnpj: number
    companies_id: number
    created_at: string
    key_document: string
    os_generation: string
    reference: string
    status: string
    updated_at: string
    avatar: string
}

export type ShelfProps = {
    props: OrderOfServiceProps
    config: ConfigProps
}
