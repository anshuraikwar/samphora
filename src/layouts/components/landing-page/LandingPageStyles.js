import { imagePageBannerHeight } from '../image-details/ImageDetailsStyles';
import { transitionTimingFunction } from '../../ui-blocks/ReusableStyles';

export const previewWidth = 'min(32px, 8vw)';
export const previewHeight = 'min(358px, 40vh)';
export const previewGap = '16px';

export const carouselPreviewTranslateYOnHover = '28px';
export const previewSquareDimension = 'min(min(70vh, 70vw), 700px)';
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
    transition: `opacity 0.5s ${transitionTimingFunction}`,
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

    transition: `top 0.5s ${transitionTimingFunction},
      left 0.5s ${transitionTimingFunction},
      right 0.5s ${transitionTimingFunction},
      height 0.5s ${transitionTimingFunction},
      background-color 0.5s ${transitionTimingFunction},
      padding 0.5s ${transitionTimingFunction},
      opacity 0.5s ${transitionTimingFunction},
      border-radius 0.5s ${transitionTimingFunction}`,
    zIndex: 5,
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

  titlePreviewDiv: {
    position: 'absolute',
    bottom: previewHeight,
    right: '50%',

    opacity: 0,
    transform: 'translate(50%, 0)',
    transition: `opacity 0.5s ${transitionTimingFunction},`
      + ` transform 0.5s ${transitionTimingFunction}`,
  },
  titlePreview: {
    fontSize: '12px',
    letterSpacing: '4%',
  },
  titlePreviewDivOnHover: {
    opacity: 1,
    transform: `translate(50%, calc(-${carouselPreviewTranslateYOnHover} - 16px))`,
  },

  carouselPreviewContent: {
    width: '100%',
    height: '100%',
    borderRadius: 'inherit',

    position: 'relative',
    cursor: 'pointer',
  },
  carouselImageMouseEventsOverlay: {
    position: 'absolute',
    top: '50%',
    right: '50%',
    borderRadius: 'inherit',

    height: previewHeight,
    width: previewWidth,

    visibility: 'visible',
    transform: 'translate(50%, -50%)',
    zIndex: 5,
  },
  carouselImage: {
    position: 'relative',

    width: '100%',
    height: '100%',
    borderRadius: 'inherit',

    backgroundSize: 'cover',
    backgroundPosition: 'center',

    transition: `transform 0.5s ${transitionTimingFunction}`,
    zIndex: 1,
  },
  imageSquarePreviewBackdropGradient: {
    position: 'absolute',
    inset: 0,

    borderRadius: 'inherit',

    background: 'linear-gradient(rgb(0,0,0,0), rgb(0,0,0,0.6))',
    opacity: 0,
    transition: `opacity 0.5s ${transitionTimingFunction}`,
    zIndex: 2,
  },
  backButtonDiv: {
    position: 'absolute',
    top: { xs: '55px', md: '92px' },
    left: '13px',

    visibility: 'hidden',
    transform: 'translateX(-100px)',
    opacity: 0,
    transition: `opacity 0.5s ${transitionTimingFunction},`
      + ` transform 0.5s ${transitionTimingFunction}`,
    cursor: 'initial',
    zIndex: 4,
  },
  backButtonDivImageDetailsPage: {
    transform: 'translateX(0)',
    opacity: 1,
    transition: `opacity 0.5s ${transitionTimingFunction} 0.5s,`
      + ` transform 0.5s ${transitionTimingFunction} 0.5s`,
    cursor: 'pointer',
  },
  backButton: {
    padding: 0,
  },
  imageTitleSubtitleBox: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,

    height: '100%',
    padding: 0,

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    justifyContent: 'space-between',

    transform: 'translateY(32px)',
    opacity: 0,
    transition: `padding 0.5s ${transitionTimingFunction},`
      + ` opacity 0.5s ${transitionTimingFunction},`
      + ` transform 0.5s ${transitionTimingFunction}`,
    overflow: 'hidden',
    zIndex: 3,
  },
  imageTitleSubtitleBoxSquarePreview: {
    padding: { xs: '16px 16px 45px', md: '32px' },

    transform: 'translateY(0)',
    transition: `padding 0.5s ${transitionTimingFunction},`
      + ` opacity 0.5s ${transitionTimingFunction} 0.5s,`
      + ` transform 0.5s ${transitionTimingFunction} 0.5s`,
    opacity: 1,
  },
  imageYear: {
    fontSize: { xs: '12px', md: '16px' },
    fontWeight: 400,
  },
  imageTitle: {
    fontSize: { xs: '32px', md: '42px' },
    fontWeight: 500,
  },
  imageSubtitle: {
    fontSize: { xs: '12px', md: '16px' },
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
    transition: `bottom 0.5s ${transitionTimingFunction},`
      + ` right 0.5s ${transitionTimingFunction},`
      + ` transform 0.5s ${transitionTimingFunction}`,
    zIndex: 0,
  },
  carouselDotSquarePreviewState: {
    bottom: '24px',
    right: '24px',

    transform: 'translateX(0)',
    zIndex: 2,
  },

  imageNav: {
    position: 'absolute',
    top: {
      xs: `calc(50vh + (${previewHeight} / 2) + 32px)`,
      md: `calc(50vh + (${previewHeight} / 2) + 77px)`,
    },
    left: '50%',

    width: '90vw',
    maxWidth: '350px',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: { xs: '12px', md: '36px' },

    transform: 'translateX(-50%)',
    opacity: 1,
    transition: `top 0.5s ${transitionTimingFunction},`
      + ` opacity 0.5s ${transitionTimingFunction}`,
    zIndex: 5,
  },
  imageNavButton: {
    maxWidth: '100px',
    padding: 0,

    opacity: 1,
    transition: `max-width 0.5s ${transitionTimingFunction}, opacity 0.5s ${transitionTimingFunction}`,

    '& svg': {
      height: { xs: '24px', md: '35px' },
      width: 'auto',
    },
  },
  imageNavButtonHidden: { maxWidth: 0, opacity: 0 },

  credits: {
    position: 'absolute',
    bottom: '8px',
    right: '8px',

    zIndex: 5,
  },
};
