import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import {
  imagePageBannerHeight, landingPageStyles, previewGap, previewHeight, previewWidth,
} from './LandingPageStyles';
import Yorkowish from '../../../assets/img/yorkowish.webp';
import Esmeralda from '../../../assets/img/esmeralda.webp';
import LatinTravels from '../../../assets/img/latin_travels.webp';
import Harvest from '../../../assets/img/harvest.webp';
import Quasar from '../../../assets/img/quasar.webp';
import VaseOfFlowers from '../../../assets/img/vase_of_flowers.webp';
import Serenity from '../../../assets/img/serenity.webp';

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

  return (
    <Box
      id="landing-page"
      sx={[
        landingPageStyles.page,
      ]}
      onClick={() => {
        setSelectedImage(null);
        setOpenImagePage(null);
      }}
    >
      <Box
        id="blur-backdrop"
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,

          backdropFilter: selectedImage !== null ? 'blur(5px)' : 'none',

          zIndex: 2,
        }}
      />
      {Object.values(images).map((image) => (
        <Box
          id={`bg-${image.id}`}
          sx={[
            {
              position: 'absolute',
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,

              backgroundImage: `linear-gradient(rgb(0,0,0,0.6), rgb(0,0,0,0.6)), url(${image.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',

              opacity: 0,
              transition: 'opacity 0.5s linear',
              zIndex: 1,
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
            id="image-preview"
            sx={[landingPageStyles.imagePreview,
              { left: leftBound, right: rightBound },
              (hoverImage === image.id) && {
                top: `calc(50vh - ( ${previewHeight} / 2 ) - 28px)`,
              },
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
            <Box sx={{
              width: '100%',
              height: '100%',
              borderRadius: 'inherit',

              backgroundImage: `url(${image.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            />
          </Box>
        );
      })}

      <Box
        id="image-page-content"
        sx={[
          landingPageStyles.imagePageContent,
          openImagePage !== null && {
            top: imagePageBannerHeight,
          },
        ]}
        onClick={() => {
          setSelectedImage(null);
          setOpenImagePage(null);
        }}
      >
        <Box
          sx={{
            width: '100%',
            padding: '24px 0',

            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'start',
            gap: '24px',

            zIndex: 5,
          }}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <Typography color="colors.white">
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
              <Typography color="colors.white">
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
              <Typography color="colors.white">
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

            <Box sx={{
              flexShrink: 0,
              width: '290px',
              height: 'inherit',
              borderRadius: '24px',

              backgroundColor: 'rgba(255,255,255,0.5)',
              backgroundImage: `url(${images[openImagePage]?.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default LandingPage;
