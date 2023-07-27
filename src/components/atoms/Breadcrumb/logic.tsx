type PathnameProps = keyof typeof ROUTES

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
  '/professional/:id': 'Profissionais > Editar',
  '/orderOfService/new': 'Ordens de Serviço > Criar nova O.S',
  '/report': 'Relatórios'
}

export function handlePathname(pathname: PathnameProps) {
  const splitedPathname = pathname.split('/')
  return isNaN(Number(splitedPathname[2]))
    ? ROUTES[pathname]
    : `${splitedPathname[1]} > Editar`
}

export type { PathnameProps }
