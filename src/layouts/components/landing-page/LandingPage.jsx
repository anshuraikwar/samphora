import React, { useState } from 'react';
import {
  Box, Drawer, IconButton, Typography, useMediaQuery,
} from '@mui/material';
import {
  imagePageBannerHeight,
  imagePageContentHPadding,
  imagePageContentMobileHPadding,
  landingPageStyles,
  previewGap,
  previewWidth,
} from './LandingPageStyles';
import Yorkowish from '../../../assets/img/yorkowish.webp';
import Esmeralda from '../../../assets/img/esmeralda.webp';
import LatinTravels from '../../../assets/img/latin_travels.webp';
import Harvest from '../../../assets/img/harvest.webp';
import Quasar from '../../../assets/img/quasar.webp';
import VaseOfFlowers from '../../../assets/img/vase_of_flowers.webp';
import Serenity from '../../../assets/img/serenity.webp';

import { ReactComponent as MenuIcon } from '../../../assets/svg/menu.svg';
import { ReactComponent as CrossIcon } from '../../../assets/svg/cross.svg';
import { ReactComponent as ArrowButtonIcon } from '../../../assets/svg/arrow-button.svg';
import { ReusableComponentIDs } from '../../../constants/enums/ReusableComponentIDs.ts';

function LandingPage() {
  const isSmallScreen = useMediaQuery('(max-width:900px)');

  const [hoverImage, setHoverImage] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [openImagePage, setOpenImagePage] = useState(null);
  const [openDrawer, setOpenDrawer] = useState(false);

  const menuItems = [
    'Portfolio',
    'Background',
    'contact',
  ];
  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };
  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  const closeImageDetailsPage = (e) => {
    e.stopPropagation();
    setSelectedImage(null);
    setOpenImagePage(() => null);
    const element = document.getElementById(ReusableComponentIDs.IMAGE_DETAIL_PAGE_SCROLL_TO_TOP);
    if (element) {
      element.scrollIntoView({ block: 'end' });
    }
  };

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

  return (
    <Box
      id="landing-page"
      sx={[
        landingPageStyles.page,
      ]}
      onClick={closeImageDetailsPage}
    >
      <Box
        id="app-bar"
        sx={landingPageStyles.appBar}
      >
        <Typography
          color="colors.white"
          sx={{
            fontSize: '18px',
            fontWeight: 500,
            cursor: 'pointer',
          }}
        >
          Samphora
        </Typography>
        <Box
          id="nav"
          sx={landingPageStyles.nav}
        >
          {menuItems.map((item) => (
            <Typography
              key={item}
              id={item}
              color="colors.white"
              sx={{
                fontSize: '11px',
                cursor: 'pointer',
              }}
            >
              {item}
            </Typography>
          ))}
        </Box>

        <Typography
          color="colors.white"
          sx={{
            fontSize: '11px',
            display: { xs: 'none', md: 'flex' },
            cursor: 'pointer',
          }}
        >
          Settings
        </Typography>

        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          disableRipple
          sx={{
            padding: 0,
            display: { xs: 'flex', md: 'none' },

            ...(openDrawer && { display: 'none' }),
          }}
        >
          <MenuIcon />
        </IconButton>
      </Box>
      {isSmallScreen && (
        <Drawer
          sx={landingPageStyles.drawer}
          anchor="right"
          open={openDrawer}
        >
          <Box
            id="cross-button"
            sx={landingPageStyles.crossButtonDiv}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerClose}
              edge="start"
              disableRipple
              sx={landingPageStyles.crossButton}
            >
              <CrossIcon />
            </IconButton>
          </Box>
          <Box
            id="nav"
            sx={landingPageStyles.drawerNav}
          >
            {menuItems.map((item) => (
              <Typography
                key={item}
                id={item}
                color="colors.white"
                sx={{
                  fontSize: '11px',
                  cursor: 'pointer',
                }}
                onClick={handleDrawerClose}
              >
                {item}
              </Typography>
            ))}
            <Typography
              color="colors.white"
              sx={{
                fontSize: '11px',
              }}
            >
              Settings
            </Typography>
          </Box>
        </Drawer>
      )}

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
              id="carousel-preview-content"
              sx={[landingPageStyles.carouselPreviewContent,
                (openImagePage === image.id) && { cursor: 'initial' }]}
            >
              <Box
                id="carousel-image"
                sx={[
                  landingPageStyles.carouselImage,
                  { backgroundImage: `url(${image.image})` },
                  (hoverImage === image.id) && {
                    transform: 'translateY(-28px)',
                  },
                  (selectedImage === image.id
                    || openImagePage === image.id) && {
                    transform: 'translateY(0)',
                  },
                ]}
              />
              <Box
                id="square-preview-backdrop-gradient"
                sx={[
                  landingPageStyles.imageSquarePreviewBackdropGradient,
                  (selectedImage === image.id
                    || openImagePage === image.id) && {
                    opacity: 1,
                  },
                ]}
              />
              <Box
                id="back-button-div"
                sx={[
                  landingPageStyles.backButtonDiv,
                  (selectedImage === image.id) && {
                    visibility: 'visible',
                  },
                  (openImagePage === image.id) && {
                    transform: 'translateX(0)',
                    opacity: 1,
                    transition: 'opacity 0.5s linear 0.5s,'
                      + ' transform 0.5s linear 0.5s',
                    cursor: 'pointer',
                  },
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
                id="image-title-subtitle"
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
              <Box sx={[
                landingPageStyles.carouselDot,
                (selectedImage === image.id
                  || openImagePage === image.id) && landingPageStyles.carouselDotSquarePreviewState,
              ]}
              />
            </Box>
          </Box>
        );
      })}

      <Box
        id="image-page-content-wrapper"
        sx={[
          landingPageStyles.imagePageContentWrapper,
          (openImagePage !== null
            && openImagePage === selectedImage) && {
            top: imagePageBannerHeight,
          },
        ]}
        onClick={closeImageDetailsPage}
      >
        <Box
          id="image-page-content"
          sx={landingPageStyles.imagePageContent}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <Box
            id={ReusableComponentIDs.IMAGE_DETAIL_PAGE_SCROLL_TO_TOP}
            sx={{ width: '100%', height: 0 }}
          />
          <Typography color="colors.white" align="inherit">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Etiam tincidunt eros id erat imperdiet venenatis.
            Sed non elit eu est pretium rhoncus. Sed risus velit,
            semper nec pharetra non, tincidunt quis magna. Nullam
            porttitor, turpis in imperdiet accumsan, massa nulla
            tincidunt ipsum, eget hendrerit nisi metus vitae mi.
            Etiam consequat consequat purus vel sodales. Nullam
            eros tellus, consequat vitae euismod non, sollicitudin
            sed urna. Aenean commodo nisl et ex blandit dignissim.
            Donec porttitor efficitur condimentum. Vestibulum
            finibus dolor non accumsan interdum. Phasellus sagittis,
            neque sed pulvinar laoreet, dolor sem gravida
            libero, vitae tincidunt risus metus a diam. Phasellus
            mattis ut quam id dignissim. Duis mollis at nibh non
            maximus. Cras pharetra elit quis erat consequat, vitae
            commodo orci eleifend. Aenean vestibulum viverra est
            et posuere. Mauris at libero sapien.
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column-reverse', md: 'row' },
              gap: 'inherit',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 'inherit',
              }}
            >
              <Typography color="colors.white" align="inherit">
                Duis tempus lacus nec ultricies fringilla. Duis
                ac interdum sem, venenatis pharetra enim. Donec
                ultricies tristique convallis. Vestibulum tempor
                ultrices lectus, in facilisis erat porta eget. Praesent
                elementum, magna ut feugiat pretium, libero orci
                varius metus, sit amet ultricies nulla nulla ac leo.
                Aenean congue leo vitae mauris ultrices feugiat.
                Vestibulum quis lobortis nunc. Fusce convallis volutpat
                vestibulum. Sed tellus diam, sodales at vestibulum
                id, sollicitudin non felis. Nunc metus ante, tempor
                sit amet arcu at, tempor suscipit purus. Donec eget
                neque enim. Fusce tincidunt. Fusce tincidunt.
              </Typography>
              <Typography color="colors.white" align="inherit">
                Duis tempus lacus nec ultricies fringilla. Duis ac
                interdum sem, venenatis pharetra enim. Donec
                ultricies tristique convallis. Vestibulum tempor
                ultrices lectus, in facilisis erat porta eget. Praesent
                elementum, magna ut feugiat pretium, libero orci
                varius metus, sit amet ultricies nulla nulla ac leo.
                Aenean congue leo vitae mauris ultrices feugiat.
                Vestibulum quis lobortis nunc. Fusce convallis volutpat
                vestibulum. Sed tellus diam, sodales at vestibulum
                id, sollicitudin non felis. Nunc metus ante, tempor
                sit amet arcu at, tempor suscipit purus. Donec eget
                neque enim. Fusce tincidunt. Fusce tincidunt.
              </Typography>
            </Box>

            <Box sx={[landingPageStyles.imagePageContentImage,
              { backgroundImage: `url(${images[openImagePage]?.image})` }]}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default LandingPage;
