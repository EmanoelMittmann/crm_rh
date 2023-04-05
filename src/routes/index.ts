export const routes = {
  professional: {
    list: '/professionals',
    updateStatus: (id: number) => `/user/updateStatus/${id}`,
    validateCPF: '/user/validateCpf',
    register: '/user',
  },
  job: {
    list: '/job',
  },
  userType: {
    list: '/userType',
  },
  permission: {
    list: '/permissions',
  },
  project: {
    list: '/project',
  },
}

export const externRoutes = {
  banks: 'https://brasilapi.com.br/api/banks/v1',
  cep: (search: string) => ` https://viacep.com.br/ws/${search}/json/`,
} 