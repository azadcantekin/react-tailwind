import React, { useState } from 'react';
import { Route, Routes } from "react-router";
import "./App.css";
import {Navbar} from "./components";
import LogIn from './screens/Auth/LogIn'
import Register from './screens/Auth/Register'
import AddJobAdvertisement from "./screens/Employeer/AddJobAdvertisement";

function App() {
  const [token, setToken] = useState();

  if(!token) {
    return <Register setToken={setToken} />
  }
  return (
    <div>
    <Navbar/>
    <Routes>
    <Route path="/login" exact element={<LogIn/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/1" exact element={<AddJobAdvertisement/>}/>
    </Routes>
    </div>
  );
}

export default App ;
