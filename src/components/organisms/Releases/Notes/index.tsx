import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { Release } from 'contexts'

import { Button, IconWarn } from 'components/atoms'
import { DropZone } from 'components/atoms/Dropzone'

import { Column, Container, Rows, Warn } from './style'

export const UploadNotes = () => {
  const navigate = useNavigate()

  const {
    filePdf,
    fileXml,
    handleUploadPdf,
    handleUploadXml,
    handleSave
  } = useContext(Release.Notes.Context)
  return (
    <Container>
      <Rows content='start'>
        <Warn>
          <IconWarn />O envio das NF deve ser feito até o dia 25 de
          cada mês.
        </Warn>
      </Rows>
      <Rows content='center'>
        <Column>
          <DropZone
            type='application/pdf'
            onUpload={handleUploadPdf}
            data={filePdf}
          />
          <DropZone
            type='text/xml'
            xml='xml'
            onUpload={handleUploadXml}
            data={fileXml}
          />
        </Column>
      </Rows>
      <Rows content='center'>
        <Button.Updade
          saveButtonName='Salvar'
          cancelButtonName='Cancelar'
          onCancel={() => navigate(-1)}
          onSave={() => handleSave()}
        />
      </Rows>
    </Container>
  )
}
