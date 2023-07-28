import { ReactNode, createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { toast } from '@stardust-ds/react'
import axios from 'axios'
import { filesize } from 'filesize'

import api from 'api'
import { routes } from 'routes'

import {
  ContextProps,
  FiscalNotesProfissionalsData,
  IFileProps
} from './types'

export const Context = createContext({} as ContextProps)

export const Provider = ({ children }: { children: ReactNode }) => {
  const [filePdf, setFilePdf] = useState<IFileProps>()
  const [fileXml, setFileXml] = useState<IFileProps>()
  const [loading, setLoading] = useState<boolean>(true)

  const handleUploadPdf = (file: File[]) => {
    const data = {
      file,
      fileSize: filesize(file[0].size)
    } as unknown as IFileProps
    setFilePdf(data)
  }

  const handleUploadXml = (file: File[]) => {
    const data = {
      file,
      fileSize: filesize(file[0].size)
    } as unknown as IFileProps
    setFileXml(data)
  }

  const handleGetUploadUrlSigned = async () => {
    let returnData = {} as FiscalNotesProfissionalsData

    try {
      const { data } = await api.post(routes.notes.user)

      const { pdfPreSignedUrl, xmlPreSignedUrl, error } =
        data as FiscalNotesProfissionalsData
      if (error) {
        returnData.error = error
      }

      if (pdfPreSignedUrl) {
        returnData.pdfPreSignedUrl = pdfPreSignedUrl
      }

      if (xmlPreSignedUrl) {
        returnData.xmlPreSignedUrl = xmlPreSignedUrl
      }
    } catch (error) {
      console.log(error)
      returnData.error = 'Catch error'
    }

    return returnData
  }

  const uploadFile = async (file: File, url: string) => {
    const fileBlob = new Blob([file])
    const fileBuffer = await file.arrayBuffer()

    const form = new FormData()
    form.append('data', fileBlob)

    try {
      const data = await axios.put(url, file, {
        headers: {
          'Content-Type': file.type
        }
      })

      console.log(data)
    } catch (error) {
      console.error('Erro ao enviar arquivo:', error)
    }
  }

  const handleSave = async () => {
    setLoading(true)

    console.log(filePdf, fileXml)

    if (!filePdf || !fileXml) {
      toast({
        type: 'error',
        title: 'NF não enviada.',
        description: 'Selecione os arquivos para enviar.',
        position: 'bottom-right'
      })
      return
    }

    const urls = await handleGetUploadUrlSigned()
    const { pdfPreSignedUrl, xmlPreSignedUrl } = urls

    if (!pdfPreSignedUrl || !xmlPreSignedUrl) {
      toast({
        type: 'error',
        title: 'NF não enviada.',
        description:
          'O Profissional já emitiu notas fiscais este  mês.',
        position: 'bottom-right'
      })
      return
    }

    console.log(urls)

    const pdf = filePdf.file[0]
    const xml = fileXml.file[0]

    await uploadFile(pdf, pdfPreSignedUrl)
    await uploadFile(xml, xmlPreSignedUrl)
    setLoading(false)
  }

  const contextProps: ContextProps = {
    filePdf,
    fileXml,
    loading,
    handleUploadPdf,
    handleUploadXml,
    handleSave
  }

  return (
    <Context.Provider value={contextProps}>
      {children}
    </Context.Provider>
  )
}
