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

  const handleSave = async () => {
    setLoading(true)

    if (verifyFiles()) {
      try {
        const pdfUrl =
          'https://ubi-labs-development.s3.amazonaws.com/uploads/85/pdf/2/MatheusTesteDaSilva.pdf?AWSAccessKeyId=AKIAYABDEGGGLHNOL454&Expires=1687193476&Signature=efYCI1HNzEtg7Tpj8OGvafWUFvw%3D'
        const xmlUrl =
          'https://ubi-labs-development.s3.amazonaws.com/uploads/85/xml/2/MatheusTesteDaSilva.xml?AWSAccessKeyId=AKIAYABDEGGGLHNOL454&Expires=1687193476&Signature=tmihB%2FMI1SurMJ5BhrqebTVORaY%3D'

        const uploadFile = async (file: File, url: string) => {
          try {
            const response = await fetch(url, {
              method: 'PUT',
              body: file
            })

            if (response.ok) {
            } else {
              console.error(
                'Erro ao enviar arquivo:',
                response.statusText
              )
            }
          } catch (error) {
            console.error('Erro ao enviar arquivo:', error)
          }
        }

        const pdfFile: File | undefined =
          filePdf?.file[0] instanceof File
            ? filePdf?.file[0]
            : undefined
        const xmlFile: File | undefined =
          fileXml?.file[0] instanceof File
            ? fileXml?.file[0]
            : undefined

        await Promise.all([
          pdfFile && uploadFile(pdfFile, pdfUrl),
          xmlFile && uploadFile(xmlFile, xmlUrl)
        ])

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
              description: 'Você será redirecionado para o início',
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
