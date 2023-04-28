import { List } from 'contexts'

import { HeaderSettings } from 'components/molecules'
import { AuthTemplate, CreateTemplate } from 'components/templates'

const Settings = () => {
  return (
    <AuthTemplate>
      <CreateTemplate title='Configurações'>
        <HeaderSettings />
      </CreateTemplate>
    </AuthTemplate>
  )
}

export default Settings
