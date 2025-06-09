import { createTheme } from '@mui/material/styles';


export const theme = createTheme({
  palette: {
    primary: {
      main: '#3498DB',
    },
    secondary: {
      main: '#2ECC71',
    },
    background: {
      default: '#10192b',
    },
    text: {
      primary: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
  },
});

export const borderColor = 'rgba(255, 255, 255, 0.2)';

export const gradient = `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`
