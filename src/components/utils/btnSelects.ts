export const DEFAULTSELECT = {
  home: true,
  professionals: false,
  project: false,
  extrasHours: false,
  notes: false,
  reports: false,
  orderOfService: false,
  settings: false,
  company: false,
  RegisterProjects: false,
  techLeadReview: false,
  releaseHours: false,
  releaseNotes: false
}

// Função para criar um novo objeto com as configurações atualizadas
export function alterObject(
  obj: typeof DEFAULTSELECT,
  defaultValue: string
) {
  let newObj: any = DEFAULTSELECT
  for (const [key] of Object.entries(obj)) {
    if (key === defaultValue) {
      newObj[key] = true
    } else {
      newObj[key] = false
    }
  }
  return newObj
}

// Função para salvar as configurações no LocalStorage
export function saveConfigurations(config: typeof DEFAULTSELECT) {
  localStorage.setItem('configurations', JSON.stringify(config))
}

// Função para alterar as configurações e salvar no LocalStorage
export function alterAndSaveConfigurations(
  defaultValue: keyof typeof DEFAULTSELECT
) {
  const updatedConfig = alterObject(DEFAULTSELECT, defaultValue)
  saveConfigurations(updatedConfig)
}

// Função para recuperar as configurações do LocalStorage
export function getConfigurations(): typeof DEFAULTSELECT {
  const storedConfig = localStorage.getItem('configurations')
  if (storedConfig) {
    return JSON.parse(storedConfig)
  } else {
    return DEFAULTSELECT
  }
}

// Recupera as configurações do LocalStorage ao carregar a página
const currentConfigurations = getConfigurations()

// Restaura as configurações no objeto DEFAULTSELECT
Object.assign(DEFAULTSELECT, currentConfigurations)
