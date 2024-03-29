import React from 'react';
import { Outlet } from 'react-router-dom';

// import: styles
import { Box } from '@mui/material';
import { layoutStyles } from './LayoutStyles';

// import: assets
// import: constants
// import: utils
// import: redux
// import: components
import Sidebar from './components/sidebar/Sidebar';

// import: lazy load components

export default function Layout() {
  return (
    <Box id=layout sx={layoutStyles.parentContainer}>
      <Sidebar />
      <Outlet />
    </Box>
  );
}
