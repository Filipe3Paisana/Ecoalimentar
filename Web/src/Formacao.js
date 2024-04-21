import React from 'react';
import { Link } from 'react-router-dom'; // Importar Link de react-router-dom
import Footer from './Footer';

// Importe outros componentes ou estilos conforme necessário

function ConsultoriaPage() {
  return (
    <>
      <div className="content">
        <h1>Formação</h1>
        <p>Bem-vindo à nossa página de formação! Aqui, oferecemos uma variedade de cursos e treinamentos para ajudar você a desenvolver suas habilidades e conhecimentos.</p>
        <ul>
          <li>Cursos de gestão empresarial</li>
          <li>Treinamentos de liderança e desenvolvimento de equipes</li>
          <li>Workshops de inovação e criatividade</li>
        </ul>
        <div className="row">
          <div className="col-md-2">
            <div className="card">
              <img src="logo.png" className="card-img-top" alt="Logotipo do curso" />
              <div className="card-body">
                <h5 className="card-title">Formação Exemplo</h5>
                <p className="card-text">Este é um cartão mais largo com texto de apoio abaixo como uma introdução natural para conteúdo adicional. Este conteúdo é um pouco mais longo.</p>
                <p className="card-text"><small className="text-secondary">A realizar em 2024</small></p>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="card">
              <img src="logo.png" className="card-img-top" alt="Logotipo do curso" />
              <div className="card-body">
                <h5 className="card-title">Formacao Exemplo</h5>
                <p className="card-text">Este é um cartão mais largo com texto de apoio abaixo como uma introdução natural para conteúdo adicional. Este conteúdo é um pouco mais longo.</p>
                <p className="card-text"><small className="text-secondary">A realizar em 2025</small></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ConsultoriaPage;
