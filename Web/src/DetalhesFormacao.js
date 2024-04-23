import React from 'react';
import './index.css'
import Footer from './Footer';
import Button from '@mui/material/Button';

function DetalhesFormacao() {
  return (
    <>
    <div className="content">
        <h1>Detalhes da Formação</h1>
        <p>Titulo</p>
        <p>Descrição</p>
    </div>
    <Button variant="contained" color="primary">
        Inscrever-se
    </Button>
    </>
  );
}

export default DetalhesFormacao;