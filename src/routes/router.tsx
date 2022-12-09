import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/pages/Home";
import Professionals from "../components/pages/Professionals";
import Login from "../components/pages/Login";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Professionals" element={<Professionals/>}/>
          <Route path="/Projects" element={<Professionals/>}/>
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
