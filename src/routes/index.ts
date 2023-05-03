export const routes = {
  professional: {
    list: '/professionals',
    updateStatus: (id: number) => `/user/updateStatus/${id}`,
    validateCPF: '/user/validateCpf',
    register: '/user'
  },
  job: {
    list: '/job',
    updateStatus: `/updateJobStatus`,
    updateJob: (id: number) => `/job/${id}`
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
    register: '/project'
  },

  project_type: {
    list: '/projectType'
  },

  status: {
    list: '/projectStatus',
    update: (id: number) => `/projectStatus/${id}`
  },
  
  user_projects: {
    list: '/userProjects/project',
    register: '/userProjects/project'

  }
}

export const externRoutes = {
  banks: 'https://brasilapi.com.br/api/banks/v1',
  cep: (search: string) => ` https://viacep.com.br/ws/${search}/json/`
}
