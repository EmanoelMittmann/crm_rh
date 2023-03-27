import { Navbar } from 'components/molecules/NavBar'
import { Sidebar } from 'components/molecules/SideBar'
import { AuthWrapper } from 'contexts'
import { Container } from './style'

type Props = {
  children?: JSX.Element
}

const Wrapper = ({ children }: Props) => {
  return (
    <AuthWrapper>
      <Container>
        <Sidebar />
        <div className='template'>
          <Navbar />
          {children}
        </div>
      </Container>
    </AuthWrapper>
  )
}

export default Wrapper
