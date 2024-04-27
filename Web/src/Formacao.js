import React from 'react';
import './index.css';
import './index.js';
import Footer from './Footer';
import { Card, CardMedia, Typography, CardContent, CardActionArea, Box, Container, Paper } from '@mui/material';
import { Link } from 'react-router-dom';

const formations = [
  { id: 1, title: 'Nutrição', description: 'Aprenda tudo o que precisa sobre nutrição para ter uma vida mais saudável.', image: 'nutrition-image.jpeg' },
  { id: 2, title: 'Excelência no Atendimento ao Cliente', description: 'Aprenda tudo sobre o que é necessário para manter os seus clientes felizes.', image: 'livros.jpeg' },
  { id: 3, title: 'Gestão de Pessoas', description: 'Aprenda tudo sobre gestão de pessoas, como gerir equipes, gerir o time e gerir o ambiente.', image: 'people-image.jpeg' },
  { id: 4, title: 'Gestão de Projetos', description: 'Aprenda tudo sobre gestão de projetos, como gerir equipes, gerir o time e gerir o ambiente.', image: 'project-management.jpeg' }
];

function Formacao() {
  return (
    <>
      <div className="content">
        <Typography variant="h1" textAlign={"center"}>
          Formação
        </Typography>
        <Typography variant="h4">
          Bem-vindo à nossa página de formação! Aqui, oferecemos uma variedade de cursos e treinamentos para ajudar você a desenvolver suas habilidades e conhecimentos.
        </Typography>
        <ul>
          <li>Cursos de gestão empresarial</li>
          <li>Treinamentos de liderança e desenvolvimento de equipes</li>
          <li>Workshops de inovação e criatividade</li>
        </ul>
      </div>
      <div className="content">
      <Box sx={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}> {/* Flex container for cards */}
        {formations.map((formation) => (
          <Card key={formation.id} sx={{ maxWidth: 250, my: 2 }}>
          <Link to={`/detalhes/${formation.id}`} state={{ formation }}>
            <CardActionArea href="/detalhes">
              <CardMedia
                component="img"
                height="200"
                image={formation.image}
                alt={formation.title}
                />
              <CardContent height={matchMedia}>
                <Typography variant="body2" color="text.primary" align='center' fontSize={20}>
                  {formation.title}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Link>
          </Card>
        ))}
      </Box>


      <Container>
        <Typography variant="h2" sx={{ my: 4, textAlign: 'center', color: "primary.main" }}>
          Formações
        </Typography>
        <Box sx={{ pt: 4, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: 4 }}>
          {formations.map((formation) => (
            <Paper elevation={3}>
              <Link to={`/detalhes/${formation.id}`} state={{ formation }}>
              <Box key={formation.id} sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                <Typography variant="h4" sx={{ color: "primary.main" }}>{formation.title}</Typography>
                <Typography variant="body2" sx={{ color: "primary.main" }}>{formation.description}</Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center'}}>
                  <image src={formation.image} alt={formation.title} style={{ width: '100%' }} />
                </Box>
              </Box>
              </Link>
            </Paper>
          ))}
        </Box>
      </Container>
      </div>
      <Footer />
    </>
  );
}

export default Formacao;
