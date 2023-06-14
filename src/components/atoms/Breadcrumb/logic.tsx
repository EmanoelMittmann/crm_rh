type PathnameProps = keyof typeof ROUTES

const ROUTES = {
  '/home': 'Home',
  '/professionals': 'Profissionais',
  '/projects': 'Projetos',
  '/RegisterProjects': 'Projetos > Cadastrar Novo',
  '/extrasHours': 'Horas Extras',
  '/notes': 'Notas Fiscais',
  '/releaseNotes': 'Notas Fiscais > Enviar NF',
  '/reports': 'Relatórios',
  '/orderOfService': 'Ordem de Serviço',
  '/settings': 'Configurações',
  '/jobs': 'Configurações > Cargos',
  '/statusProject': 'Configurações > Status de Projeto',
  '/typeProject': 'Configurações > Tipos de Projeto',
  '/company': 'Empresas',
  '/company/new': 'Empresas > Cadastrar Novo',
  '/professional/new': 'Profissionais > Cadastrar Novo',
  '/professional/:id': 'Profissionais > Editar'
}

export function handlePathname(pathname: PathnameProps) {
  const splitedPathname = pathname.split('/')
  return isNaN(Number(splitedPathname[2]))
    ? ROUTES[pathname]
    : `${splitedPathname[1]} > Editar`
}

export type { PathnameProps }
