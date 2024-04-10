import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Home";
import Consultoria from "./Consultoria";
import Auditoria from "./Auditoria";
import Formacao from "./Formacao";
import Sobre from "./Sobre";
import Contactos from "./Contactos";
import Navbar from "./Navbar";
import Registo from "./Registo";
import './index.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/consultoria" element={<Consultoria />} />
          <Route path="/auditoria" element={<Auditoria />} />
          <Route path="/formacao" element={<Formacao />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contactos" element={<Contactos />} />
          <Route path="/registo" element={<Registo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
