import React from 'react';

// import: styles
import './App.css';
import { Box, ThemeProvider } from '@mui/material';
import appTheme from './layouts/ui-blocks/AppTheme';
import colorPalette from './layouts/ui-blocks/ColorPalette';
import LandingPage from './layouts/components/landing-page/LandingPage';

// import: assets
// import: constants
// import: utils
// import: redux
// import: components
// import: lazy load components

function App() {
  return (
    <Box
      id="app"
      className="App"
      sx={[
        { backgroundColor: colorPalette.background },
      ]}
      onScroll={() => {
        // any scroll dependent func
      }}
    >
      <ThemeProvider theme={appTheme}>
        <LandingPage />
      </ThemeProvider>
    </Box>
  );
}

export default App;
