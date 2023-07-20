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
