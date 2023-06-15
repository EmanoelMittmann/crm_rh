import React from 'react'

import { Release as ReleaseNotes } from 'contexts'

import { Release } from 'components/organisms'
import { AuthTemplate, CreateTemplate } from 'components/templates'

const UploadNotes = () => {
  return (
    <AuthTemplate>
      <ReleaseNotes.Notes.Provider>
        <CreateTemplate title='Enviar NF'>
          <Release.UploadNotes />
        </CreateTemplate>
      </ReleaseNotes.Notes.Provider>
    </AuthTemplate>
  )
}

export default UploadNotes
