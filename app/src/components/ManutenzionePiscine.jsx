import React from 'react';
import ReactCompareImage from "react-compare-image";
import { 
  Box, 
  Container, 
  Divider,
  Grid, 
  Typography, 
  useMediaQuery,
  Fade,
} from '@mui/material';
import Header from './Header';
import { ThemeProvider } from '@mui/material/styles';
import { alpha } from '@mui/system';
import {poolMaintenanceComparisonImages, poolMaintenanceGalleryImages} from "../assets/images.js";
import RichiediInformazioni from './RichiediInformazioni';
import {theme, PageTitle, borderRadius} from '../styles/theme';
import Footer from './Footer';
import Gallery from './Gallery';

function ManutenzionePiscine() {
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
                Manutenzione di piscine
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
                Ogni intervento di manutenzione è studiato su misura, per garantire il perfetto funzionamento della piscina e la massima tranquillità dei nostri clienti. Scopri come ci prendiamo cura delle piscine, stagione dopo stagione.
              </Typography>
            </Box>
          </Fade>

          {/* Main Content */}
          <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <Grid 
              container 
              direction="column" 
              spacing={{ xs: 3, sm: 4, md: 6 }} 
              sx={{ 
                maxWidth: '1000px', 
                width: '100%',
                my: 4
              }}
            >
              {/* First Compare Image */}
              <Grid item>
                <Box 
                  sx={{ 
                      boxShadow: '0 0 340px rgba(39, 183, 192, 0.5)',
                      overflow: 'hidden',
                      zIndex: 2,
                      '& .MuiCardMedia-root': {
                          height: '100%',
                          objectFit: 'cover',
                      },
                      mx: 'auto',
                      borderRadius: borderRadius,
                      width: '100%',
                    }}
                  >
                  <ReactCompareImage 
                  leftImage={poolMaintenanceComparisonImages.before1} 
                  rightImage={poolMaintenanceComparisonImages.after1} 
                  />
                </Box>
              </Grid>

              {/* Second Compare Image */}
              <Grid item>
                <Box 
                  sx={{ 
                      boxShadow: '0 0 340px rgba(39, 183, 192, 0.5)',
                      overflow: 'hidden',
                      zIndex: 2,
                      '& .MuiCardMedia-root': {
                          height: '100%',
                          objectFit: 'cover',
                      },
                      mx: 'auto',
                      borderRadius: borderRadius,
                      width: '100%',
                    }}
                  >
                  <ReactCompareImage 
                  leftImage={poolMaintenanceComparisonImages.before2} 
                  rightImage={poolMaintenanceComparisonImages.after2} 
                  />
                </Box>
              </Grid>
              
            </Grid>
          </Container>
          
          <Box 
            component="main" 
            sx={{ 
              mt: { xs: 4, md: 5 },
              px: { xs: 1, sm: 2, md: 5 },
            }}
          >
            <Gallery galleryItems={poolMaintenanceGalleryImages} />
            
            <RichiediInformazioni 
              title="Hai bisogno di manutenzione per la tua piscina?" 
              subtitle="Contattaci per un servizio professionale e personalizzato"
            />
          </Box>
        </Container>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default ManutenzionePiscine;
