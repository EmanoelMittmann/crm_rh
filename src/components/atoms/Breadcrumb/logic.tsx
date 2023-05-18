type PathnameProps = keyof typeof ROUTES

const ROUTES = {
  '/home': 'Home',
  '/professionals': 'Profissionais',
  '/projects': 'Projetos',
  '/RegisterProjects': 'Projetos > Cadastrar Novo',
  '/extrasHours': 'Horas Extras',
  '/notes': 'Notas Fiscais',
  '/reports': 'Relatórios',
  '/services': 'Ordem de Serviço',
  '/settings': 'Configurações',
  '/jobs': 'Configurações > Cargos',
  '/statusProject': 'Configurações > Status de Projeto',
  '/typeProject': 'Configurações > Tipos de Projeto',
  '/company': 'Empresas',
  '/RegisterProfessionals': 'Profissionais > Cadastrar Novo'
}

export function handlePathname(pathname: PathnameProps) {
  return ROUTES[pathname]
}

export type { PathnameProps }
