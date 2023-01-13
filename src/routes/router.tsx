import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/pages/MasterPage";
import Login from "../components/pages/Login";
import Professionals from "../components/pages/Professionals";
import RegisterProfessional from "../components/pages/RegisterProfessional";
import Projects from "../components/pages/Projects";
import FormikProject from "../components/pages/RegisterProjects/NewProjectFormik";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Professionals" element={<Professionals />} />
          <Route
            path="/RegisterProfessionals"
            element={<RegisterProfessional />}
          />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/NewProject" element={<FormikProject />} />
          <Route path="/ExtrasHours" element={<Professionals />} />
          <Route path="/Notes" element={<Professionals />} />
          <Route path="/Reports" element={<Professionals />} />
          <Route path="/Services" element={<Professionals />} />
          <Route path="/Settings" element={<Professionals />} />
          <Route path="/Company" element={<Professionals />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
