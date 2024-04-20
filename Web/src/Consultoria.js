// src/pages/Consultoria.js
import React from 'react';
import Footer from './Footer';
import {Container} from '@mui/material';

import './index.css'

function Consultoria() {
  return (
    <>
    <div className="content">
    <Container component="main" maxWidth="md">
        <h1>Consultoria</h1>
        <p>Bem-vindo à nossa página de consultoria!</p>
        <p>Aqui, oferecemos consultoria especializada em várias áreas, incluindo, mas não limitado a:</p>
        <ul>
          <li>Consultoria empresarial</li>
          <li>Consultoria tecnológica</li>
          <li>Consultoria de marketing</li>      
          <li>Consultoria financeira</li>
        </ul>
        <p>Entre em contato conosco para saber mais sobre como podemos ajudar o seu negócio a crescer e prosperar.</p>
      </Container>
      </div>
      <Footer/>
    </>
  );
}

export default Consultoria;
