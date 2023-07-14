export type FilePdf = {
  path: string
  lastModified: number
  lastModifiedDate: Object
  name: string
  size: number
  type: string
  webkitRelativePath: string
}
export interface IFileProps {
  file: FilePdf[]
  fileSize: string
}
