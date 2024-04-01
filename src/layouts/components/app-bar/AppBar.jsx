import React, { useState } from 'react';

// import: styles
import {
  Box, Drawer, IconButton, Typography, useMediaQuery,
} from '@mui/material';
import { appBarStyles } from './AppBarStyles';

// import: assets
import { ReactComponent as MenuIcon } from '../../../assets/svg/menu.svg';
import { ReactComponent as CrossIcon } from '../../../assets/svg/cross.svg';

// import: config
// import: constants
// import: utils
// import: services
// import: redux
// import: components
// import: lazy load components

function AppBar() {
  const isSmallScreen = useMediaQuery('(max-width:900px)');

  const [openDrawer, setOpenDrawer] = useState(false);

  const menuItems = [
    'Portfolio',
    'Background',
    'contact',
  ];
  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };
  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  return (
    <>
      <Box
        id="app-bar"
        sx={appBarStyles.appBar}
      >
        <Typography
          color="colors.white"
          sx={{
            fontSize: '18px',
            fontWeight: 500,
            cursor: 'pointer',
          }}
        >
          Samphora
        </Typography>
        <Box
          id="nav"
          sx={appBarStyles.nav}
        >
          {menuItems.map((item) => (
            <Typography
              key={item}
              id={item}
              color="colors.white"
              sx={{
                fontSize: '11px',
                cursor: 'pointer',
              }}
            >
              {item}
            </Typography>
          ))}
        </Box>

        <Typography
          color="colors.white"
          sx={{
            fontSize: '11px',
            display: { xs: 'none', md: 'flex' },
            cursor: 'pointer',
          }}
        >
          Settings
        </Typography>

        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          disableRipple
          sx={{
            padding: 0,
            display: { xs: 'flex', md: 'none' },

            ...(openDrawer && { display: 'none' }),
          }}
        >
          <MenuIcon />
        </IconButton>
      </Box>
      {isSmallScreen && (
        <Drawer
          sx={appBarStyles.drawer}
          anchor="right"
          open={openDrawer}
        >
          <Box
            id="cross-button"
            sx={appBarStyles.crossButtonDiv}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerClose}
              edge="start"
              disableRipple
              sx={appBarStyles.crossButton}
            >
              <CrossIcon />
            </IconButton>
          </Box>
          <Box
            id="nav"
            sx={appBarStyles.drawerNav}
          >
            {menuItems.map((item) => (
              <Typography
                key={item}
                id={item}
                color="colors.white"
                sx={{
                  fontSize: '11px',
                  cursor: 'pointer',
                }}
                onClick={handleDrawerClose}
              >
                {item}
              </Typography>
            ))}
            <Typography
              color="colors.white"
              sx={{
                fontSize: '11px',
              }}
            >
              Settings
            </Typography>
          </Box>
        </Drawer>
      )}
    </>
  );
}

export default AppBar;
