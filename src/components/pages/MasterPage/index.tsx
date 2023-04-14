import { AuthProvider } from 'contexts'

import { Navbar } from '../../molecules/NavBar'
import { Sidebar } from '../../molecules/SideBar'
import { Master } from './style'

type Props = {
  children?: JSX.Element
}

// TODO: Remover MasterPage quando não for mais utilizada por completo.

/**
 *
 * @deprecated
 * Use AUTH TEMPLATE:
 * - import {AuthTemplate} from 'components/templates'
 */
const MasterPage = ({ children }: Props) => {
  return (
    <AuthProvider>
      <Master>
        <Sidebar />
        <div className='Main'>
          <Navbar />
          {children}
        </div>
      </Master>
    </AuthProvider>
  )
}

export default MasterPage
