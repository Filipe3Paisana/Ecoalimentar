import React from 'react';
import Footer from './Footer';

// Importe outros componentes ou estilos conforme necessário

function ConsultoriaPage() {
  return (
    <>
    <div className="content">
      <h1>Contactos</h1>
      <p>Entre em contato conosco para mais informações sobre nossos serviços.</p>
      <form>
        <label>
          Nome:
          <input type="text" name="name" required />
        </label>
        <label>
          Email:
          <input type="email" name="email" required />
        </label>

        <label>
          Mensagem:
          <textarea name="message" required></textarea>
        </label>
          <button type="submit">Enviar</button>
      </form>
    </div>
    <Footer />
    </>
  );
}

export default ConsultoriaPage;
