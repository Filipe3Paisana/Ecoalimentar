import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from './Logo';
// Importe os ícones do pacote que preferir, aqui está um exemplo com react-icons
import { AiOutlineMail, AiOutlineHome, AiOutlinePhone } from 'react-icons/ai';
import { FaLinkedin, FaFacebookF, FaInstagram } from 'react-icons/fa';
import './index.css'


function Footer() {

    const iconStyle = {
        fontSize: '1.5em', // Aumenta o tamanho do ícone
        margin: '0 10px' // Adiciona margem horizontal entre os ícones
      };

  return (
    <Card className="footer">
      <Card.Body>
        <Row>
          <Col sm={4} className="footer-info">
            {/* Outras informações da empresa podem ir aqui */}
            <Card.Title>Ecoalimentar</Card.Title>
            <Card.Text>
              Informações adicionais sobre a empresa ou conteúdo relevante.
            </Card.Text>
            {/* Pode adicionar um botão se necessário */}
          </Col>
          <Col sm={4} className="logo.png">
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px'}}>
              <Logo />
              <br></br>
              <br></br>
              <div className="footer-link">
                <a href="https://www.linkedin.com/in/ecoalimentar-lda-55835294/" style={iconStyle} target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                <a href="https://www.facebook.com/people/Ecoalimentar-Lda/100057453318303/" style={iconStyle} target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                <a href="https://ecoalimentar.pt" style={iconStyle} target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              </div>
            </div>
          </Col>
          <Col sm={4} className="footer-contact">
            <Card.Title>Fale connosco</Card.Title>
            {/* Adicione os detalhes de contato aqui */}
            <div><AiOutlineHome /> Rua de Moscavide, loja 16a, Parque das Nações, 1990-162 Lisboa</div>
            <br></br>
            <div><AiOutlinePhone /> (+351) 211346352</div>
            <br></br>
            <div><AiOutlineMail /> geral@ecoalimentar.pt</div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default Footer;
