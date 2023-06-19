export type Files = {
  path: string
  lastModified: number
  lastModifiedDate: Object
  name: string
  size: number
  type: string
  webkitRelativePath: string
}
export interface IFileProps {
  file: Files[]
  fileSize: string
}

export interface ContextProps {
  filePdf: IFileProps | undefined
  fileXml: IFileProps | undefined
  loading: boolean
  handleUploadPdf(file: any): void
  handleUploadXml(file: any): void
  handleSave(): Promise<void>
}
