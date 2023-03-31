import React from "react";
import {BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./component/login";
import Error from "./component/error1";
import Admin from "./component/navbar";
import Siging from "./component/sign";
export default function App(){
  return(
  <>
<BrowserRouter>
  <Routes> 
  <Route path="/" element={<Siging/>}/>
    <Route path="/login" element={<Login/>} />
    <Route path="/admin" element={<Admin/>} />
    <Route path='/error' element={<Error/>} />
  </Routes>
  </BrowserRouter>
     </>
  )
}