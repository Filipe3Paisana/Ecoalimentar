import React from 'react';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { Typography, Card, CardContent, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import FactCheckIcon from '@mui/icons-material/FactCheck'; // Icone que representa auditorias

function Auditoria() {
  return (
    <>
      <div className="content">
        <Typography variant="h3" component="h1" gutterBottom>
          Auditoria
        </Typography>
        <Typography variant="body1" paragraph>
          A qualidade e segurança alimentar são, atualmente, preocupações constantes para os consumidores e administração pública. Nesta envolvente de pressão é crucial controlar e melhorar o desempenho dos produtos, serviços e processos, de forma a manter a competitividade e proteger a imagem.
        </Typography>
        <Typography variant="body1" paragraph>
          Desta forma, o uso de planos de auditoria é um importante mecanismo adotado em sistemas da qualidade nas empresas durante o ciclo produtivo. As auditorias permitem, através da visão e experiência de peritos, detectar problemas reais que, por serem quotidianos, podem passar despercebidos à própria empresa. Adicionalmente, as auditorias representam uma entrada de informação e uma visão distinta da realizada pela empresa. As auditorias são, também, ferramentas de melhoria que permitem à empresa conhecer a sua realidade e implementar medidas para melhorar o seu desempenho.
        </Typography>
        <Typography variant="body1" paragraph>
          De modo a dar resposta às necessidades das empresas, nomeadamente no cumprimento da legislação afeta à segurança alimentar, a Ecoalimentar disponibiliza os seguintes serviços de auditorias:
        </Typography>
        
        <Card elevation={2}>
          <CardContent>
            <List>
              {["Auditorias internas: BRCGS, IFS, FSSC 22000, ISO 22000, ISO 9001, Global G.A.P., entre outras.", "Inspeções ambiente de trabalho, higiene pessoal e instalações;", "Auditorias de levantamento de necessidades;", "Auditorias de revisão e acompanhamento aos sistemas HACCP;", "Auditorias integradas de Sistemas ISO - Qualidade, Ambiente e Segurança;", "Auditorias Externas a fornecedores e/ou distribuidores."].map((item, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <FactCheckIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary={item} />
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>

        <Typography variant="body1" paragraph>
          Entre em contato conosco para mais informações sobre nossos serviços de auditoria.
        </Typography>
        <Button variant="contained" component={Link} to="/contactos" color="primary">
          Entrar em Contacto
        </Button>
      </div>
      <Footer />
    </>
  );
}

export default Auditoria;
