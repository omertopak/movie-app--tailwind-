import React from "react";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Navbar from "../components/Navbar";
import { Routes,Route } from "react-router-dom";
const AppRouter = () => {
  return 
  <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<main/>}/>
    {/* <Login/> */}
    {/* <Register/> */}
     </Routes>
  </>
  ;
};

export default AppRouter;
