import React from 'react';

// import: styles
import { Box } from '@mui/material';
import homePageStyles from './HomePageStyles';

// import: assets
// import: constants
// import: utils
// import: redux
// import: components
// import: lazy load components

function HomeView() {
  return (
    <Box id="home-page" sx={homePageStyles.parentContainer}>
      <Box id="page-layout" sx={homePageStyles.pageLayout}>
        HOME PAGE
      </Box>
    </Box>
  );
}

export default HomeView;
