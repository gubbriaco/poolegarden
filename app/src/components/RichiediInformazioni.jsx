import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import {theme, borderRadius} from '../styles/theme'

function RichiediInformazioni({ title, subtitle }) {
  
  return (
    <ThemeProvider theme={theme}>
    <Box sx={{ textAlign: 'center', mt: 4, mb: 8 }}>
      <Typography variant="h5" color="primary.main" sx={{ mb: 2 }}>
        {title || "Hai bisogno di maggiori informazioni?"}
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        {subtitle || "Contattaci per un preventivo gratuito e personalizzato"}
      </Typography>
      <Link to="/contattaci" style={{ textDecoration: 'none' }}>
        <Box
          sx={{
            display: 'inline-block',
            background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            padding: '12px 30px',
            borderRadius: borderRadius,
            color: 'white',
            fontWeight: 'bold',
            boxShadow: '0 4px 20px rgba(39, 183, 192, 0.3)',
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'translateY(-5px)',
              boxShadow: '0 8px 25px rgba(39, 183, 192, 0.5)',
            }
          }}
        >
          Richiedi Informazioni
        </Box>
      </Link>
    </Box>
    </ThemeProvider>
  );
}

export default RichiediInformazioni;