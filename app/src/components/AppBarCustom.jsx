import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { navItems } from '../constants/items';
import logo from '../assets/logo.png';

const companyName = import.meta.env.VITE_COMPANY_NAME;

const AppBarCustom = ({ onMenuClick }) => {
  return (
    <AppBar 
      component="nav" 
      sx={{
        backgroundColor: "#10192b",
      }}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={onMenuClick}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <Box
            component="img"
            src={logo}
            alt="logo"
            sx={{ height: 30, mr: 1 }}
          />
          <Typography
            variant="h6"
            sx={{
              fontSize: { xs: '1rem', sm: '1.25rem' },
              fontWeight: 600,
              display: 'block',
            }}
          >
            {companyName}
          </Typography>
        </Box>

        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          {navItems.map((item) => (
            <Button key={item} sx={{ color: '#fff' }}>
              {item}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarCustom;
