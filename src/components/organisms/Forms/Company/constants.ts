import { GenerateOption } from './logic'

export const TODAY = new Date().toISOString().split('T')[0]

export const MASKER = {
  CEP: '99999-9999',
  CPF: '999.999.999-99',
  CPNJ: '99.999.999/9999-99',
  TELEPHONE: '(99) 99999-9999',
  BANK: { ACCOUNT_NUMBER: '9999999999-9', AGENCY: '9999-9' },
  CURRENCY: (v: string) => {
    return v.length > 3 ? parseFloat(v).toFixed(2) : v
  }
}

export const PIX_KEY_TYPE = {
  CPF: 'CPF',
  CNPJ: 'CNPJ',
  EMAIL: 'E-mail',
  TELEPHONE: 'Número do celular',
  RANDOM_KEY: 'Chave aleatória'
}

export const KEYS = {
  PIX_KEY_TYPE,
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

export const COMPANY = {
  SIZE: [
    { label: 'Micro Empreendedor', value: 'MEI' },
    { label: 'Micro Empresa', value: 'ME' },
    { label: 'Empresa de Pequeno Porte', value: 'EPP' },
    { label: 'Empresa de Medio Porte', value: 'PME' },
    { label: 'Empresa de Grande Porte', value: 'SA/LTDA' }
  ],
  CADASTRATION: [
    { label: 'Ativo', value: 'ACTIVE' },
    { label: 'Suspenso', value: 'SUSPENDED' },
    { label: 'Inapta', value: 'UNFIT' },
    { label: 'Baixada', value: 'DOWNLOADED' },
    { label: 'Nula', value: 'NULL' }
  ]
}

export const BANK_OPTIONS = {
  PERSON_TYPE: [
    { label: 'Pessoa Física', value: 'PF' },
    { label: 'Pessoa Jurídica', value: 'PJ' }
  ],
  TYPE_ACCOUNT: GenerateOption(KEYS.ACCOUNT_TYPE)
}
