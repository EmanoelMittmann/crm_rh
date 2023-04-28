import { List } from 'contexts'

import { HeaderSettings } from 'components/molecules'
import { AuthTemplate, ListTemplate } from 'components/templates'

const Settings = () => {
  return (
    <AuthTemplate>
      <List.Settings.Provider>
        <ListTemplate title='Configurações' arrow={true}>
          <HeaderSettings />
        </ListTemplate>
      </List.Settings.Provider>
    </AuthTemplate>
  )
}

export default Settings
