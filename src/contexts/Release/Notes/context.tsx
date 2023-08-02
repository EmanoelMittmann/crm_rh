import { ReactNode, createContext, useState } from 'react'

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
        toast({
          type: 'error',
          title: 'Erro ao enviar nota fiscal',
          description: error,
          position: 'bottom-right'
        })
      }

      if (pdfPreSignedUrl) {
        returnData.pdfPreSignedUrl = pdfPreSignedUrl
      }

      if (xmlPreSignedUrl) {
        returnData.xmlPreSignedUrl = xmlPreSignedUrl
      }
    } catch (error) {
      console.error(error)
    }

    return returnData
  }

  const uploadFile = async (file: File, url: string) => {
    const fileType =
      file.type === 'text/xml' ? 'application/xml' : file.type
    try {
      await axios.put(url, file, {
        headers: {
          'Content-Type': fileType
        }
      })

      return true
    } catch (error) {
      console.error(error)
      return false
    }
  }

  const handleSave = async () => {
    setLoading(true)

    if (!filePdf || !fileXml) {
      return
    }

    const urls = await handleGetUploadUrlSigned()
    const { pdfPreSignedUrl, xmlPreSignedUrl } = urls

    if (!pdfPreSignedUrl || !xmlPreSignedUrl) {
      return
    }
    const pdf = filePdf.file[0]
    const xml = fileXml.file[0]

    await Promise.all([
      await uploadFile(pdf, pdfPreSignedUrl),
      await uploadFile(xml, xmlPreSignedUrl)
    ])

    toast({
      type: 'success',
      title: 'Nota fiscal enviada com sucesso',
      position: 'bottom-right'
    })

    setFilePdf(undefined)
    setFileXml(undefined)

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
