import React from 'react';
import Footer from './Footer';
import { Link } from 'react-router-dom'; // Adicione esta importação se estiver usando react-router
import Button from '@mui/material/Button';

// Importe outros componentes ou estilos conforme necessário

function Auditoria() {
  return (
    <>
    <div className="content">
      <h1>Auditoria</h1>
      <p>Aqui você encontrará informações sobre nossos serviços de auditoria.</p>
      <ul>
        <li>Auditoria financeira</li>
        <li>Auditoria de sistemas</li>
        <li>Auditoria de processos</li>
      </ul>
      <p>Entre em contato conosco para mais informações sobre nossos serviços de auditoria.</p>
      <Button variant="contained" component={Link} to="/contactos">
          Entrar em Contacto
        </Button>
    </div>
    <Footer />
    </>
  );
}

export default Auditoria;
