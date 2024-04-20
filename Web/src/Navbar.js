import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa'; // Importando o ícone de perfil
import Logo from './Logo';
import './index.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <nav className="navbar">
      <a href="/">
        <Logo />
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

        <div className="profile-icon" onClick={toggleDropdown}>
          <FaUserCircle size={20} />
          {isDropdownOpen && (
            <div className="profile-dropdown">
              <Link to="/login">Login</Link>
              <br />
              <Link to="/registo">Registo</Link>
              <br />
              <Link to="/perfil">Perfil</Link>
            </div>

          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
