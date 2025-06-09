import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Avatar, 
  Box, 
  Card, 
  CardActionArea, 
  CardContent, 
  CardMedia, 
  Container, 
  Divider,
  Grid, 
  Stack, 
  Typography, 
  useTheme, 
  useMediaQuery,
  Fade,
  Zoom
} from '@mui/material';
import Header from './Header';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { styled, alpha } from '@mui/system';
import EngineeringIcon from '@mui/icons-material/Engineering';
import HardwareIcon from '@mui/icons-material/Hardware';
import {theme, PageTitle, ServiceCard, StyledCardMedia, GradientCardContent, IconBox} from '../styles/theme';
import {servizipiscine} from '../data/services';
import Footer from './Footer';


function Piscine() {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

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
          {/* Header */}
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

          {/* Page Title */}
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
                Piscine
              </PageTitle>
              <Typography 
                variant="subtitle1" 
                color="text.secondary"
                sx={{
                  maxWidth: '700px',
                  mx: 'auto',
                  px: 2,
                  fontSize: { xs: '1rem', md: '1.1rem' },
                }}
              >
                Scopri le nostre soluzioni su misura per piscine, pensate per valorizzare i tuoi spazi esterni e offrirti momenti di relax, benessere e armonia tutto l’anno.
              </Typography>
            </Box>
          </Fade>

          {/* Main Content */}
          <Box 
            component="main" 
            sx={{ 
              mt: { xs: 4, md: 5 },
              px: { xs: 1, sm: 2, md: 5 },
            }}
          >
            <Grid 
              container 
              spacing={{ xs: 4, sm: 5, md: 6 }} 
              justifyContent="center"
            >
              {servizipiscine.map((servizio, index) => (
                <Grid 
                  item 
                  key={servizio.id} 
                  xs={12} 
                  sm={6} 
                  md={4}
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <Zoom in={true} style={{ transitionDelay: '${index * 200}ms' }}>
                    <ServiceCard>
                      <CardActionArea component={Link} to={servizio.link}>
                        <StyledCardMedia
                          component="img"
                          image={servizio.image}
                          alt={servizio.title}
                        />
                        <GradientCardContent>
                          <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
                            <Typography 
                              variant={isMobile ? "h5" : "h4"} 
                              component="div" 
                              color="text.primary"
                              sx={{ color:'var(--white)' }}
                            >
                              {servizio.title}
                            </Typography>
                            <IconBox sx={{ color:'var(--white)' }}>
                              {servizio.iconType === 'engineering' && <EngineeringIcon fontSize="inherit" />}
                              {servizio.iconType === 'hardware' && <HardwareIcon fontSize="inherit" />}
                            </IconBox>
                          </Stack>
                          <Typography 
                            variant="body2" 
                            color="text.primary"
                            sx={{ opacity: 0.9, color:'var(--white)' }}
                          >
                            {servizio.description}
                          </Typography>
                        </GradientCardContent>
                      </CardActionArea>
                    </ServiceCard>
                  </Zoom>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default Piscine;
