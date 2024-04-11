import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="navbar">
      <a href="/">
        <img src="logo.png" alt="Logo da Ecoalimentar" className="logo" />
      </a>
      <div className="burger-menu" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      
      <div className={`links ${isMenuOpen ? 'active' : ''}`}>
        <Link to="/">Home</Link>
        <Link to="/consultoria">Consultoria</Link>
        <Link to="/auditoria">Auditoria</Link>
        <Link to="/formacao">Formação</Link>
        <Link to="/sobre">Sobre Nós</Link>
        <Link to="/contactos">Contactos</Link>
        <Link to="/registo">Registo</Link>
      </div>
    </nav>
  );
};

export default Navbar;
