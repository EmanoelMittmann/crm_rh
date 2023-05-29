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
    updateStatusproject: (id: number) => `/updateStatusProject/${id}`,
    updateProject: (id: number) => `/project/${id}`,
    register: '/project'
  },

  project_type: {
    list: '/projectType',
    update: (id: number) => `/projectType/${id}`,
    updateStatus: `/updateProjectType`
  },

  status: {
    list: '/projectStatus?limit=7',
    create: '/projectStatus',
    update: (id: number) => `/projectStatus/${id}`,
    updateStatus: `updateProjectStatus`
  },

  usersProjects: {
    list: '/userProjects/project',
    updateUserProject: (id: number) => `/userProjects/project${id}`,
    register: '/userProjects/project'
  },

  color: {
    list: '/color'
  },

  company: {
    list: '/companies',
    getCompany: (id: number) => `/companies/${id}`,
    filter: '/findCompanies',
    updateStatus: (id: number) => `companie/updateStatus/${id}`
  }
}

export const externRoutes = {
  banks: 'https://brasilapi.com.br/api/banks/v1',
  cnpj: (cnpj: string) =>
    `https://brasilapi.com.br/api/cnpj/v1/${cnpj}`,
  cep: (search: string) =>
    ` https://viacep.com.br/ws/${search}/json/`,
  uf: 'https://servicodados.ibge.gov.br/api/v1/localidades/estados',
  cnae: `https://servicodados.ibge.gov.br/api/v2/cnae/classes`
}
