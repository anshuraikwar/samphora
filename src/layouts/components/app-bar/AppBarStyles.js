export const appBarStyles = {
  appBar: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,

    padding: { xs: '16px', md: '21px' },

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    zIndex: 10,
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',

    '& svg': {
      height: { xs: '16px', md: '24px' },
      width: 'auto',
    },
  },
  logoText: {
    fontSize: { xs: '14px', md: '18px' },
    fontWeight: 500,
    cursor: 'pointer',
  },
  nav: {
    display: { xs: 'none', md: 'flex' },

    flexGrow: 1,
    maxWidth: '330px',

    alignItems: 'center',
    justifyContent: 'space-between',
  },
  drawer: {
    width: '100vw',
    flexShrink: 0,

    '& .MuiDrawer-paper': {
      backgroundColor: 'transparent',
      backdropFilter: 'blur(5px)',

      width: '100vw',
      boxSizing: 'border-box',
    },
  },
  crossButtonDiv: {
    padding: '24px',

    display: 'flex',
    justifyContent: 'end',
  },
  crossButton: {
    padding: 0,
    display: 'flex',
  },

  drawerNav: {
    width: '100%',
    display: 'flex',
    padding: '24px',

    flexGrow: 1,

    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'start',
    gap: '24px',
  },
};
