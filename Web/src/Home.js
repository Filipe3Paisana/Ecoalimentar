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

      <Grid container spacing={5} justifyContent="center" alignItems="center" sx={{ marginBottom: 4 }}>
        {["/consultoria", "/auditoria", "/formacao"].map((path, index) => (
          <React.Fragment key={index}>
            <Grid item xs={12} sm={4}>
              <ButtonBase 
                component="a" 
                href={path} 
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                  height: '200px', // Increase the height of each button
                  backgroundColor: theme.palette.background.paper, // Add background color
                  color: theme.palette.text.primary, // Add text color
                  '&:hover': {
                    backgroundColor: theme.palette.action.hover,
                    transform: 'scale(1.05)'
                  }
                }}
              >
                <img src={["work_logo.png", "auditoria.png", "search.png"][index]} alt={["Consultoria services icon", "Auditoria services icon", "Formação programs icon"][index]} style={{ maxWidth: '120px' }} />
                <Typography variant="subtitle1">{["Consultoria", "Auditoria", "Formação"][index]}</Typography>
              </ButtonBase>
            </Grid>
            {index < 2 && <Grid item><Divider sx={{ height: '200px', backgroundColor: 'black' }} orientation="vertical" /></Grid>}
          </React.Fragment>
        ))}
      </Grid>


      <Box sx={{ marginTop: 4, padding: 3, backgroundColor: theme.palette.grey[200], textAlign: 'center', elevation: 3 }}>
        <Typography variant="h3" gutterBottom>Talk to Us</Typography>
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
          <TextField id="message" label="Message" variant="outlined" multiline rows={8}  />
          <br />
          <br />
          <Button variant="contained" color="primary">
            Send Message
          </Button>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
};

export default Home;
