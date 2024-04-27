import React from 'react';
import './index.css'
import Footer from './Footer';
import Button from '@mui/material/Button';
import { useLocation } from 'react-router-dom';
import { Card, CardMedia, Typography, CardContent, CardActionArea, Box } from '@mui/material';


function DetalhesFormacao() {
  
  const location = useLocation();
  const formation = location.state ? location.state.formation : null;

  // Redirect or handle the missing formation info
  if (!formation) {
    return <Typography variant="h6" style={{ padding: 20 }}>Formation information is missing.</Typography>;
  }
  
  return (
    <>
    <div className="content">
      <Box>
        <Typography variant="h2">{formation.title}</Typography>
        <img src={formation.image} alt={formation.title} style={{ width: '100%'}} />
        <Typography variant="body1">{formation.description}</Typography>
      </Box>
    </div>
    <Button variant="contained" color="primary">
        Inscrever-se
    </Button>
    <Footer />
    </>
  );
}

export default DetalhesFormacao;