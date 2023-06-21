import { ReactNode, createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { toast } from '@stardust-ds/react'
import { filesize } from 'filesize'

import api from 'api'
import { routes } from 'routes'

import { ContextProps, IFileProps } from './types'

export const Context = createContext({} as ContextProps)

export const Provider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate()
  const [filePdf, setFilePdf] = useState<IFileProps>()
  const [fileXml, setFileXml] = useState<IFileProps>()
  const [loading, setLoading] = useState<boolean>(true)
  const data = new FormData()

  const contextProps = {
    filePdf,
    fileXml,
    loading,
    handleUploadPdf,
    handleUploadXml,
    handleSave
  }

  function handleUploadPdf(file: any) {
    const data = {
      file,
      fileSize: filesize(file[0].size)
    } as IFileProps
    setFilePdf(data)
  }

  function handleUploadXml(file: any) {
    const data = {
      file,
      fileSize: filesize(file[0].size)
    } as IFileProps
    setFileXml(data)
  }

  function verifyFiles() {
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

  async function handleSave() {
    setLoading(true)

    if (verifyFiles())
      try {
        await api
          .post(routes.notes.user, data, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          })
          .then(({ data }) => {
            if (data.error) {
              return toast({
                type: 'error',
                title: 'NF não enviada',
                description: data.error[0],
                position: 'bottom-right'
              })
            }
            toast({
              type: 'success',
              title: 'NF enviada com sucesso!',
              description: 'Você será redirecionado para o inicio',
              position: 'bottom-right'
            })
            navigate(-1)
          })
      } catch (error) {
        toast({
          type: 'error',
          title: 'NF não enviada.',
          description:
            'Verifique os dados de CNPJ e valor e tente enviar novamente',
          position: 'bottom-right'
        })
      }
    setLoading(false)
  }

  return (
    <Context.Provider value={contextProps}>
      {children}
    </Context.Provider>
  )
}
