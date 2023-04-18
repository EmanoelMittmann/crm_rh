type PathnameProps = keyof typeof ROUTES

const ROUTES = {
  '/home': 'Home',
  '/professionals': 'Profissionais',
  '/project': 'Projetos',
  '/RegisterProjects': 'Projetos > Cadastrar Novo',
  '/extrasHours': 'Horas Extras',
  '/notes': 'Notas Fiscais',
  '/reports': 'Relatórios',
  '/services': 'Ordem de Serviço',
  '/settings': 'Configurações',
  '/company': 'Empresas',
  '/RegisterProfessionals': 'Profissionais > Cadastrar Novo',
}

export function handlePathname(pathname: PathnameProps) {
  return ROUTES[pathname]
}

export type { PathnameProps }
