import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Home";
import Consultoria from "./Consultoria";
import Auditoria from "./Auditoria";
import Formacao from "./Formacao";
import DetalhesFormacao from "./DetalhesFormacao";
import Sobre from "./Sobre";
import Contactos from "./Contactos";
import Navbar from "./Navbar";
import Registo from "./Registo";
import Login from "./Login";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <div className="navbar">
            <Navbar />
          </div>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/consultoria" element={<Consultoria />} />
            <Route path="/auditoria" element={<Auditoria />} />
            <Route path="/formacao" element={<Formacao />} />
            <Route path="/detalhes" element={<DetalhesFormacao />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contactos" element={<Contactos />} />
            <Route path="/registo" element={<Registo />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
