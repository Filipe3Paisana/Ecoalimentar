import React from 'react';
import Footer from './Footer';

// Importe outros componentes ou estilos conforme necessário

function ConsultoriaPage() {

  return (
    <>
    <div className="content">
      <h1>Consultoria</h1>
      <p>Bem-vindo à nossa página de consultoria!</p>
      <p>
        Aqui, oferecemos consultoria especializada em várias áreas, incluindo, mas não limitado a:
      </p>
      <ul>
        <li>Consultoria empresarial</li>
        <li>Consultoria tecnológica</li>
        <li>Consultoria de marketing</li>
        <li>Consultoria financeira</li>
      </ul>
      <p>
        Entre em contato conosco para saber mais sobre como podemos ajudar o seu negócio a crescer e prosperar.
      </p>
    </div>
    <Footer />
    </>
  );
}

export default ConsultoriaPage;
