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
      <br></br>
      <p>
        A qualidade e segurança alimentar são, atualmente, preocupações constantes para os consumidores e administração pública. Nesta envolvente de pressão é crucial controlar e melhorar o desempenho dos produtos, serviços e processos, de forma a manter a competitividade e proteger a imagem.
      </p>
      <p>
        Desta forma, o uso de planos de auditoria é um importante mecanismo adoptado em sistemas da qualidade nas empresas durante o ciclo produtivo. As auditorias permitem, através da visão e experiência de peritos, detectar problemas reais que, por serem quotidianos, podem passar despercebidos à própria empresa. Adicionalmente, as auditorias representam uma entrada de informação e uma visão distinta da realizada pela empresa. As auditorias são, também, ferramentas de melhoria que permitem à empresa conhecer a sua realidade e implementar medidas para melhorar o seu desempenho.
      </p>
      <p>
        De modo a dar resposta às necessidades das empresas, nomeadamente no cumprimento da legislação afecta à segurança alimentar, a Ecoalimentar disponibiliza os seguintes serviços de auditorias:
      </p> 
      <ul>
        <li>- Auditorias internas: BRCGS, IFS, FSSC 22000, ISO 22000, ISO 9001, Global G.A.P., entre outras.</li>
        <li>- Inspeções ambiente de trabalho, higiene pessoal e instalações;</li>
        <li>- Auditorias de levantamento de necessidades;</li>
        <li>- Auditorias de revisão e acompanhamento aos sistemas HACCP;</li>
        <li>- Auditorias integradas de Sistemas ISO - Qualidade, Ambiente e Segurança;</li>
        <li>- Auditorias Externas a fornecedores e/ou distribuidores.</li>
      </ul>
      <br></br>
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
