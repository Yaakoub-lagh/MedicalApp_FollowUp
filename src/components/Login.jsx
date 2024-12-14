import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, TextField, Typography, Paper } from '@mui/material';

function Login() {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleLogin = () => {
    if (credentials.username && credentials.password) {
      navigate('/dashboard');
    } else {
      alert('Please enter your username and password!');
    }
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      sx={{
        background: `linear-gradient(135deg, #e3f2fd, #bbdefb)`,
      }}
    >
      <Paper
        elevation={10}
        sx={{
          padding: 4,
          width: 400,
          borderRadius: 3,
          textAlign: 'center',
        }}
      >
        {/* Office Logo */}
        <Box sx={{ marginBottom: 3 }}>
          <img
            src={require('../assets/followup.png')} // Replace with your imported logo path
            alt="Office Logo"
            style={{ width: '150px', objectFit: 'contain' }}
          />
        </Box>

        {/* App Title */}
      
        <Typography variant="body1" sx={{ marginBottom: 3, color: '#757575' }}>
          Saisissez votre identifiant et mot de passe!  
        </Typography>

        {/* Username Input */}
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          margin="normal"
          value={credentials.username}
          onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
        />

        {/* Password Input */}
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={credentials.password}
          onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
        />

        {/* Login Button */}
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleLogin}
          sx={{
            marginTop: 2,
            backgroundColor: '#1976d2',
            '&:hover': {
              backgroundColor: '#0d47a1',
            },
          }}
        >
          Login
        </Button>

        {/* Footer Message */}
        <Typography variant="body2" sx={{ marginTop: 3, color: '#9e9e9e' }}>
          © 2024 Medical Portal. All rights reserved.
        </Typography>
      </Paper>
    </Box>
  );
}

export default Login;
