import type { SelectProps } from '@stardust-ds/react'
export type { ReactNode } from 'react'

export interface DefaultMetaProps {
    commission_id: number | null
    search: string
    orderField: string | null
    order: 'ASC' | 'DESC'
    paginate: {
        current_page: number
        last_page: number
    }
}


export interface ContextOrderOfServiceProps {
    meta: DefaultMetaProps
    orderOfService: OrderOfServiceProps[]
    isLoading: boolean
    filterOptions: { status_O_S: SelectProps['options'] }
    paginate: {
        current_page: number
        last_page: number
        setCurrent_page(page: number): void
    }
    navigateTo(url: string): void
    handleSearch(text: string): void
    handleOrder(field: string): void
}

export interface OrderOfServiceProps {
    id: number
    commission: number
    professional_id: number
    created_at: string
    updated_at: string
    reference: string
} 