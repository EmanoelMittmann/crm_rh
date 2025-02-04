export const routes = {
  professional: {
    list: '/professionals',
    updateStatus: (id: number) => `/user/updateStatus/${id}`,
    validateCPF: '/user/validateCpf',
    register: '/user',
    userProjects: (id: number) => `/userProjects/user/${id}`,
    getUser: (id: number) => `/user/${id}`
  },

  contract: {
    list: '/contractHistory'
  },

  job: {
    list: '/job',
    listAll: '/job?limit=100',
    updateStatus: `/updateJobStatus`,
    updateJob: (id: number) => `/job/${id}`
  },

  hours: {
    Professional: {
      list: '/extraHoursReleases',
      Details: (id: number) => `/extrasHoursReleases/details/${id}`,
      Historic: (id: number) => `/extraHoursReleases/${id}`
    },
    techLead: {
      list: '/extrasHoursReleases/pending?limit=6',
      approve: '/extrasHoursReleases/approval'
    },
    Status: {
      list: '/extraHoursStatus'
    }
  },

  userType: {
    list: '/userType'
  },

  reports: {
    list: '/reports',
    downLoad: (id: number, type: string) =>
      `/downloadReportsFiles?user_id=${id}&type_file=${type}`,
    excel: (id: number) => `/generateExcelPayment?companies_id=${id}`
  },

  permission: {
    list: '/permissions'
  },

  notes: {
    list: `/fiscalNotes`,
    user: `/fiscalNotesProfissionals`,
    download: (id: number) => `/fiscalNotes/downloadFiles/${id}`
  },

  status: {
    list: '/projectStatus?limit=7',
    create: '/projectStatus',
    update: (id: number) => `/projectStatus/${id}`,
    updateStatus: `updateProjectStatus`
  },

  project: {
    list: '/project?limit=5',
    updateStatusproject: (projectId: number) =>
      `/updateStatusProject/${projectId}`,
    updateProject: (id: number) => `/project/${id}`,
    register: '/project',
    userProjects: (id: number) => `/userProjects/project/${id}`,
    projectBondUser: '/userProjects/user',
    projectBond: (id: number) => `/userProjects/user/${id}`
  },

  project_type: {
    list: '/projectType',
    update: (id: number) => `/projectType/${id}`,
    updateStatus: `/updateProjectType`
  },

  projectUsers: {
    list: '/userProjects/user',
    getUserProject: (id: number) => `/userProjects/user/${id}`
  },

  usersProjects: {
    list: '/userProjects/project',
    userProjects: (id: number) => `/userProjects/project/${id}`,
    updateTeam: (id: number) => `/userProjects/project/${id}`,
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
  },

  orderOfService: {
    list: '/orderOfService',
    register: '/findProfessionalCommissionOrCreateOrderOfService'
  },

  extraHoursRH: {
    listProject: '/project',
    listStatusHours: 'extraHoursStatus',
    listPending: '/extrasHoursReleases/pending',
    register: '/extrasHoursReleases/approval',
    getDetails: (id: number) => `/extrasHoursReleases/details/${id}`
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
