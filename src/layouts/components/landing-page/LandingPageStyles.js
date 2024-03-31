export const previewWidth = '32px';
export const previewHeight = '358px';
export const previewGap = '16px';

export const previewSquareDimension = 'min(min(90vh, 90vw), 700px)';

export const imagePageBannerHeight = '300px';

export const imagePageContentHPadding = '24vw';
export const imagePageContentMobileHPadding = '16px';

export const landingPageStyles = {
  page: {
    height: '100%',
    width: '100%',

    position: 'relative',

    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  blurBackdrop: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,

    zIndex: 2,
  },
  imageBackground: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,

    backgroundSize: 'cover',
    backgroundPosition: 'center',

    opacity: 0,
    transition: 'opacity 0.5s linear',
    zIndex: 1,
  },
  carouselImagePreview: {
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
    zIndex: 5,
  },
  carouselPreviewContent: {
    width: '100%',
    height: '100%',
    borderRadius: 'inherit',

    position: 'relative',
  },
  carouselImage: {
    position: 'relative',

    width: '100%',
    height: '100%',
    borderRadius: 'inherit',

    backgroundSize: 'cover',
    backgroundPosition: 'center',

    transition: 'transform 0.5s linear',
    zIndex: 1,
  },
  imageTitleSubtitleBox: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,

    height: '100%',
    padding: '32px',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    justifyContent: 'space-between',

    transform: 'translateY(32px)',
    opacity: 0,
    transition: 'padding 0.5s linear,'
      + ' opacity 0.5s linear,'
      + ' transform 0.5s linear',
    zIndex: 3,
  },
  imageYear: {
    fontSize: '16px',
    fontWeight: 400,
  },
  imageTitle: {
    fontSize: '42px',
    fontWeight: 500,
  },
  imageSubtitle: {
    fontSize: '16px',
    fontWeight: 400,
  },
  carouselDot: {
    position: 'absolute',
    bottom: 0,
    right: '50%',

    height: '16px',
    width: '16px',
    borderRadius: '50%',
    border: '1px solid rgba(255, 255, 255, 0.5)',

    transform: 'translateX(50%)',
    transition: 'bottom 0.5s linear,'
      + ' right 0.5s linear,'
      + 'transform 0.5s linear',
    zIndex: 0,
  },

  squarePreviewStyles: {
    top: `calc(50vh - (${previewSquareDimension} / 2))`,
    left: `calc(50vw - (${previewSquareDimension} / 2))`,
    right: `calc(50vw - (${previewSquareDimension} / 2))`,

    height: previewSquareDimension,
    padding: 0,
    borderRadius: '40px',

    zIndex: 6,
  },
  imagePageBannerStyles: {
    top: '0',
    left: '0',
    right: '0',

    height: imagePageBannerHeight,
    padding: '8px 8px 0',
    borderRadius: '20px',

    zIndex: 7,
  },

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

    zIndex: 5,
  },
  imagePageContentImage: {
    flexShrink: 0,
    width: '290px',
    height: 'inherit',
    borderRadius: '24px',

    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
};
