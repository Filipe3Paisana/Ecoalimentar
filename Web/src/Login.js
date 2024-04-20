import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Typography, Container, Box, CssBaseline, Snackbar, Alert, Slide } from '@mui/material';

function TransitionLeft(props) {
  return <Slide {...props} direction="left" />;
}

function Login() {
    const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');
    
    function handleSubmit(e) {
        e.preventDefault();
        const userData = { email, password };

        fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
        })
        .then(response => {
        if (response.ok) {
            return response.json();
        }
        setEmail('');
        setPassword('');
        throw new Error('Algo deu errado no registro!');

        })
        .then(data => {
        console.log(data);
        setSnackbarMessage('Login realizado com sucesso!');
        setSnackbarSeverity('success');
        setOpenSnackbar(true);

        navigate('/home'); // Redireciona para a home
        
        })
        .catch(error => {
        console.error('Erro ao registrar:', error);
        setSnackbarMessage(error.message);
        setSnackbarSeverity('error');
        setOpenSnackbar(true);

        });
    }

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  return (
    <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box sx={{ marginTop: 12, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography component="h1" variant="h5">Login</Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="email"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Login
            </Button>
          </Box>
        </Box>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        TransitionComponent={TransitionLeft}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        sx={{
          '& .MuiAlert-root': {
            width: '100%',
            backgroundColor: snackbarSeverity === 'success' ? '#b7dc18' : '#ff0000',
          }
        }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
}

export default Login;
