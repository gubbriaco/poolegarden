import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Divider,
  ImageList,
  ImageListItem,
  Typography, 
  useMediaQuery,
  Fade,
  Modal,
  IconButton
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Header from './Header';
import { ThemeProvider } from '@mui/material/styles';
import { alpha } from '@mui/system';
import { homeGalleryImages } from '../assets/images';
import Footer from './Footer';
import {theme, borderRadius} from '../styles/theme';

function Home() {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const [openImage, setOpenImage] = useState(null);

  // Determine columns based on screen size
  const getCols = () => {
    if (isMobile) return 2;
    if (isTablet) return 3;
    return 4;
  };

  const displayImages = homeGalleryImages.slice(0, 10);
  
  // Function to handle opening the image popup
  const handleImageClick = (image) => {
    setOpenImage(image);
  };

  // Function to handle closing the image popup
  const handleCloseImage = () => {
    setOpenImage(null);
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

          {/* Main Content */}
          <Box 
            component="main" 
            sx={{ 
              mt: { xs: 4, md: 6 },
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: { xs: 4, md: 6 },
            }}
          >
            {/* Left Content */}
            <Fade in={true} timeout={1000} style={{ transitionDelay: '300ms' }}>
              <Box 
                sx={{ 
                  flex: { xs: '1 1 100%', md: '1 1 50%' },
                  maxWidth: { xs: '100%', md: '50%' },
                }}
              >
                <Typography 
                  variant="h2" 
                  component="h2"
                  sx={{ 
                    color: 'text.primary',
                    fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
                    fontWeight: 700,
                    lineHeight: 1.2,
                    mb: 3,
                  }}
                >
                  Trasforma il tuo spazio esterno in un'oasi di bellezza
                </Typography>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: 'text.secondary',
                    fontSize: { xs: '1rem', md: '1.1rem' },
                    mb: 4,
                    lineHeight: 1.6,
                  }}
                >
                  Specializzati nella realizzazione e manutenzione di piscine, impianti di irrigazione e prati sintetici. 
                  Offriamo soluzioni personalizzate per trasformare il tuo giardino in uno spazio unico e funzionale.
                </Typography>
              </Box>
            </Fade>

            {/* Right Content */}
            <Fade in={true} timeout={1000} style={{ transitionDelay: '600ms' }}>
              <Box 
                sx={{ 
                  flex: { xs: '1 1 100%', md: '1 1 45%' },
                  maxWidth: { xs: '100%', md: '45%' },
                  maxHeight: { xs: 'auto', sm: '500px', md: '550px' },
                  height: { xs: 'auto', sm: 'auto' },
                  borderRadius: borderRadius,
                  boxShadow: 'none',
                  overflow: { xs: 'visible', sm: 'hidden' },
                  position: 'relative',
                  backgroundImage: 'inherit',
                  backdropFilter: 'blur(2px)'
                }}
              >
                <ImageList
                  sx={{ 
                    width: '100%', 
                    height: { xs: 'auto', sm: '100%' },
                    margin: 0,
                    transform: 'translateZ(0)',
                    borderRadius: borderRadius,
                    overflow: { xs: 'visible', sm: 'auto' },
                    background: 'transparent',
                    ...(isMobile ? {} : {
                      scrollbarWidth: 'thin',
                    }),
                  }}
                  variant="quilted"
                  cols={getCols()}
                  rowHeight={isMobile ? 120 : 130}
                  gap={isMobile ? 8 : 8}
                >
                  {displayImages.map((item, index) => {
                    let colSpan = 1;
                    let rowSpan = 1;
                    
                    if (index === 0) {
                      colSpan = isMobile ? 2 : 2;
                      rowSpan = 2;
                    } else if (index === 3 || index === 6) {
                      colSpan = isMobile ? 1 : 2;
                      rowSpan = isMobile ? 1 : 1;
                    } else if (index === 4) {
                      rowSpan = 2;
                    }
                    
                    return (
                      <ImageListItem 
                        key={index} 
                        cols={colSpan}
                        rows={rowSpan}
                        onClick={() => handleImageClick(item)}
                        sx={{
                          overflow: 'hidden',
                          borderRadius: borderRadius,
                          boxShadow: 'none',
                          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                          cursor: 'pointer',
                          '&:hover': {
                            transform: 'scale(1.0005)',
                            boxShadow: 'none',
                            '& .MuiImageListItemBar-root': {
                              transform: 'translateY(0)',
                              opacity: 1,
                            }
                          }
                        }}
                      >
                        <img
                          src={item.img}
                          alt={item.alt}
                          loading="lazy"
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            transition: 'transform 0.5s ease',
                            borderRadius: borderRadius,
                          }}
                        />
                       
                      </ImageListItem>
                    );
                  })}
                </ImageList>
              </Box>
            </Fade>
          </Box>
        </Container>
        <Footer />
        
        {/* Image Modal */}
        <Modal
          open={openImage !== null}
          onClose={handleCloseImage}
          aria-labelledby="image-modal"
          aria-describedby="enlarged image view"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            p: 2,
          }}
        >
          <Box
            sx={{
              position: 'relative',
              maxWidth: '90vw',
              maxHeight: '90vh',
              outline: 'none',
              borderRadius: borderRadius,
              overflow: 'hidden',
              boxShadow: 24,
              bgcolor: 'background.paper',
            }}
          >
            <IconButton
              aria-label="close"
              onClick={handleCloseImage}
              sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: 'white',
                bgcolor: 'rgba(0, 0, 0, 0.5)',
                '&:hover': {
                  bgcolor: 'rgba(0, 0, 0, 0.7)',
                },
                zIndex: 1,
                borderRadius: borderRadius,
              }}
            >
              <CloseIcon />
            </IconButton>
            {openImage && (
              <img
                src={openImage.img}
                alt={openImage.title || "Immagine ingrandita"}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  display: 'block',
                }}
              />
            )}
          </Box>
        </Modal>
      </Box>
    </ThemeProvider>
  );
}

export default Home;