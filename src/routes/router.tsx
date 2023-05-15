import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Jobs from 'components/pages/Jobs'
import RegisterProjects from 'components/pages/RegisterProjects'
import Settings from 'components/pages/Setting'
import StatusProject from 'components/pages/StatusProject'
import TypesProject from 'components/pages/TypesProject'

import Login from '../components/pages/Login'
import Home from '../components/pages/MasterPage'
import Professionals from '../components/pages/Professionals'
import Projects from '../components/pages/Projects'
import RegisterProfessional from '../components/pages/RegisterProfessional'
import NewProjectFormik from '../components/pages/RegisterProjects/NewProjectFormik'
const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/professionals' element={<Professionals />} />
          <Route path='/RegisterProfessionals'>
            <Route path='' element={<RegisterProfessional />} />
            <Route path=':id' element={<RegisterProfessional />} />
          </Route>
          <Route path='/projects' element={<Projects />} />
          <Route path='/NewProject' element={<NewProjectFormik />} />
          <Route path='/project' element={<Projects />} />
          <Route
            path='/RegisterProjects'
            element={<RegisterProjects />}
          />
          <Route path='/extrasHours' element={<Professionals />} />
          <Route path='/notes' element={<Professionals />} />
          <Route path='/reports' element={<Professionals />} />
          <Route path='/services' element={<Professionals />} />
          <Route path='/jobs' element={<Jobs />} />
          <Route path='/typeProject' element={<TypesProject />} />
          <Route path='/statusProject' element={<StatusProject />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/company' element={<Professionals />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Router
