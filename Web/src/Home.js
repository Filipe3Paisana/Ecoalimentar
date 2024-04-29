import React from "react";
import { Typography, Box, Grid, ButtonBase, Divider, TextField, Button, useTheme } from "@mui/material";
import Footer from "./Footer";

const Home = () => {
  
  const theme = useTheme();
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box sx={{ position: 'relative', textAlign: 'center', marginBottom: 4 }}>
        <img src="main-img.png" alt="Main view of ecoalimentar offerings" style={{ width: '100%', maxHeight: '500px', objectFit: 'cover' }} />
        <Typography variant="h2" component="div" sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', fontWeight: 'bold' }}>
          O Título Aqui
        </Typography>
      </Box>

      <Grid container spacing={5} justifyContent="center" alignItems="center" >
        {["/consultoria", "/auditoria", "/formacao"].map((path, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <ButtonBase 
              component="a" 
              href={path} 
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%',
                height: '200px', // Ensures each item stretches to fill the container
                '&:hover': {
                  backgroundColor: theme.palette.action.hover,
                  transform: 'scale(1.05)'
                }
              }}
            >
              <img src={["work_logo.png", "auditoria.png", "search.png"][index]} alt={["Consultoria services icon", "Auditoria services icon", "Formação programs icon"][index]} style={{ maxWidth: '120px', maxHeight: '120px' }} />
              <Typography variant="subtitle1">{["Consultoria", "Auditoria", "Formação"][index]}</Typography>
            </ButtonBase>
          </Grid>
        ))}
      </Grid>
      
      <Box sx={{ marginTop: 4, padding: 3, backgroundColor: theme.palette.grey[200], textAlign: 'center', elevation: 3 }}>
      <div className="content">
        <Typography variant="h2" sx={{padding: 5}} >Fale Connosco</Typography>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            '& > *': {
              margin: theme.spacing(2),
              width: '70%', // Adjust width as necessary
              bgcolor: 'background.paper', // Sets the background color to white
              padding: '15px 20px', // Reasonable padding for better visual balance
            }
          }}
        >
          <TextField id="name" label="Name" variant="outlined" />
          <br />
          <TextField id="email" label="Email" variant="outlined" />
          <br />
          <TextField id="message" label="Message" variant="outlined" multiline rows={16}  />
          <br />
          <br />
          <Button variant="contained" color="background" sx={{ width: '50%' }}>
            Send Message
          </Button>
        </Box>
      </div>
      </Box>

      <Footer />
    </Box>
  );
};

export default Home;
