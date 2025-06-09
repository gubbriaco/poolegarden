import React from 'react';
import { 
  Box, 
  Container, 
  Divider,
  Grid, 
  IconButton,
  Paper,
  Stack, 
  Typography, 
  useMediaQuery,
  Fade,
  Tooltip,
  Snackbar
} from '@mui/material';
import Header from './Header';
import { ThemeProvider, styled, alpha } from '@mui/material/styles';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import {theme, PageTitle, SocialButton, CopyButton, ContactCard, borderRadius} from '../styles/theme';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Footer from './Footer';
import {contact} from '../data/info';


function Contattaci() {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);
  const [snackbarMessage, setSnackbarMessage] = React.useState('');

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
        sx={{ 
          width: '100%', 
          minHeight: '100vh', 
          bgcolor: 'background.default',
          position: 'relative',
          overflow: 'hidden',
          backgroundImage: 'radial-gradient(circle at 10% 90%, rgba(39, 183, 192, 0.15), transparent 30%), radial-gradient(circle at 90% 10%, rgba(106, 191, 105, 0.15), transparent 35%)',
        }}
      >
        <Container 
          maxWidth={false} 
          sx={{ 
            py: { xs: 3, md: 4 }, 
            px: { xs: 2, sm: 4, md: 7 }
          }}
        >
          <Fade in={true} timeout={1000}>
            <Box 
              component="header" 
              sx={{ 
                display: 'flex', 
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
              }}
            >
              <Header />
            </Box>
          </Fade>

          <Divider 
            sx={{ 
              my: 4, 
              opacity: 0.2,
              background: `linear-gradient(to right, transparent, ${alpha(theme.palette.primary.main, 0.5)}, ${alpha(theme.palette.secondary.main, 0.5)}, transparent)`,
            }} 
          />

          <Fade in={true} timeout={1000} style={{ transitionDelay: '300ms' }}>
            <Box sx={{ mb: 6, textAlign: 'center' }}>
              <PageTitle 
                variant="h2" 
                component="h2"
                color="text.primary"
                sx={{
                  mb: 3,
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                }}
              >
                Contattaci
              </PageTitle>
              <Typography 
                variant="subtitle1" 
                color="text.secondary"
                sx={{
                  maxWidth: '750px',
                  mx: 'auto',
                  px: 2,
                  fontSize: { xs: '1rem', md: '1.1rem' },
                }}
              >
                Siamo qui per rispondere a tutte le tue domande e aiutarti a realizzare il tuo progetto ideale.
              </Typography>
            </Box>
          </Fade>

          <Box 
            component="main" 
            sx={{ 
              mt: { xs: 4, md: 6 },
              mb: 8,
              maxWidth: '1200px',
              mx: 'auto'
            }}
          >
            <Fade in={true} timeout={1000} style={{ transitionDelay: '400ms' }}>
              <Grid 
                container 
                spacing={3} 
                sx={{ 
                  display: 'flex',
                  flexWrap: 'nowrap',
                  flexDirection: { xs: 'column', md: 'row' },
                  alignItems: 'stretch'
                }}
              >
                <Grid item xs={12} md={4} sx={{ flex: '1 1 0px' }}>
                  <ContactCard elevation={3} sx={{ height: '100%', width: '100%' }}>
                    <Typography variant="h5" color="primary" gutterBottom>
                      Chi Siamo
                    </Typography>
                    <Typography variant="body1" color="text.secondary" paragraph sx={{ textAlign: 'justify' }}>
                      Pool & Garden è un'azienda specializzata nella realizzazione e manutenzione di piscine, impianti di irrigazione e prati sintetici, con anni di esperienza nel trasformare spazi esterni in luoghi di comfort, bellezza e funzionalità.
                    </Typography>
                    <Typography variant="body1" color="text.secondary" paragraph sx={{ textAlign: 'justify' }}>
                      La nostra missione è offrire soluzioni su misura, capaci di rispondere alle esigenze estetiche e tecniche di ogni cliente, unendo passione artigianale e tecnologie all'avanguardia.
                    </Typography>
                  </ContactCard>
                </Grid>
                
                <Grid item xs={12} md={4} sx={{ flex: '1 1 0px' }}>
                  <ContactCard elevation={3} sx={{ height: '100%', width: '100%' }}>
                    <Typography variant="h5" color="primary" gutterBottom>
                      Contatti Diretti
                    </Typography>
                    
                    <Stack spacing={2} sx={{ mt: 3 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <PhoneIcon color="primary" />
                        <Typography variant="body1" color="text.primary">
                          {contact.mobile}
                        </Typography>
                        <Tooltip title="Copia numero">
                          <CopyButton 
                            aria-label="copia numero" 
                            onClick={() => handleCopy(contact.mobile, 'Numero di telefono')}
                            size="small"
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
                        <EmailIcon color="primary" />
                        <Typography variant="body1" color="text.primary" sx={{ 
                          wordBreak: 'break-word',
                          maxWidth: { xs: '150px', sm: '180px', md: '220px' }
                        }}>
                          {contact.email}
                        </Typography>
                        <Tooltip title="Copia email">
                          <CopyButton 
                            aria-label="copia email" 
                            onClick={() => handleCopy(contact.email, 'Indirizzo email')}
                            size="small"
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

                      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                        <LocationOnIcon color="primary" sx={{ mt: 0.5 }} />
                        <Typography variant="body1" color="text.primary">
                          {contact.address.street}, {contact.address.cap} {contact.address.city}, {contact.address.province}, {contact.address.country}
                        </Typography>
                      </Box>
                    </Stack>

                    <Box sx={{ mt: 4 }}>
                      <Typography variant="h5" color="primary" gutterBottom>
                        Seguici sui Social
                      </Typography>
                      <Stack 
                        direction="row" 
                        spacing={2} 
                        sx={{ 
                          mt: 2, 
                          justifyContent: { xs: 'center', sm: 'flex-start' },
                          '& > a': {
                            transition: 'transform 0.3s ease',
                            '&:hover': {
                              transform: 'translateY(-3px) scale(1.1)',
                            }
                          }
                        }}
                      >
                        <SocialButton 
                          aria-label="facebook" 
                          href={contact.social.facebook} 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <FacebookIcon />
                        </SocialButton>
                        <SocialButton 
                          aria-label="instagram" 
                          href={contact.social.instagram} 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <InstagramIcon />
                        </SocialButton>
                        <SocialButton 
                          aria-label="linkedin" 
                          href={contact.social.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <LinkedInIcon />
                        </SocialButton>
                        <SocialButton 
                          aria-label="whatsapp" 
                          href={contact.mobile ? `https://wa.me/${contact.mobile.replace(/\s+/g, '')}` : '#'} 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <WhatsAppIcon />
                        </SocialButton>
                      </Stack>
                    </Box>
                  </ContactCard>
                </Grid>
                
                <Grid item xs={12} md={4} sx={{ flex: '1 1 0px' }}>
                  <ContactCard elevation={3} sx={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column' }}>
                    <Typography variant="h5" color="primary" gutterBottom>
                      Dove Siamo
                    </Typography>
                    <Typography variant="body1" color="text.secondary" paragraph>
                      Vieni a trovarci nella nostra sede, dove potrai chiederci ulteriori informazioni.
                    </Typography>
                    <Box 
                      sx={{ 
                        flexGrow: 1,
                        minHeight: { xs: 200, sm: 220, md: 250 },
                        borderRadius: borderRadius,
                        overflow: 'hidden',
                        position: 'relative',
                        mt: 2,
                        border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
                        transition: 'transform 0.3s ease',
                        '&:hover': {
                          transform: 'scale(1.02)',
                          boxShadow: `0 5px 15px ${alpha(theme.palette.primary.main, 0.2)}`,
                        }
                      }}
                    >
                      <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12339.575582853897!2d16.22638230952731!3d39.38716730356933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133f9c8d0c0b2a9d%3A0x0!2zMznCsDIzJzEzLjgiTiAxNsKwMTQnMTEuMCJF!5e0!3m2!1sit!2sit!4v1746089187054!5m2!1sit!2sit&markers=color:red%7Clabel:P%7C39.38716730356933,16.22638230952731"
                        width="100%" 
                        height="100%" 
                        style={{ border: 0, position: 'absolute', top: 0, left: 0 }} 
                        allowFullScreen="" 
                        loading="lazy"
                        title="Mappa della nostra sede"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </Box>
                  </ContactCard>
                </Grid>
              </Grid>
            </Fade>
          </Box>
        </Container>
        <Footer />
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

export default Contattaci;