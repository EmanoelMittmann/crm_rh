import { useNavigate } from 'react-router-dom'

import { List } from 'contexts'

import DetailsHours from 'components/organisms/Releases/Hours/Options/DetailsHours'
import { AuthTemplate, DetailsTemplate } from 'components/templates'

const DetailsHoursProfessional = () => {
  const navigate = useNavigate()
  return (
    <AuthTemplate>
      <List.ProfessionalHours.Provider>
        <DetailsTemplate title='Detalhes' arrow={false}>
          <DetailsHours />
        </DetailsTemplate>
      </List.ProfessionalHours.Provider>
    </AuthTemplate>
  )
}

export default DetailsHoursProfessional
