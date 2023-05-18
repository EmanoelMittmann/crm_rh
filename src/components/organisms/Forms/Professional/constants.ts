import { GenerateOption } from './logic'

export const TODAY = new Date().toISOString().split('T')[0]

export const MASKER = {
  CEP: '99999-9999',
  CPF: '999.999.999-99',
  CNPJ: '99.999.999/9999-99',
  TELEPHONE: '(99) 99999-9999',
  BANK: { ACCOUNT_NUMBER: '999999999-9', AGENCY: '9999' },
  CURRENCY: (v: string) => {
    return v.length > 3 ? parseFloat(v).toFixed(2) : v
  }
}

export const UF_OPTIONS = [
  { label: 'Rondônia', value: 'RO' },
  { label: 'Acre', value: 'AC' },
  { label: 'Amazonas', value: 'AM' },
  { label: 'Roraima', value: 'RR' },
  { label: 'Pará', value: 'PA' },
  { label: 'Amapá', value: 'AP' },
  { label: 'Tocantins', value: 'TO' },
  { label: 'Maranhão', value: 'MA' },
  { label: 'Piauí', value: 'PI' },
  { label: 'Ceará', value: 'CE' },
  { label: 'Rio Grande do Norte	', value: 'RN' },
  { label: 'Paraíba	', value: 'PB' },
  { label: 'Pernambuco', value: 'PE' },
  { label: 'Alagoas', value: 'AL' },
  { label: 'Sergipe	', value: 'SE' },
  { label: 'Bahia	', value: 'BA' },
  { label: 'Minas Gerais', value: 'MG' },
  { label: 'Espírito Santo', value: 'ES' },
  { label: 'Rio de Janeiro', value: 'RJ' },
  { label: 'São Paulo', value: 'SP' },
  { label: 'Paraná	', value: 'PR' },
  { label: 'Santa Catarina', value: 'SC' },
  { label: 'Rio Grande do Sul', value: 'RS' },
  { label: 'Mato Grosso do Sul', value: 'MS' },
  { label: 'Mato Grosso', value: 'MT' },
  { label: 'Goiás	', value: 'GO' },
  { label: 'Distrito Federal', value: 'DF' }
]

export const PIX_KEY_TYPE = {
  CPF: 'CPF',
  CNPJ: 'CNPJ',
  EMAIL: 'E-mail',
  TELEPHONE: 'Número do celular',
  RANDOM_KEY: 'Chave aleatória'
}

export const CONTRACT_TYPE = {
  FULLTIME: 'FULLTIME',
  PART: 'PARTTIME',
  FREELANCER: 'HORISTA'
}

export const KEYS = {
  PIX_KEY_TYPE,
  CONTRACT_TYPE,
  FUNCTION: {
    TECH_LEADER: 'Technical Leader',
    TECH_LEAD_AND_DEV: 'Technical Lead and Developer',
    DEVELOPER: 'Developer'
  },
  ACCOUNT_TYPE: {
    CORRENTE: 'Conta Corrente',
    Poupança: 'Conta Poupança'
  },
  TRANSFER_TYPE: {
    TED: 'TED',
    DOC: 'DOC',
    PIX: 'PIX'
  }
} as const

export const BANK_OPTIONS = {
  PERSON_TYPE: [
    { label: 'Pessoa Física', value: 'PF' },
    { label: 'Pessoa Jurídica', value: 'PJ' }
  ],
  ACCOUNT_TYPE: GenerateOption(KEYS.ACCOUNT_TYPE),
  TRANSFER_TYPE: GenerateOption(KEYS.TRANSFER_TYPE),
  PIX_KEY_TYPE: GenerateOption(KEYS.PIX_KEY_TYPE)
}

export const FUNCTION_OPTIONS = GenerateOption(KEYS.FUNCTION)

export const CONTRACT_TYPE_OPTIONS = GenerateOption(
  KEYS.CONTRACT_TYPE
)
