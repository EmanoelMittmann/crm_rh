import type { HeaderProps } from 'components/molecules'

export const HEADERS = [
    { field: 'professional', label: 'Profissional' },
    { field: 'extra_hours_estimated', label: 'Empresa' },
    { field: 'hours_mounths_performed', label: 'CNPJ' },
    { field: '', label: '%' },
    { field: 'extra_hours_estimated', label: 'Salário' },
    { field: 'extra_hours_performed', label: 'Comissão' },
    { field: '', label: '$ Horas Extras' },
    { field: 'status', label: 'Total' }
] as HeaderProps[]

export const GRID_TEMPLATE =
    '.7fr 0.5fr 0.5fr 0.2fr 0.3fr .5fr 0.2fr 0.5fr'