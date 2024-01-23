import React from 'react';
import './App.css';
import Login from "./components/Login.js";
import Registro from "./components/Registro.js"
import Perfil from "./components/Perfil.js"
import Navbar from './components/Navbar.js';

import { BrowserRouter as Router, Routes, Router} from "from 'react-router-dom' ;
function App() {

  
  return (
    <div className="App">
      <Router>
        <div/>
        <Switch>
          <Route path="/" element={<Navbar/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/registro" element={<Registro/>}/>
          <Route path="/perfil" element={<Perfil/>}/>
          
        </Switch>
      </Router>
      <outer/>
      <Login/>
      <Registro/>
      <Perfil/>
    </div>
  );
}

export default App;
