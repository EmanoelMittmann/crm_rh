import { List } from 'contexts'

import RegisterOrderOfServiceWrap from './wrap'

const RegisterOrderOfService = () => {
  return (
    <List.OrderOfServiceprofessionalOS.Provider>
      <RegisterOrderOfServiceWrap />
    </List.OrderOfServiceprofessionalOS.Provider>
  )
}

export default RegisterOrderOfService
