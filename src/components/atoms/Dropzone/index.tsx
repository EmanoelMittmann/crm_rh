import Dropzone, { useDropzone } from 'react-dropzone'

import { IconInvoice } from '../Icons/IconInvoice'
import { Column, DropContainer, Message, Span, Text } from './style'

export const DropZone = ({ data, xml, onUpload, type }: any) => {
  function renderMessage(
    isDragActive: boolean,
    isDragReject: boolean
  ) {
    if (!isDragActive) {
      return (
        <Message>
          Faça o upload da{' '}
          {xml === 'xml' ? 'NF-e em XML' : 'DANFE em PDF'}
        </Message>
      )
    }
    if (isDragReject) {
      return <Message>Arquivo não suportado</Message>
    }

    return <Message>Solte o arquivos aqui</Message>
  }

  return (
    <Dropzone
      accept={type}
      onDropAccepted={onUpload}
      maxFiles={1}
      maxSize={5242880}
    >
      {({
        getRootProps,
        getInputProps,
        isDragActive,
        isDragReject
      }) => (
        <DropContainer {...getRootProps()}>
          {!data ? (
            <Column>
              <IconInvoice />
              {renderMessage(isDragActive, isDragReject)}
              <Text>
                Largue os arquivos aqui ou <Span>clique aqui </Span>
                para fazer upload
              </Text>
            </Column>
          ) : (
            <Column>
              <Message>{data.file[0].name}</Message>
              <Text>{data.fileSize}</Text>
              <Span>Alterar</Span>
            </Column>
          )}
          <input {...getInputProps()} />
        </DropContainer>
      )}
    </Dropzone>
  )
}
