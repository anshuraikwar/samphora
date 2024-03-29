import React from 'react';
import { Box, Button } from '@mui/material';
import pageNotFoundStyles from './PageNotFoundStyles';

function PageNotFound() {
  return (
    <Box id="page-not-found" sx={pageNotFoundStyles.pageNotFound}>
      ARE YE LOST?
      <Button
        variant="outlined"
        href="/"
      >
        Home
      </Button>
    </Box>
  );
}

export default PageNotFound;
