export const TODAY = new Date().toISOString().split('T')[0]

export const MASKER = {
  CEP: '00000-0000',
  CPF: '000.000.000-00',
  CPNJ: '00.000.000/0000-00',
  TELEPHONE: '(00) 00000-0000',
  BANK: { ACCOUNT_NUMBER: '000000000-0', AGENCY: '0000' },
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

export const BANK_OPTIONS = {
  PERSON_TYPE: [
    { label: 'Pessoa Física', value: 'PF' },
    { label: 'Pessoa Jurídica', value: 'PJ' }
  ]
}
