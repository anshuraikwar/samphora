import React, { useCallback, useEffect, useState } from 'react';

// import: styles
import { Box, IconButton, Typography } from '@mui/material';
import {
  carouselPreviewTranslateYOnHover,
  landingPageStyles,
  previewGap,
  previewHeight,
  previewSquareDimension,
  previewWidth,
} from './LandingPageStyles';
import { imagePageContentHPadding, imagePageContentMobileHPadding } from '../image-details/ImageDetailsStyles';

// import: assets
import Yorkowish from '../../../assets/img/yorkowish.webp';
import Esmeralda from '../../../assets/img/esmeralda.webp';
import LatinTravels from '../../../assets/img/latin_travels.webp';
import Harvest from '../../../assets/img/harvest.webp';
import Quasar from '../../../assets/img/quasar.webp';
import VaseOfFlowers from '../../../assets/img/vase_of_flowers.webp';
import Serenity from '../../../assets/img/serenity.webp';
import { ReactComponent as ArrowButtonIcon } from '../../../assets/svg/arrow-button.svg';

// import: config
// import: constants
import { ReusableComponentIDs } from '../../../constants/enums/ReusableComponentIDs.ts';

// import: utils
// import: services
// import: redux
// import: components
import AppBar from '../app-bar/AppBar';
import ImageDetails from '../image-details/ImageDetails';

// import: lazy load components

