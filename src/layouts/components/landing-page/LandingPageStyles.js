export const previewWidth = '32px';
export const previewHeight = '358px';
export const previewGap = '16px';

export const previewSquareDimension = 'min(min(90vh, 90vw), 700px)';

export const imagePageBannerHeight = '300px';

export const landingPageStyles = {
  page: {
    height: '100%',
    width: '100%',

    position: 'relative',

    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  imagePreview: {
    height: previewHeight,
    padding: 0,
    borderRadius: '8px',

    position: 'absolute',
    top: `calc(50vh - ( ${previewHeight} / 2 ))`,
    left: `calc(50vw - ( ${previewWidth} / 2 ))`,
    right: `calc(50vw - ( ${previewWidth} / 2 ))`,

    opacity: 1,

    transition: 'top 0.5s linear,'
      + ' left 0.5s linear,'
      + ' right 0.5s linear,'
      + ' height 0.5s linear,'
      + ' background-color 0.5s linear,'
      + ' padding 0.5s linear,'
      + ' opacity 0.5s linear',
  },

  squarePreviewStyles: {
    top: `calc(50vh - (${previewSquareDimension} / 2))`,
    left: `calc(50vw - (${previewSquareDimension} / 2))`,
    right: `calc(50vw - (${previewSquareDimension} / 2))`,

    height: previewSquareDimension,
    padding: 0,
    borderRadius: '40px',

    zIndex: 1,
  },
  imagePageBannerStyles: {
    top: '0',
    left: '0',
    right: '0',

    height: imagePageBannerHeight,
    padding: '8px 8px 0',
    borderRadius: '20px',

    zIndex: 1,
  },

  imagePageContent: {
    position: 'absolute',
    top: '100vh',
    bottom: 0,
    left: 0,
    right: 0,

    padding: { xs: '0 16px', md: '0 24vw' },

    transition: 'top 0.5s linear',
    overflow: 'auto',
  },
};
