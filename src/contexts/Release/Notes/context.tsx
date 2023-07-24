import { ReactNode, createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { toast } from '@stardust-ds/react'
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
  const navigate = useNavigate()
  const [filePdf, setFilePdf] = useState<IFileProps>()
  const [fileXml, setFileXml] = useState<IFileProps>()
  const [loading, setLoading] = useState<boolean>(true)
  const data = new FormData()

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

  const verifyFiles = () => {
    if (!filePdf) {
      toast({
        type: 'error',
        title: 'NF não enviada.',
        description: 'Faça Upload o DANFE em PDF',
        position: 'bottom-right'
      })
      return false
    }

    if (!fileXml) {
      toast({
        type: 'error',
        title: 'NF não enviada.',
        description: 'Faça Upload o NF-e em XML',
        position: 'bottom-right'
      })
      return false
    }

    data.append('param_name_file', filePdf.file[0] as any)
    data.append('param_name_xml', fileXml.file[0] as any)

    return true
  }

  const handleGetUploadUrlSigned = async () => {
    try {
      const { data } = await api.post(routes.notes.user)
      const { pdfPreSignedUrl, xmlPreSignedUrl, error } =
        data as FiscalNotesProfissionalsData
      if (error) {
        toast({
          type: 'error',
          title: 'NF não enviada.',
          description: 'Profissional já lançou nota fiscal neste mês',
          position: 'bottom-right'
        })
        return
      }

      return {
        pdfPreSignedUrl,
        xmlPreSignedUrl
      }
    } catch (error) {
      console.log(error)
      return null
    }
  }

  const uploadFile = async (file: File, url: string) => {
    const fileBuffer = await file.arrayBuffer()

    try {
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': file.type
        },
        body: fileBuffer
      })

      const data = await response.json()

      console.log(data)
    } catch (error) {
      console.error('Erro ao enviar arquivo:', error)
    }
  }

  const handleSave = async () => {
    setLoading(true)

    if (verifyFiles()) {
      const urls = await handleGetUploadUrlSigned()
      const { pdfPreSignedUrl, xmlPreSignedUrl } = urls as {
        pdfPreSignedUrl: string
        xmlPreSignedUrl: string
      }

      if (!pdfPreSignedUrl || !xmlPreSignedUrl) {
        toast({
          type: 'error',
          title: 'NF não enviada.',
          description: 'Erro ao enviar as Ulrs de upload',
          position: 'bottom-right'
        })
      }

      const pdfFile: File | undefined =
        filePdf?.file[0] instanceof File
          ? filePdf?.file[0]
          : undefined
      const xmlFile: File | undefined =
        fileXml?.file[0] instanceof File
          ? fileXml?.file[0]
          : undefined

      const [res1, res2] = await Promise.all([
        pdfFile && uploadFile(pdfFile, pdfPreSignedUrl),
        xmlFile && uploadFile(xmlFile, xmlPreSignedUrl)
      ])

      console.log(res1, res2)
    }

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