function LandingPage() {
  const [hoverImage, setHoverImage] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [openImagePage, setOpenImagePage] = useState(null);

  const images = {
    yorkowish: {
      id: 'yorkowish',
      title: 'Yorkowish',
      artist: 'Willem van de Velde the Younger',
      year: 1680,
      image: Yorkowish,
    },
    latin_travels: {
      id: 'latin_travels',
      title: 'Latin travels',
      artist: 'Willem van de Velde the Younger',
      year: 1680,
      image: LatinTravels,
    },
    esmeralda: {
      id: 'esmeralda',
      title: 'Esmeralda',
      artist: 'Samuel adams',
      year: 2022,
      image: Esmeralda,
    },
    harvest: {
      id: 'harvest',
      title: 'Harvest',
      artist: 'Samuel Melton Fisher',
      year: 1896,
      image: Harvest,
    },
    quasar: {
      id: 'quasar',
      title: 'Quasar',
      artist: 'Generative AI',
      year: 2022,
      image: Quasar,
    },
    vase_of_flowers: {
      id: 'vase_of_flowers',
      title: 'Vase of flowers',
      artist: 'Jan Davidsz. de Heem',
      year: 2022,
      image: VaseOfFlowers,
    },
    serenity: {
      id: 'serenity',
      title: 'Serenity',
      artist: 'Laura Vinck',
      year: 1670,
      image: Serenity,
    },
  };

  const changeCurrentImage = useCallback((step) => {
    let currentIndex;
    if (step > 0) {
      currentIndex = -1;
      if (hoverImage !== null) {
        currentIndex = Object.keys(images).indexOf(hoverImage);
      }
      if (currentIndex === Object.keys(images).length - 1) {
        currentIndex = -1;
      }
    } else {
      currentIndex = Object.keys(images).length;
      if (hoverImage !== null) {
        currentIndex = Object.keys(images).indexOf(hoverImage);
      }
      if (currentIndex === 0) {
        currentIndex = Object.keys(images).length;
      }
    }

    setHoverImage(() => Object.keys(images)[currentIndex + step]);
  }, [hoverImage]);

  const keyDownHandler = useCallback((e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      e.stopPropagation();
      changeCurrentImage(-1);
    }
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      e.stopPropagation();
      changeCurrentImage(1);
    }
  }, [changeCurrentImage]);

  useEffect(() => {
    document.addEventListener('keydown', keyDownHandler);

    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, [keyDownHandler]);
  const closeImageDetailsPage = (e) => {
    e.stopPropagation();
    setSelectedImage(null);
    setOpenImagePage(() => null);
    const element = document.getElementById(ReusableComponentIDs.IMAGE_DETAIL_PAGE_SCROLL_TO_TOP);
    if (element) {
      element.scrollIntoView({ block: 'end' });
    }
  };

  return (
    <Box
      id="landing-page"
      sx={[
        landingPageStyles.page,
      ]}
      onClick={closeImageDetailsPage}
    >
      <AppBar />

      <Box
        id="blur-backdrop"
        sx={[landingPageStyles.blurBackdrop,
          { backdropFilter: selectedImage !== null ? 'blur(5px)' : 'none' }]}
      />
      {Object.values(images).map((image) => (
        <Box
          id={`bg-${image.id}`}
          sx={[
            landingPageStyles.imageBackground,
            {
              backgroundImage: `linear-gradient(rgb(0,0,0,0.6), rgb(0,0,0,0.6)), url(${image.image})`,
            },
            (hoverImage === image.id
              || selectedImage === image.id
              || openImagePage === image.id) && { opacity: 1 },
          ]}
        />
      ))}

      {Object.values(images).map((image, index) => {
        const counter = index - Math.floor(Object.keys(images).length / 2);

        let leftBound = `calc(50vw - ((${previewWidth} / 2) + (${Math.abs(counter)} * (${previewGap} + ${previewWidth}))))`;
        let rightBound = `calc(50vw + ((${previewWidth} / 2) + (${Math.abs(counter)} * ${previewGap}) + ((${Math.abs(counter)} - 1) * ${previewWidth})))`;
        if (counter > 0) {
          leftBound = `calc(50vw + ((${previewWidth} / 2) + (${Math.abs(counter)} * ${previewGap}) + ((${Math.abs(counter)} - 1) * ${previewWidth})))`;
          rightBound = `calc(50vw - ((${previewWidth} / 2) + (${Math.abs(counter)} * (${previewGap} + ${previewWidth}))))`;
        }
        return (
          <Box
            key={`carousel-image-preview-${image.title}`}
            id={`carousel-image-preview-${image.title}`}
            sx={[landingPageStyles.carouselImagePreview,
              { left: leftBound, right: rightBound },
              selectedImage === image.id && landingPageStyles.squarePreviewStyles,
              openImagePage === image.id && landingPageStyles.imagePageBannerStyles,
              (selectedImage !== image.id && selectedImage !== null) && {
                opacity: 0,
              },
            ]}
            onMouseEnter={() => {
              setHoverImage(image.id);
            }}
            onMouseLeave={() => {
              setHoverImage(null);
            }}
            onClick={(e) => {
              e.stopPropagation();
              if (selectedImage === image.id) {
                setOpenImagePage(image.id);
              } else {
                setSelectedImage(image.id);
              }
            }}
          >
            <Box
              id={`${image.title}-carousel-preview-content`}
              sx={[landingPageStyles.carouselPreviewContent,
                (openImagePage === image.id) && { cursor: 'initial' }]}
            >
              <Box
                id={`${image.title}-title-preview`}
                sx={[
                  landingPageStyles.titlePreviewDiv,
                  (hoverImage === image.id) && landingPageStyles.titlePreviewDivOnHover,
                ]}
              >
                <Typography color="colors.white" sx={landingPageStyles.titlePreview}>
                  <i>{image.title}</i>
                </Typography>
              </Box>
              <Box
                id={`${image.title}-carousel-image`}
                sx={[
                  landingPageStyles.carouselImage,
                  { backgroundImage: `url(${image.image})` },
                  (hoverImage === image.id) && {
                    transform: `translateY(-${carouselPreviewTranslateYOnHover})`,
                  },
                  (selectedImage === image.id
                    || openImagePage === image.id) && {
                    transform: 'translateY(0)',
                  },
                ]}
              />
              <Box
                id={`${image.title}-square-preview-backdrop-gradient`}
                sx={[
                  landingPageStyles.imageSquarePreviewBackdropGradient,
                  (selectedImage === image.id
                    || openImagePage === image.id) && {
                    opacity: 1,
                  },
                ]}
              />
              <Box
                id={`${image.title}-back-button-div`}
                sx={[
                  landingPageStyles.backButtonDiv,
                  (selectedImage === image.id) && {
                    visibility: 'visible',
                  },
                  (openImagePage === image.id)
                  && landingPageStyles.backButtonDivImageDetailsPage,
                ]}
              >
                <IconButton
                  color="inherit"
                  aria-label="back button"
                  onClick={closeImageDetailsPage}
                  disableRipple
                  sx={landingPageStyles.backButton}
                >
                  <ArrowButtonIcon />
                </IconButton>
              </Box>
              <Box
                id={`${image.title}-title-subtitle`}
                sx={[
                  landingPageStyles.imageTitleSubtitleBox,
                  (selectedImage === image.id)
                  && landingPageStyles.imageTitleSubtitleBoxSquarePreview,
                  (openImagePage === image.id) && {
                    padding: { xs: `16px ${imagePageContentMobileHPadding}`, md: `32px ${imagePageContentHPadding}` },
                    justifyContent: 'center',
                  },
                ]}
              >
                <Typography color="colors.white" sx={landingPageStyles.imageYear}>{image.year}</Typography>
                <Box sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'start',
                }}
                >
                  <Typography color="colors.white" sx={landingPageStyles.imageTitle}>{image.title}</Typography>
                  <Typography color="colors.white" sx={landingPageStyles.imageSubtitle}>
                    by
                    {' '}
                    {image.artist}
                  </Typography>
                </Box>
                <Box />
              </Box>
              <Box
                id={`${image.title}-dot`}
                sx={[
                  landingPageStyles.carouselDot,
                  (selectedImage === image.id
                    || openImagePage === image.id)
                  && landingPageStyles.carouselDotSquarePreviewState,
                ]}
              />
            </Box>
          </Box>
        );
      })}

      <Box
        id="image-nav"
        sx={[{
          position: 'absolute',
          top: `calc(50vh + (${previewHeight} / 2) + 77px)`,
          left: '50%',

          display: 'flex',
          alignItems: 'center',
          gap: '36px',

          transform: 'translateX(-50%)',
          opacity: 1,
          transition: 'top 0.5s linear,'
            + ' opacity 0.5s linear',
          zIndex: 5,
        },
        selectedImage !== null && {
          top: `calc(50vh + (${previewSquareDimension} / 2) + 16px)`,
        },
        openImagePage !== null && {
          opacity: 0,
        }]}
      >
        <IconButton
          color="inherit"
          aria-label="back button"
          onClick={() => changeCurrentImage(-1)}
          disableRipple
          sx={[
            {
              padding: 0,

              opacity: 1,
              transition: 'opacity 0.5s linear',
            },
            selectedImage !== null && { opacity: 0 },
          ]}
        >
          <ArrowButtonIcon />
        </IconButton>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <Typography color="colors.white" sx={{ fontSize: '16px' }}><i>Fine Arts</i></Typography>
          <Typography color="colors.white" sx={{ fontSize: '9px' }}>Illustrative Collection • 2022</Typography>
        </Box>
        <IconButton
          color="inherit"
          aria-label="back button"
          onClick={() => changeCurrentImage(1)}
          disableRipple
          sx={[
            {
              padding: 0,

              opacity: 1,
              transition: 'opacity 0.5s linear',
            },
            selectedImage !== null && { opacity: 0 },
          ]}
        >
          <ArrowButtonIcon style={{ transform: 'rotate(180deg)' }} />
        </IconButton>
      </Box>

      <ImageDetails
        imageUrl={images[openImagePage]?.image}
        selectedImage={selectedImage}
        openImagePage={openImagePage}
        closeImageDetailsPage={closeImageDetailsPage}
      />
    </Box>
  );
}

export default LandingPage;
