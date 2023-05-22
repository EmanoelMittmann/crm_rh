import { SelectOption } from '@stardust-ds/react/lib/esm/components/Select/interfaces'

export const optionsStatus = [
  {
    label: 'Parado',
    value: 'Parado'
  },
  {
    label: 'Pendente - Time',
    value: 'Pendente - Time'
  },
  {
    label: 'Em Andamento',
    value: 'Em Andamento'
  },
  {
    label: 'Finalizado',
    value: 'Finalizado'
  }
]

export const optionsProjects = [
  {
    label: 'Planning',
    value: 'planning'
  },
  {
    label: 'Escopo Aberto',
    value: 'Escopo Aberto'
  },
  {
    label: 'Escopo Fechado',
    value: 'Escopo Fechado'
  }
]

export const optionsTime = [
  {
    label: 'Cicera',
    value: 'Cicera'
  },
  {
    label: 'Gustavo',
    value: 'Gustavo'
  },
  {
    label: 'Emanoel',
    value: 'Emanoel'
  }
]

export const objectTime = [
  {
    id: '01',
    avatar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png',
    name: 'Cicera Ribeiro',
    job: 'Desenvolvedor Frontend',
    hours: '120',
    status: true
  },
  {
    id: '02',
    avatar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png',
    name: 'Gustavo Lima',
    job: 'Desenvolvedor Frontend',
    hours: '160',
    status: true
  },
  {
    id: '03',
    avatar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png',
    name: 'Emanuel',
    job: 'Desenvolvedor Frontend',
    hours: '160',
    status: true
  },
  {
    id: '04',
    avatar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png',
    name: 'Maria Ribeiro',
    job: 'Desenvolvedor Frontend',
    hours: '120',
    status: true
  },
  {
    id: '05',
    avatar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png',
    name: 'Jose Roberto',
    job: 'Desenvolvedor Frontend',
    hours: '120',
    status: false
  },
  {
    id: '06',
    avatar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png',
    name: 'Lucas TechLead',
    job: 'Desenvolvedor Frontend',
    hours: '120',
    status: true
  }
]

export const generateOpitionsFromBackend = (
  value: string | number,
  data: SelectOption[]
) => {
  return data.find((item, index, obj) => {
    if (typeof item.value === 'number')
      return item.value === value || null
    const item_value = item.value?.search(String(value))
    return item_value === 0 ? obj[index] : null
  })
}
