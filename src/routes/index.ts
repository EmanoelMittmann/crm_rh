export const routes = {
  professional: {
    list: '/professionals',
    updateStatus: (id: number) => `/user/updateStatus/${id}`,
    validateCPF: '/user/validateCpf',
    register: '/user',
    userProjects: (id: number) => `/userProjects/user/${id}`,
    getUser: (id: number) => `/user/${id}`
  },
  job: {
    list: '/job'
  },
  userType: {
    list: '/userType'
  },
  permission: {
    list: '/permissions'
  },
  project: {
    list: '/project'
  },
  companies: {
    list: '/companies'
  }
}

export const externRoutes = {
  banks: 'https://brasilapi.com.br/api/banks/v1',
  cnpj: (cnpj: string) =>
    `https://brasilapi.com.br/api/cnpj/v1/${cnpj}`,
  cep: (search: string) => ` https://viacep.com.br/ws/${search}/json/`
}
