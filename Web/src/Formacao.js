import React from 'react';
import './index.css'
import Footer from './Footer';
import Button from '@mui/material/Button';

function Formacao() {
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
          <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" style={{ maxWidth: '80%', height: 'auto', margin: 'auto' }}>
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="livros.jpeg" className="d-block w-100" alt="First slide image description"/>
                <div className="carousel-caption d-none d-md-block">
                  <h2> Formação Exemplo </h2>
                  <p>Some representative placeholder content for the first slide.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src="livros.jpeg" className="d-block w-100" alt="Second slide image description"/>
                <div className="carousel-caption d-none d-md-block">
                  <h3>Formação Exemplo 2</h3>
                  <p>Some representative placeholder content for the second slide.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src="livros.jpeg" className="d-block w-100" alt="Third slide image description"/>
                <div className="carousel-caption d-none d-md-block">
                  <h4>Formação Exemplo 3</h4>
                  <p>Some representative placeholder content for the third slide.</p>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
      </div>
      <Footer />
    </>
  );
}

export default Formacao;
