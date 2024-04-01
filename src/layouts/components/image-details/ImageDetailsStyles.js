export const imagePageBannerHeight = '300px';

export const imagePageContentHPadding = '24vw';
export const imagePageContentMobileHPadding = '16px';

export const imageDetailsStyles = {
  imagePageContentWrapper: {
    position: 'absolute',
    top: '100vh',
    bottom: 0,
    left: 0,
    right: 0,

    padding: { xs: `0 ${imagePageContentMobileHPadding}`, md: `0 ${imagePageContentHPadding}` },

    transition: 'top 0.5s linear',
    overflow: 'auto',
    zIndex: 5,
  },
  imagePageContent: {
    width: '100%',
    padding: '24px 0',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    gap: '24px',

    textAlign: 'left',

    zIndex: 5,
  },
  imagePageContentImage: {
    flexShrink: 0,
    width: { xs: '100%', md: '290px' },
    height: { xs: '300px', md: 'inherit' },
    borderRadius: '24px',

    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
};
