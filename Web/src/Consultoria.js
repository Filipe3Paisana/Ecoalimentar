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
        <br></br>
        <p>As empresas necessitam de cumprir a legislação em vigor para poderem continuar as suas atividades. No entanto, para quem pretende expandir o seu negocio ou mesmo manter-se competitivo face aos seus concorrentes, há sempre algo mais a acrescentar.Para tal é necessário por um lado ter um perfeito conhecimento do seu negocio (possível através de uma análise sistemática por indicadores) e por outro manter-se criativo por forma a posicionar-se corretamente adivinhando as expectativas e necessidades dos seus clientes.De acordo com a fase de desenvolvimento da sua empresa terá necessidade de serviços distintos. Desta forma propomos uma prestação de serviços de forma integrada com o funcionamento da empresa, sob a forma de módulos, os quais serão implementados de acordo com as necessidades do cliente.</p>
        <br/>
        <p>Implementação dos seguintes referenciais:</p>
        <ul>
          <li>- IFS - International Food Standard;</li>
          <li>- BRCG - British Retail Consortium Global Standard;</li>
          <li>- FSSC 22000 - Food Safety System Certification;</li>      
          <li>- GLOBAL G.A.P.;</li>
          <li>- GRASP;</li>
          <li>- Sistemas HACCP (Codex Alimentarius, Regulamentos n.º 852/2004 e n.º 853/2004);</li>
          <li>- Sistemas de Gestão da Qualidade (ISO 9001);</li>
          <li>- Sistemas de Gestão da Segurança Alimentar (ISO 22000);</li>
          <li>- Sistemas de Gestão Ambiental (ISO 14001);</li>
          <li>- Sistemas de Gestão de Segurança e Higiene no Trabalho (ISO 45001);</li>
          <li>• Acompanhamento / Manutenção de Sistemas de Gestão da Qualidade e de Segurança Alimentar (Outsourcing);</li>
          <li>• Apoio no cumprimento da legislação vigente aplicável.</li>
        </ul>
        <br/>
        <p>Prestação de serviços modulares:</p>
        <ul>
          <li>- Implementação de Sistemas HACCP (Codex Alimentarius, Regulamentos n.º 852/2004 e n.º 853/2004);</li>
          <li>- Gestão de ocurrencias</li>
          <li>- Gestção de indicadores </li>
          <li>- Gestão de plano de análise</li>  
          <li>- Gestão de plano de Formação</li>
          <li>- Indicadores de qualidade de serviço;</li>
          <li>- Gestão documental;</li>
          <li>- Organização e manutenção da legislação adequada ao sector;</li>
          <li>- Qualificação de fornecedores;</li>
          <li>- Validação de rotulagem;</li>
          <li>- Validação de manuais;</li>
          <li>- Validação de produto;</li>
          <p>- Optimização do Processo de importação de produtos fora da UE:</p>
            <ul>
              <li>- inspeção pré-embarque;</li>
              <li>- Teste e certificados aplicaveis;</li>
              <li>- Ensaios;</li>
            </ul>
        </ul>
        <p>Entre em contato conosco para saber mais sobre como podemos ajudar o seu negócio a crescer e prosperar.</p>
      </Container>
      </div>
      <Footer/>
    </>
  );
}

export default Consultoria;
