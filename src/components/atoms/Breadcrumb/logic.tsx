type PathnameProps = keyof typeof ROUTES
type Path = keyof typeof previousSubModules
type Nomenclature = keyof typeof handleNomenclature

const ROUTES = {
  '/home': 'Home',
  '/professionals': 'Profissionais',
  '/contractHistory': 'Profissionais > Historico de Contrato',
  '/project': 'Projetos',
  '/project/new': 'Projetos > Cadastrar Novo',
  '/notes': 'Notas Fiscais',
  '/releaseNotes': 'Notas Fiscais',
  '/uploadNotes': 'Notas Fiscais > Enviar NF',
  '/reports': 'Pagamentos',
  '/orderOfService': 'Ordens de Serviço',
  '/settings': 'Configurações',
  '/jobs': 'Configurações > Cargos',
  '/techLeadReview': 'Horas Extras',
  '/extrasHours': 'Horas Extras',
  '/releaseHours': 'Horas Extras',
  '/sendingHours': 'Horas Extras > Novo Lançamento',
  '/detaisHours/:id': 'Horas Extras > Detalhes',
  '/statusProject': 'Configurações > Status de Projeto',
  '/typeProject': 'Configurações > Tipos de Projeto',
  '/company': 'Empresas',
  '/company/new': 'Empresas > Cadastrar Novo',
  '/professional/new': 'Profissionais > Cadastrar Novo',
  '/orderOfService/new': 'Ordens de Serviço > Criar nova O.S',
  '/report': 'Relatórios'
}

export const previousSubModules = {
  '/professional/new': '/professionals',
  '/professional/:id': '/professionals',
  '/project/new': '/project',
  '/project/:id': '/project',
  '/company/new': '/company',
  '/company/:id': '/company',
  '/orderOfService/new': '/orderOfService',
  '/contractHistory': '/professionals',
  '/sendingHours': '/releaseHours',
  '/jobs': '/settings',
  '/statusProject': '/settings',
  '/typeProject': '/settings',
  '/uploadNotes': '/releaseNotes'
}

const handleNomenclature = {
  project: 'Projetos',
  professional: 'Profissionais',
  company: 'Empresas'
}

export function handlePrevious(path: Path) {
  const split = path.split('/')
  return !isNaN(Number(split[2]))
    ? previousSubModules[`/${split[1]}/:id` as Path]
    : previousSubModules[path]
}

export function handlePathname(pathname: PathnameProps) {
  const splitedPathname = pathname.split('/')
  return isNaN(Number(splitedPathname[2]))
    ? ROUTES[pathname]
    : `${
        handleNomenclature[splitedPathname[1] as Nomenclature]
      } > Editar`
}

export type { PathnameProps, Path }
