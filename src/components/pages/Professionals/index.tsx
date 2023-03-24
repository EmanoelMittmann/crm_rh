import { AuthTemplate, ListTemplate } from 'components/templates'
import { Table, Filter } from 'components/organisms'

const MOCK = [
  {
    id: '6391f2d5b92ad76f6ab2394e',
    avatar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png',
    name: 'Lynne Gilmore',
    email: 'lynnegilmore@accupharm.com',
    status: true,
    company: 'UBISTART',
    phone: '(826) 470-3995',
    address: '311 Stryker Court, Martinez, Tennessee, 3122',
  },
  {
    id: '6391f2d5b92ad76f6ab2393e',
    avatar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png',
    name: 'Lynne Gilmore',
    email: 'lynnegilmore@accupharm.com',
    status: true,
    company: 'UBISTART',
    phone: '(826) 470-3995',
    address: '311 Stryker Court, Martinez, Tennessee, 3122',
  },
]

const Professionals = () => {
  return (
    <AuthTemplate>
      <ListTemplate title='Profissionais'>
        <Filter.Professionals />
        <Table.Professionals data={MOCK} />
      </ListTemplate>
    </AuthTemplate>
  )
}

export default Professionals
