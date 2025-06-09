import React, { useState, useEffect } from 'react';
import { Box, Typography, Stack, useMediaQuery, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { alpha } from '@mui/system';
import logo from '../assets/logo.png';
import {theme, gradient, borderRadius} from '../styles/theme';


function Header() {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  const isActive = (path) => {
    return location.pathname === path;
  };
  return (
    <Box 
      component="header" 
      sx={{ 
        display: 'flex', 
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        width: '100%',
      }}
    >
      <Stack 
        direction="row" 
        spacing={{ xs: 1.5, sm: 2 }} 
        alignItems="center"
        sx={{
          position: 'relative',
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: -8,
            left: 0,
            width: '100%',
            height: 2,
            background: gradient,
            opacity: 0.7,
            borderRadius: borderRadius,
          }
        }}
      >
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Box
            sx={{
              width: { xs: 60, sm: 70, md: 80 },
              height: 'auto',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'scale(1.1)',
                filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))',
              },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              filter: 'drop-shadow(0 2px 5px rgba(0,0,0,0.1))',
            }}
          >
            <img 
              src={logo} 
              alt="Pool & Garden Logo" 
              style={{ 
                width: '100%', 
                height: 'auto',
                objectFit: 'contain'
              }} 
            />
          </Box>
        </Link>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              position: 'relative',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'scale(1.05)',
              },
            }}
          >
            <Typography 
              component="span"
              sx={{ 
                color: theme.palette.primary.main,
                fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.6rem' },
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
                background: gradient,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.6rem' },
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
                fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.6rem' },
                fontWeight: 700,
                letterSpacing: '0.03em',
                textRendering: 'optimizeLegibility',
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale',
              }}
            >
              Garden
            </Typography>
          </Box>
        </Link>
      </Stack>
      
      {/* Desktop Navigation */}
      {!isMobile && (
        <Stack 
          direction="row" 
          spacing={3} 
          sx={{ 
            display: { xs: 'none', sm: 'flex' },
            alignItems: 'center'
          }}
        >
          <Link to="/servizi" style={{ textDecoration: 'none' }}>
                    <Box
                      sx={{
                        display: 'inline-block',
                        background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                        padding: '12px 24px',
                        borderRadius: borderRadius,
                        color: 'white',
                        fontWeight: 'bold',
                        boxShadow: `0 4px 20px ${alpha(theme.palette.primary.main, 0.3)}`,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-5px)',
                          boxShadow: `0 8px 25px ${alpha(theme.palette.primary.main, 0.5)}`,
                        },
                        '&::after': {
                          position: 'absolute',
                          bottom: '-25px',
                          left: '0',
                          fontSize: '10px',
                          whiteSpace: 'nowrap',
                          color: 'white',
                          backgroundColor: 'rgba(0,0,0,0.7)',
                          padding: '2px 5px',
                          borderRadius: borderRadius,
                          opacity: 0.9
                        }
                      }}
                    >
                      Scopri i nostri servizi
                    </Box>
                  </Link>
                  
                  <Link to="/contattaci" style={{ textDecoration: 'none' }}>
                    <Typography 
                      sx={{ 
                        color: 'text.primary', 
                        fontWeight: 600,
                        transition: 'all 0.3s ease',
                        padding: '8px 20px',
                        borderRadius: borderRadius,
                        background: alpha(theme.palette.primary.main, 0.1),
                        border: `1px solid ${alpha(theme.palette.primary.main, 0.3)}`,
                        '&:hover': {
                          background: gradient,
                          color: '#fff',
                          transform: 'translateY(-3px)',
                          boxShadow: `0 6px 15px ${alpha(theme.palette.primary.main, 0.3)}`,
                        }
                      }}
                    >
                      Contattaci
                    </Typography>
                  </Link>
        </Stack>
      )}
      
      {/* Mobile Menu Button */}
      {isMobile && (
        <IconButton 
          onClick={toggleMobileMenu}
          sx={{ 
            color: theme.palette.primary.main,
            background: alpha(theme.palette.primary.main, 0.1),
            transition: 'all 0.3s ease',
            borderRadius: borderRadius,
            '&:hover': {
              background: alpha(theme.palette.primary.main, 0.2),
              transform: 'rotate(90deg)',
            }
          }}
        >
          <MenuIcon />
        </IconButton>
      )}
      
      {/* Mobile Navigation Drawer */}
      <Drawer
            anchor="right"
            open={mobileMenuOpen}
            onClose={toggleMobileMenu}
            sx={{
              '& .MuiDrawer-paper': {
                width: '70%',
                maxWidth: '300px',
                background: theme.palette.background.paper,
                boxShadow: '0 0 20px rgba(0,0,0,0.1)',
                padding: '20px 0',
                borderTopLeftRadius: borderRadius,
                borderBottomLeftRadius: borderRadius,
              },
            }}
          >
            {/* Rest of the drawer content remains the same */}
            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              px: 3,
              pb: 2,
              borderBottom: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
              borderRadius: borderRadius,
            }}>
              <Typography 
                variant="h6" 
                sx={{ 
                  fontWeight: 700,
                  background: gradient,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Menu
              </Typography>
              <IconButton 
                onClick={toggleMobileMenu}
                sx={{
                  background: alpha(theme.palette.primary.main, 0.1),
                  transition: 'all 0.3s ease',
                  borderRadius: borderRadius,
                  '&:hover': {
                    background: alpha(theme.palette.primary.main, 0.2),
                    transform: 'rotate(90deg)',
                  }
                }}
              >
                <CloseIcon />
              </IconButton>
            </Box>
            
            <List sx={{ mt: 2 }}>
              <ListItem 
                component={Link} 
                to="/"
                onClick={toggleMobileMenu}
                sx={{ 
                  py: 1.5,
                  px: 3,
                  mx: 2,
                  my: 1,
                  borderRadius: borderRadius,
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                  background: isActive('/') ? alpha(theme.palette.primary.main, 0.1) : 'transparent',
                  '&:hover': { 
                    background: gradient,
                    transform: 'translateX(5px)',
                    boxShadow: `0 4px 8px ${alpha(theme.palette.primary.main, 0.1)}`,
                    '& .MuiListItemText-primary': {
                      color: '#fff',
                      background: 'transparent',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: '#fff',
                    }
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    height: '100%',
                    width: '4px',
                    background: gradient,
                    opacity: isActive('/') ? 1 : 0,
                    transition: 'opacity 0.3s ease',
                    borderRadius: borderRadius,
                  },
                  '&:hover::before': {
                    opacity: 1,
                  }
                }}
              >
                <ListItemText 
                  primary="Home" 
                  primaryTypographyProps={{ 
                    fontWeight: 600,
                    fontSize: '1.1rem',
                    letterSpacing: '0.02em',
                    color: isActive('/') ? theme.palette.primary.main : theme.palette.text.primary,
                    sx: {
                      transition: 'all 0.3s ease',
                      position: 'relative',
                      display: 'inline-block',
                      '&:hover': {
                        transform: 'translateX(3px)',
                      }
                    }
                  }} 
                />
              </ListItem>
              
              {/* Elegant divider with logo-themed colors */}
              <Box sx={{ 
                mx: 4, 
                my: 1.5, 
                height: '1px', 
                background: gradient,
                borderRadius: borderRadius,
                opacity: 0.8,
                boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
              }} />
              
              {/* Rest of the mobile menu items with similar active state handling */}
              <ListItem 
                component={Link} 
                to="/servizi"
                onClick={toggleMobileMenu}
                sx={{ 
                  py: 1.5,
                  px: 3,
                  mx: 2,
                  my: 1,
                  borderRadius: borderRadius,
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                  background: isActive('/servizi') ? alpha(theme.palette.primary.main, 0.1) : 'transparent',
                  '&:hover': { 
                    background: gradient,
                    transform: 'translateX(5px)',
                    boxShadow: `0 4px 8px ${alpha(theme.palette.primary.main, 0.1)}`,
                    '& .MuiListItemText-primary': {
                      color: '#fff',
                      background: 'transparent',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: '#fff',
                    }
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    height: '100%',
                    width: '4px',
                    background: gradient,
                    opacity: isActive('/servizi') ? 1 : 0,
                    transition: 'opacity 0.3s ease',
                    borderRadius: borderRadius,
                  },
                  '&:hover::before': {
                    opacity: 1,
                  }
                }}
              >
                <ListItemText 
                  primary="Servizi" 
                  primaryTypographyProps={{ 
                    fontWeight: 600,
                    fontSize: '1.1rem',
                    letterSpacing: '0.02em',
                    color: isActive('/servizi') ? theme.palette.primary.main : theme.palette.text.primary,
                    sx: {
                      transition: 'all 0.3s ease',
                      position: 'relative',
                      display: 'inline-block',
                      '&:hover': {
                        transform: 'translateX(3px)',
                      }
                    }
                  }} 
                />
              </ListItem>

              {/* Elegant divider with logo-themed colors */}
              <Box sx={{ 
                mx: 4, 
                my: 1.5, 
                height: '1px', 
                background: gradient,
                borderRadius: borderRadius,
                opacity: 0.8,
                boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
              }} />

              <ListItem 
                component={Link} 
                to="/contattaci"
                onClick={toggleMobileMenu}
                sx={{ 
                  py: 1.5,
                  px: 3,
                  mx: 2,
                  my: 1,
                  borderRadius: borderRadius,
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                  background: isActive('/contattaci') ? alpha(theme.palette.primary.main, 0.1) : 'transparent',
                  '&:hover': { 
                    background: gradient,
                    transform: 'translateX(5px)',
                    boxShadow: `0 4px 8px ${alpha(theme.palette.primary.main, 0.1)}`,
                    '& .MuiListItemText-primary': {
                      color: '#fff',
                      background: 'transparent',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: '#fff',
                    }
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    height: '100%',
                    width: '4px',
                    background: gradient,
                    opacity: isActive('/contattaci') ? 1 : 0,
                    transition: 'opacity 0.3s ease',
                    borderRadius: borderRadius,
                  },
                  '&:hover::before': {
                    opacity: 1,
                  }
                }}
              >
                <ListItemText 
                  primary="Contattaci" 
                  primaryTypographyProps={{ 
                    fontWeight: 600,
                    fontSize: '1.1rem',
                    letterSpacing: '0.02em',
                    color: isActive('/contattaci') ? theme.palette.primary.main : theme.palette.text.primary,
                    sx: {
                      transition: 'all 0.3s ease',
                      position: 'relative',
                      display: 'inline-block',
                      '&:hover': {
                        transform: 'translateX(3px)',
                      }
                    }
                  }} 
                />
              </ListItem>
            </List>
          </Drawer>
    </Box>
  );
}

export default Header;