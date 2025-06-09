import React from 'react';
import { 
  Box, 
  Container, 
  Divider,
  Typography, 
  useMediaQuery,
  Fade,
} from '@mui/material';
import Header from './Header';
import { ThemeProvider } from '@mui/material/styles';
import { alpha } from '@mui/system';
import {theme, PageTitle, borderRadius} from '../styles/theme';
import RichiediInformazioni from '../components/RichiediInformazioni';
import Footer from './Footer';
import Gallery from './Gallery';

function Realizzazione({ title, subtitle, galleryItems, ctaTitle, ctaSubtitle }) {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

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
                {title}
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
                {subtitle}
              </Typography>
            </Box>
          </Fade>

          <Box 
            component="main" 
            sx={{ 
              mt: { xs: 4, md: 5 },
              px: { xs: 1, sm: 2, md: 5 },
            }}
          >
            
            <Gallery galleryItems={galleryItems} />
            
            <RichiediInformazioni 
              title={ctaTitle || "Vuoi realizzare il tuo progetto?"}
              subtitle={ctaSubtitle || "Contattaci per un preventivo gratuito e personalizzato"}
            />
          </Box>
        </Container>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default Realizzazione;