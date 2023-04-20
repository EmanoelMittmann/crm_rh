import { List } from 'contexts'

import { AuthTemplate, ListTemplate } from 'components/templates'

const Settings = () => {
  return (
    <AuthTemplate>
      <List.Settings.Provider>
        <ListTemplate title='Settings'>
          <>oi</>
        </ListTemplate>
      </List.Settings.Provider>
    </AuthTemplate>
  )
}

export default Settings
