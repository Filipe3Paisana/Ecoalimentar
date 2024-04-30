import React from 'react';
import { Card, CardContent, Grid, Typography, Link as MuiLink } from '@mui/material';
import { styled } from '@mui/system';
import Logo from './Logo';
// Import icons from @mui/icons-material
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from "react-router-dom";

// Create a styled Link component for icon links
const IconLink = styled(MuiLink)({
  margin: '0 10px', // Adjust spacing as needed
  fontSize: '1.5em', // Increase icon size
});

function Footer() {
  return (
    <Card className="footer" sx={{ mt: 4 }}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item sm={4}>
            <Typography variant="h6">Fale connosco</Typography>
            <Typography><MailOutlineIcon /> geral@ecoalimentar.pt</Typography>
            <Typography><PhoneOutlinedIcon /> (+351) 211346352</Typography>
            <Typography><HomeOutlinedIcon /> Rua de Moscavide, loja 16a, Parque das Nações, 1990-162 Lisboa</Typography>
          </Grid>
          <Grid item sm={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 2 }}>
            <Logo />
            <Grid container justifyContent="center">
              <IconLink href="https://www.linkedin.com/in/ecoalimentar-lda-55835294/" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon />
              </IconLink>
              <IconLink href="https://www.facebook.com/people/Ecoalimentar-Lda/100057453318303/" target="_blank" rel="noopener noreferrer">
                <FacebookIcon />
              </IconLink>
              <IconLink href="https://ecoalimentar.pt" target="_blank" rel="noopener noreferrer">
                <InstagramIcon />
              </IconLink>
            </Grid>
          </Grid>
          <Grid item sm={4}>
            <Typography variant="h6">Quick Links</Typography>
            <Typography component="div">
              <Link to="/">Home</Link>
              <br />
              <Link to="/consultoria">Consultoria</Link>
              <br />
              <Link to="/auditoria">Auditoria</Link>
              <br />
              <Link to="/formacao">Formação</Link>
              <br />
              <Link to="/sobre">Sobre</Link>
              <br />
              <Link to="/contactos">Contactos</Link>
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default Footer;
