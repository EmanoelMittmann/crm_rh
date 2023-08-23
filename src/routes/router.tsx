import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Companys from 'components/pages/Companys'
import Contract from 'components/pages/Contract'
import DetailsHoursProfessional from 'components/pages/DetailsHoursProfessional'
import ExtraHoursRh from 'components/pages/ExtraHoursRh'
import Hours from 'components/pages/HoursProfessional'
import Jobs from 'components/pages/Jobs'
import Notes from 'components/pages/Notes'
import OrderOfService from 'components/pages/OrderOfService'
import { RegisterCompany } from 'components/pages/RegisterCompany'
import RegisterOrderOfService from 'components/pages/RegisterOrderOfService'
import RegisterProjects from 'components/pages/RegisterProjects'
import ReleaseNotes from 'components/pages/ReleaseNotes'
import Payments from 'components/pages/Reports'
import SendingHours from 'components/pages/SendingHours'
import Settings from 'components/pages/Setting'
import StatusProject from 'components/pages/StatusProject'
import { TechLead } from 'components/pages/TechLead'
import TypesProject from 'components/pages/TypesProject'
import UploadNotes from 'components/pages/UploadNotes'

import Login from '../components/pages/Login'
import Home from '../components/pages/MasterPage'
import Professionals from '../components/pages/Professionals'
import Projects from '../components/pages/Projects'
import RegisterProfessional from '../components/pages/RegisterProfessional'

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />

          <Route path='/professionals' element={<Professionals />} />
          <Route path='/professional'>
            <Route path='new' element={<RegisterProfessional />} />
            <Route path=':id' element={<RegisterProfessional />} />
          </Route>

          <Route path='/project' element={<Projects />} />
          <Route path='/project'>
            <Route path='new' element={<RegisterProjects />} />
            <Route path=':id' element={<RegisterProjects />} />
          </Route>

          <Route path='/extrasHours' element={<ExtraHoursRh />} />
          <Route path='/notes' element={<Notes />} />
          <Route path='/reports' element={<Payments />} />
          <Route
            path='*'
            handle={() => (window.location.href = '/')}
          />

          <Route
            path='/orderOfService'
            element={<OrderOfService />}
          />
          <Route path='/orderOfService'>
            <Route path='new' element={<RegisterOrderOfService />} />
          </Route>

          <Route path='/jobs' element={<Jobs />} />
          <Route path='/typeProject' element={<TypesProject />} />
          <Route path='/statusProject' element={<StatusProject />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/company' element={<Companys />} />
          <Route path='/company'>
            <Route path='new' element={<RegisterCompany />} />
            <Route path=':id' element={<RegisterCompany />} />
          </Route>
          <Route path='/contractHistory' element={<Contract />} />
          <Route path='/releaseHours' element={<Hours />} />
          <Route path='/techLeadReview' element={<TechLead />} />
          <Route path='/sendingHours' element={<SendingHours />} />
          <Route path='/releaseNotes' element={<ReleaseNotes />} />
          <Route path='/uploadNotes' element={<UploadNotes />} />

          <Route
            path='/detailsHours'
            element={<DetailsHoursProfessional />}
          >
            <Route
              path=':id'
              element={<DetailsHoursProfessional />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Router
