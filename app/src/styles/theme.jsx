import { createTheme } from '@mui/material/styles';
import { styled, alpha } from '@mui/system';
import { 
  Box, 
  Fade, 
  Modal, 
  Button, 
  Card, 
  Typography,
  CardMedia, 
  CardContent, 
  IconButton, 
  Paper,
  Avatar
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export const borderRadius = 2;


export const theme = createTheme({
  palette: {
    primary: {
      main: '#3498DB',
    },
    secondary: {
      main: '#2ECC71',
    },
    background: {
      default: '#FFFFFF',
    },
    text: {
      primary: '#000000',
    },
  },
  typography: {
    fontFamily: "'Montserrat', 'Roboto', 'Arial', sans-serif",
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 700,
      lineHeight: 1.1,
    },
    button: {
      fontWeight: 700,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '2rem',
          padding: '0.8rem 1.5rem',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'scale(1.05)',
          },
        },
      },
    },
  },
});

export const gradient = `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`

export const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: 50,
  height: 50,
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'scale(1.1)',
  },
}));

export const GradientButton = styled(Button)(({ theme }) => ({
  background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  color: theme.palette.text.primary,
  width: '192px',
  textTransform: 'none',
}));

export const ImageCard = styled(Card)(({ theme }) => ({
  boxShadow: '0 0 340px rgba(39, 183, 192, 0.5)',
  height: '470px',
  overflow: 'hidden',
  position: 'relative',
  zIndex: 2,
  borderRadius: borderRadius,
  '& .MuiCardMedia-root': {
    height: '100%',
    objectFit: 'cover',
  },
}));

export const PageTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  position: 'relative',
  display: 'inline-block',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: -10,
    left: '50%',
    transform: 'translateX(-50%)',
    width: '80px',
    height: '4px',
    background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
    borderRadius: borderRadius,
  }
}));

export const ServiceCard = styled(Card)(({ theme }) => ({
  width: 400,
  height: 350,
  borderRadius: borderRadius,
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  overflow: 'hidden',
  boxShadow: '0 10px 30px rgba(12, 18, 34, 0.3)',
  position: 'relative',
  '&:hover': {
    transform: 'translateY(-15px)',
    boxShadow: '0 20px 40px rgba(39, 183, 192, 0.4)',
    '& .MuiCardMedia-root': {
      transform: 'scale(1.1)',
    },
  },
}));

export const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  height: 230,
  transition: 'transform 0.8s ease',
}));

export const GradientCardContent = styled(CardContent)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  padding: '1.5rem',
  height: 120,
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  '& .MuiTypography-root': {
    overflow: 'visible',
    whiteSpace: 'normal',
    textOverflow: 'clip',
  }
}));

export const IconBox = styled(Box)(({ theme }) => ({
  color: alpha(theme.palette.text.primary, 0.9),
  fontSize: 28,
  marginLeft: '8px',
  display: 'flex',
  alignItems: 'center',
  borderRadius: borderRadius,
}));

export function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export const SocialButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: alpha(theme.palette.primary.main, 0.1),
  color: theme.palette.primary.main,
  transition: 'all 0.3s ease',
  borderRadius: borderRadius,
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    transform: 'scale(1.1)',
    borderRadius: borderRadius,
  },
}));

export const ContactInfoItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(1.5),
  borderRadius: borderRadius,
  transition: 'all 0.2s ease',
  '&:hover': {
    backgroundColor: alpha(theme.palette.primary.main, 0.05),
    transform: 'translateX(5px)',
  },
}));

export const CopyButton = styled(IconButton)(({ theme }) => ({
  marginLeft: theme.spacing(1),
  padding: theme.spacing(0.5),
  backgroundColor: alpha(theme.palette.primary.main, 0.1),
  color: theme.palette.primary.main,
  transition: 'all 0.2s ease',
  borderRadius: borderRadius,
  '&:hover': {
    backgroundColor: alpha(theme.palette.primary.main, 0.2),
    transform: 'scale(1.05)',
    borderRadius: borderRadius,
  },
}));

export const ContactCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: borderRadius,
  backgroundColor: theme.palette.background.paper,
  boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 15px 50px rgba(39, 183, 192, 0.2)',
    borderRadius: borderRadius,
  },
}));

export function ImageModal({ open, image, onClose }) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      closeAfterTransition
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 2,
        backdropFilter: 'blur(5px)',
        transition: 'backdrop-filter 0.5s ease',
        borderRadius: borderRadius,
      }}
    >
      <Fade 
        in={open} 
        timeout={{ enter: 600, exit: 500 }}
        easing={{ enter: 'cubic-bezier(0.3, 1, 0.3, 1)', exit: 'cubic-bezier(0.3, 0, 0.3, 1)' }}
      >
        <Box
          sx={{
            position: 'relative',
            maxWidth: '90vw',
            maxHeight: '90vh',
            bgcolor: 'transparent',
            borderRadius: borderRadius,
            boxShadow: 'none',
            p: 0,
            overflow: 'hidden',
            transform: open ? 'scale(1) translateY(0)' : 'scale(0.95) translateY(20px)',
            transition: 'transform 0.5s cubic-bezier(0.3, 1, 0.3, 1)',
          }}
        >
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 16,
              top: 16,
              color: 'white',
              bgcolor: 'rgba(0,0,0,0.5)',
              zIndex: 10,
              transform: 'rotate(0deg)',
              transition: 'all 0.3s ease',
              borderRadius: borderRadius,
              '&:hover': {
                bgcolor: 'rgba(0,0,0,0.7)',
                transform: 'rotate(90deg)',
                borderRadius: borderRadius,
              }
            }}
          >
            <CloseIcon />
          </IconButton>
          {image && (
            <Box
              component="img"
              src={image.img}
              alt={image.alt}
              sx={{
                display: 'block',
                maxWidth: '100%',
                maxHeight: '90vh',
                objectFit: 'contain',
                opacity: 1,
                filter: 'brightness(1)',
                transition: 'opacity 0.4s ease-in-out, filter 0.4s ease-in-out',
                animation: 'fadeIn 0.6s ease-out',
                borderRadius: borderRadius,
                '@keyframes fadeIn': {
                  '0%': { opacity: 0, filter: 'brightness(1.2)' },
                  '100%': { opacity: 1, filter: 'brightness(1)' },
                },
              }}
            />
          )}
        </Box>
      </Fade>
    </Modal>
  );
}
