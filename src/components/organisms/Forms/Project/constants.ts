import type { HeaderProps } from 'components/molecules'

export const HEADERS = [
    { field: 'professional', label: 'Profissional e cargo'},
    { field: 'extra_hours_estimated', label: 'H/Mensais Estimadas'},
    { field: 'hours_mounths_performed', label: 'H/Mensais Realizadas' },
    { field: '', label: '%' },
    { field: 'extra_hours_estimated', label: 'H/Extras Estimadas' },
    { field: 'extra_hours_performed', label: 'H/Extras Realizadas' },
    { field: '', label: '%' },
] as HeaderProps[]

export const GRID_TEMPLATE = '.8fr 0.5fr 0.5fr 0.2fr 0.4fr .5fr 0.3fr'