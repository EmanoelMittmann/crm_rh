import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from '../components/pages/Login'
import Home from '../components/pages/MasterPage'
import Professionals from '../components/pages/Professionals'
import Projects from '../components/pages/Projects'
import RegisterProfessional from '../components/pages/RegisterProfessional'
import {} from 'react-router-dom'
import NewProjectFormik from '../components/pages/RegisterProjects/NewProjectFormik'
import Settings from '../components/pages/Setting'
const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/professionals' element={<Professionals />} />
          <Route
            path='/RegisterProfessionals'
            element={<RegisterProfessional />}
          />
          <Route path='/projects' element={<Projects />} />
          <Route path='/NewProject' element={<NewProjectFormik />} />
          <Route path='/extrasHours' element={<Professionals />} />
          <Route path='/notes' element={<Professionals />} />
          <Route path='/reports' element={<Professionals />} />
          <Route path='/services' element={<Professionals />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/company' element={<Professionals />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Router
