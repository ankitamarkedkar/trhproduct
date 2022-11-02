import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Forgotpassword from './pages/Forgotpassword';
import Dashboard from './pages/Dashboard';
import Sidebar from './pages/Sidebar';
import Header from './pages/Header';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>

      <Routes>
      <Route exact path="/"  element={<Home/>}></Route>

      <Route exact path="/signin" element={<Signin />}></Route>
      <Route exact path="/signup" element={<Signup />}></Route>
      <Route exact path="/forgotpassword" element={<Forgotpassword/>}></Route>
      <Route exact path="/dashboard" element={<Dashboard/>}></Route>
      <Route exact path="/sidebar" element={<Sidebar/>}></Route>
      


      </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
