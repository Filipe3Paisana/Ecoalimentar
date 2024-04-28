import React from 'react';
import Footer from './Footer';
import { Typography, Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';


// Importe outros componentes ou estilos conforme necessário

function Contactos() {
  return (
    <>
    <div className="content">
    <Box sx={{ my: 2, p: 2 }}>
      <Typography variant="h2">Contactos</Typography>
        <Typography variant="body1" gutterBottom>
          Entre em contato conosco para mais informações sobre nossos serviços.
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <PhoneIcon />
            </ListItemIcon>
            <ListItemText primary="+123 456 7890" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <EmailIcon />
            </ListItemIcon>
            <ListItemText primary="contato@empresa.com" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <LocationOnIcon />
            </ListItemIcon>
            <ListItemText primary="Rua Exemplo, 123 - Cidade, País" />
          </ListItem>
        </List>
      </Box>
    </div>
    <Footer />
    </>
  );
}

export default Contactos;
