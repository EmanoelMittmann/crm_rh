import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/pages/MasterPage";
import Login from "../components/pages/Login";
import Professionals from "../components/pages/Professionals";
import RegisterProfessional from "../components/pages/RegisterProfessional";
import Projects from "../components/pages/Projects";
import RegisterProjects from "components/pages/RegisterProjects/RegisterProjects";
const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/professionals" element={<Professionals />} />
          <Route
            path="/RegisterProfessionals"
            element={<RegisterProfessional />}
          />
          <Route path="/project" element={<Projects/>} />
          <Route path="/RegisterProjects" element={<RegisterProjects/>} />
          <Route path="/extrasHours" element={<Professionals />} />
          <Route path="/notes" element={<Professionals />} />
          <Route path="/reports" element={<Professionals />} />
          <Route path="/services" element={<Professionals />} />
          <Route path="/settings" element={<Professionals />} />
          <Route path="/company" element={<Professionals />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
