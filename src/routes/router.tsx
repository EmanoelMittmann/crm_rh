import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewProject from "../components/organisms/NewProject";
import Home from "../components/pages/MasterPage";
import Login from "../components/pages/Login";
import Professionals from "../components/pages/Professionals";
import RegisterProfessional from "../components/pages/RegisterProfessional";
import Projects from "../components/pages/Projects";
import { } from 'react-router-dom'
const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/Home" element={<Home/>}/>
          <Route path="/Professionals" element={<Professionals/>}/>
          <Route path="/RegisterProfessionals" element={<RegisterProfessional/>}/>
          <Route path="/Projects" element={<Professionals/>}/>
          <Route path="/Projects" element={<Projects/>}/>
            <Route path="NewProject" element={<NewProject/>}/>
          <Route path="/ExtrasHours" element={<Professionals/>}/>
          <Route path="/Notes" element={<Professionals/>}/>
          <Route path="/Reports" element={<Professionals/>}/>
          <Route path="/Services" element={<Professionals/>}/>
          <Route path="/Settings" element={<Professionals/>}/>
          <Route path="/Company" element={<Professionals/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
