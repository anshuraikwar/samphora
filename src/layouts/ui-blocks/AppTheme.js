import { createTheme } from '@mui/material';
import { Fonts } from '../../constants/enums/FontsEnum.ts';
import colorPalette from './ColorPalette';

/*
  FONT WEIGHTS MAPPING
  --------------------
  light     | 300
  regular   | 400
  medium    | 500
  semi-bold | 600
  bold      | 700
 */

const appThemeWithoutCustomStyles = createTheme({
  spacing: 8,
  breakpoints: {
    keys: [
      'xs',
      'sm',
      'md',
      'lg',
      'xl',
      'xxl',
    ],
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1440,
      xxl: 1700,
    },
    unit: 'px',
  },
  palette: {
    background: {
      default: colorPalette.white,
    },
    text: {
      primary: colorPalette.grey500,
    },
    primary: {
      main: '#0D1F39',
    },
    colors: {
      ...colorPalette,
    },
  },
  typography: {
    fontFamily: Fonts.URBANIST,
    skHeight: '1em',
    pxToRem: (value) => value / 16,
    scrollMarginTop: 'calc(var(--MuiDocs-header-height) + 32px)',
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {},
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});
const appTheme = createTheme(appThemeWithoutCustomStyles, {
  typography: {
    body1: {
      fontSize: '16px',
    },
  },
  components: {
    MuiButton: {
      variants: [],
    },
    MuiChip: {
      variants: [],
    },
  },
});

export default appTheme;
