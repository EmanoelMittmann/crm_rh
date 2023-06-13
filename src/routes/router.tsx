import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Companys from 'components/pages/Companys'
import Jobs from 'components/pages/Jobs'
import Notes from 'components/pages/Notes'
import { RegisterCompany } from 'components/pages/RegisterCompany'
import RegisterProjects from 'components/pages/RegisterProjects'
import ReleaseNotes from 'components/pages/ReleaseNotes'
import Settings from 'components/pages/Setting'
import StatusProject from 'components/pages/StatusProject'
import TypesProject from 'components/pages/TypesProject'

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

          <Route path='/extrasHours' element={<Professionals />} />
          <Route path='/notes' element={<Notes />} />
          <Route path='/reports' element={<Professionals />} />
          <Route path='/services' element={<Professionals />} />
          <Route path='/jobs' element={<Jobs />} />
          <Route path='/typeProject' element={<TypesProject />} />
          <Route path='/statusProject' element={<StatusProject />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/company' element={<Companys />} />
          <Route path='/company'>
            <Route path='new' element={<RegisterCompany />} />
            <Route path=':id' element={<RegisterCompany />} />
          </Route>
          <Route path='/releaseHours' element={<Professionals />} />
          <Route path='/releaseNotes' element={<ReleaseNotes />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Router
