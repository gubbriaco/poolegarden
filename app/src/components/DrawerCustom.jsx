import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { navItems } from '../constants/items';
import { theme, borderColor } from '../styles/theme';

const drawerWidth = 240;

const DrawerCustom = ({ open, onClose, container }) => {
  const drawer = (
    <Box onClick={onClose} sx={{ textAlign: 'center' }}>
      <List>
        {navItems.map((item, index) => (
          <React.Fragment key={item}>
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText primary={item.toUpperCase()} sx={{ color: theme.palette.text.primary }} />
              </ListItemButton>
            </ListItem>
            {index < navItems.length - 1 && ( // to avoid divider after the last item
              <Divider sx={{ borderColor: borderColor, mx: 2 }} />
            )}
          </React.Fragment>
        ))}
      </List>

    </Box>
  );

  return (
    <Drawer
      container={container}
      variant="temporary"
      open={open}
      onClose={onClose}
      ModalProps={{ keepMounted: true }}
      sx={{
        display: { xs: 'block', sm: 'none' },
        '& .MuiDrawer-paper': {
          boxSizing: 'border-box',
          width: drawerWidth,
          backgroundColor: "#10192b",
        },
      }}
    >
      {drawer}
    </Drawer>
  );
};

export default DrawerCustom;
