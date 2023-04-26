export const routes = {
  professional: {
    list: '/professionals',
    updateStatus: (id: number) => `/user/updateStatus/${id}`,
    validateCPF: '/user/validateCpf',
    register: '/user'
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
    list: '/project?limit=5',
    updateStatus: (id: number) => `/user/updateStatus/${id}`,
    register:'/project'
  },

  project_type:{
    list: '/projectType'
  },

  status:{
    list: '/projectStatus'
  }

}

export const externRoutes = {
  banks: 'https://brasilapi.com.br/api/banks/v1',
  cep: (search: string) => ` https://viacep.com.br/ws/${search}/json/`
}
