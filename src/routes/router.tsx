import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/pages/MasterPage";
import Login from "../components/pages/Login";
import Professionals from "../components/pages/Professionals";
import RegisterProfessional from "../components/pages/RegisterProfessional";
import Projects from "../components/pages/Projects";
import {} from "react-router-dom";
import NewProjectFormik from "../components/pages/RegisterProjects/NewProjectFormik";
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
          <Route path="/projects" element={<Projects />} />
          <Route path="/NewProject" element={<NewProjectFormik />} />
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
