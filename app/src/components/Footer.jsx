import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Box, 
  Container, 
  Grid, 
  Typography, 
  Stack, 
  IconButton, 
  Divider,
  Tooltip,
  Snackbar
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { ThemeProvider, styled, alpha } from '@mui/material/styles';
import {theme, SocialButton, CopyButton, ContactInfoItem, borderRadius} from '../styles/theme';
import {servizi, servizipiscine, serviziirrigazione, serviziprati} from '../data/services';
import {contact} from '../data/info'

function Footer() {
  const currentYear = new Date().getFullYear();
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        setSnackbarMessage(`${type} copiato negli appunti!`);
        setSnackbarOpen(true);
      })
      .catch((err) => {
        console.error('Errore durante la copia: ', err);
      });
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };
  
  return (
    <ThemeProvider theme={theme}>
    <Box 
      component="footer" 
      sx={{ 
        bgcolor: 'background.paper',
        borderTop: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
        pt: 6,
        pb: 3,
        mt: 8,
        backgroundImage: 'radial-gradient(circle at 90% 10%, rgba(39, 183, 192, 0.08), transparent 20%), radial-gradient(circle at 10% 90%, rgba(106, 191, 105, 0.08), transparent 25%)',
        boxShadow: `0 -10px 20px -5px ${alpha('#000', 0.03)}`,
      }}
    >
      <Container maxWidth="lg">

        <Grid container spacing={4}>
          {/* Company Info */}
          <Grid item xs={12} md={4}>
            <Box sx={{ mb: 2 }}>
            <Typography 
              component="span"
              sx={{ 
                color: theme.palette.primary.main,
                fontSize: { xs: '1.4rem', sm: '1.6rem', md: '1.8rem' },
                fontWeight: 700,
                letterSpacing: '0.03em',
                textRendering: 'optimizeLegibility',
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale',
              }}
            >
              Pool
            </Typography>
            
            <Typography 
              component="span"
              sx={{ 
                background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontSize: { xs: '1.4rem', sm: '1.6rem', md: '1.8rem' },
                fontWeight: 700,
                mx: 0.5,
                letterSpacing: '0.03em',
                textRendering: 'optimizeLegibility',
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale',
              }}
            >
              &
            </Typography>
            
            <Typography 
              component="span"
              sx={{ 
                color: theme.palette.secondary.main,
                fontSize: { xs: '1.4rem', sm: '1.6rem', md: '1.8rem' },
                fontWeight: 700,
                letterSpacing: '0.03em',
                textRendering: 'optimizeLegibility',
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale',
              }}
            >
              Garden
            </Typography>
            
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Specialisti nella realizzazione e manutenzione di piscine, impianti di irrigazione e prati sintetici.
              </Typography>
            </Box>
            
            <Stack spacing={1.5}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <LocationOnIcon fontSize="small" color="primary" />
                <Typography variant="body2" color="text.secondary">
                  {contact.address.street}, {contact.address.cap} {contact.address.city}, {contact.address.province}, {contact.address.country}
                </Typography>
              </Box>
              
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <PhoneIcon fontSize="small" color="primary" />
                <Typography variant="body2" color="text.secondary" sx={{ flex: 1 }}>
                  {contact.mobile}
                </Typography>
                <Tooltip title="Copia numero">
                  <CopyButton 
                    size="small" 
                    onClick={() => handleCopy(contact.mobile, 'Numero di telefono')}
                    sx={{ 
                      color: theme.palette.primary.main,
                      opacity: 0.7,
                      '&:hover': { opacity: 1 }
                    }}
                  >
                    <ContentCopyIcon fontSize="small" />
                  </CopyButton>
                </Tooltip>
              </Box>
              
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <EmailIcon fontSize="small" color="primary" />
                <Typography variant="body2" color="text.secondary" sx={{ flex: 1 }}>
                  {contact.email}
                </Typography>
                <Tooltip title="Copia email">
                  <CopyButton 
                    size="small" 
                    onClick={() => handleCopy(contact.email, 'Indirizzo email')}
                    sx={{ 
                      color: theme.palette.primary.main,
                      opacity: 0.7,
                      '&:hover': { opacity: 1 }
                    }}
                  >
                    <ContentCopyIcon fontSize="small" />
                  </CopyButton>
                </Tooltip>
              </Box>
            </Stack>
          </Grid>
          
          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" component="div" sx={{ 
              color: theme.palette.primary.main, 
              fontWeight: 600, 
              mb: 2,
              position: 'relative',
              '&:after': {
                content: '""',
                position: 'absolute',
                bottom: -8,
                left: 0,
                width: 40,
                height: 3,
                background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                borderRadius: borderRadius,
              }
            }}>
              Link Rapidi
            </Typography>
            <Stack spacing={1}>
              {servizi.map((link) => (
                <Link 
                  key={link.title} 
                  to={link.link} 
                  style={{ textDecoration: 'none' }}
                >
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: 'text.secondary',
                      transition: 'color 0.2s',
                      '&:hover': { 
                        color: theme.palette.primary.main 
                      }
                    }}
                  >
                    {link.title}
                  </Typography>
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Services */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" component="div" sx={{ 
              color: theme.palette.primary.main,
              fontWeight: 600, 
              mb: 2,
              position: 'relative',
              '&:after': {
                content: '""',
                position: 'absolute',
                bottom: -8,
                left: 0,
                width: 40,
                height: 3,
                background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                borderRadius: borderRadius,
              }
            }}>
              I Nostri Servizi
            </Typography>
            <Stack spacing={1}>
              {servizipiscine.map((service) => (
                <Link 
                  key={service.title} 
                  to={service.link} 
                  style={{ textDecoration: 'none' }}
                >
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: 'text.secondary',
                      transition: 'color 0.2s',
                      '&:hover': { 
                        color: theme.palette.primary.main 
                      }
                    }}
                  >
                    {service.description}
                  </Typography>
                </Link>
              ))}
              
              {serviziirrigazione.map((service) => (
                <Link 
                  key={service.title} 
                  to={service.link} 
                  style={{ textDecoration: 'none' }}
                >
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: 'text.secondary',
                      transition: 'color 0.2s',
                      '&:hover': { 
                        color: theme.palette.primary.main 
                      }
                    }}
                  >
                    {service.description}
                  </Typography>
                </Link>
              ))}

              {serviziprati.map((service) => (
                <Link 
                  key={service.title} 
                  to={service.link} 
                  style={{ textDecoration: 'none' }}
                >
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: 'text.secondary',
                      transition: 'color 0.2s',
                      '&:hover': { 
                        color: theme.palette.primary.main 
                      }
                    }}
                  >
                    {service.description}
                  </Typography>
                </Link>
              ))}
            </Stack>
          </Grid>

        </Grid>
        
        {/* Social Media & Copyright */}
        <Box sx={{ mt: 5 }}>
          <Divider sx={{ 
            mb: 3,
            opacity: 0.2,
            background: `linear-gradient(to right, transparent, ${alpha(theme.palette.primary.main, 0.5)}, ${alpha(theme.palette.secondary.main, 0.5)}, transparent)`,
          }} />
          
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={6}>
              <Stack direction="row" spacing={2} justifyContent="flex-start">
                <SocialButton href={contact.social.facebook} target="_blank">
                  <FacebookIcon />
                </SocialButton>
                <SocialButton href={contact.social.instagram} target="_blank">
                  <InstagramIcon />
                </SocialButton>
                <SocialButton href={contact.social.linkedin} target="_blank">
                  <LinkedInIcon />
                </SocialButton>
                <SocialButton href={`https://wa.me/${contact.mobile.replace(/\s+/g, '')}`} target="_blank">
                  <WhatsAppIcon />
                </SocialButton>
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography 
                variant="body2" 
                color="text.secondary" 
                align="right"
                sx={{
                  textAlign: { xs: 'left', md: 'right' },
                  fontStyle: 'italic'
                }}
              >
                © {currentYear} Pool & Garden. Tutti i diritti riservati.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
      
      {/* Snackbar for copy feedback */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message={snackbarMessage}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        sx={{
          '& .MuiSnackbarContent-root': {
            bgcolor: theme.palette.primary.main,
            color: 'white',
          }
        }}
      />
    </Box>
    </ThemeProvider>
  );
}

export default Footer;