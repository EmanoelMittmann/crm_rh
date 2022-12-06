import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/pages/Home";
import Professionals from "../components/pages/Professionals";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Inicio" element={<Home/>}/>
          <Route path="/Profissionais" element={<Professionals/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
