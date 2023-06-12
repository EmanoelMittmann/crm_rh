import { List } from 'contexts'

import { AuthTemplate, ReleaseTemplate } from 'components/templates'

const ReleaseNotes = () => {
  return (
    <AuthTemplate>
      <List.UserNotes.Provider>
        <ReleaseTemplate
          arrow={true}
          title='Notas Fiscais'
          btnText='Enviar NF'
          path='/'
        >
          <></>
        </ReleaseTemplate>
      </List.UserNotes.Provider>
    </AuthTemplate>
  )
}

export default ReleaseNotes
