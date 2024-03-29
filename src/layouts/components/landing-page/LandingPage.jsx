import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import {
  imagePageBannerHeight, landingPageStyles, previewGap, previewWidth,
} from './LandingPageStyles';
import BGImage from '../../../assets/img/esmeralda.webp';

function LandingPage() {
  const [hoverImage, setHoverImage] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [openImagePage, setOpenImagePage] = useState(null);
  const images = [1, 2, 3, 4, 5];

  console.log('hoverImage: ', hoverImage);
  return (
    <Box
      id="landing-page"
      sx={[
        landingPageStyles.page,
        { backgroundImage: `linear-gradient(rgb(0,0,0,0.6), rgb(0,0,0,0.6)), url(${BGImage})` },
      ]}
      onClick={() => {
        setSelectedImage(null);
        setOpenImagePage(null);
      }}
    >
      <Box sx={{
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,

        backdropFilter: selectedImage !== null ? 'blur(5px)' : 'none',
      }}
      >
        l
      </Box>
      {images.map((image, index) => {
        const counter = index - Math.floor(images.length / 2);

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
              selectedImage === image && landingPageStyles.squarePreviewStyles,
              openImagePage === image && landingPageStyles.imagePageBannerStyles,
              (selectedImage !== image && selectedImage !== null) && {
                opacity: 0,
              },
            ]}
            onMouseEnter={() => {
              setHoverImage(image);
            }}
            onClick={(e) => {
              e.stopPropagation();
              if (selectedImage === image) {
                setOpenImagePage(image);
              } else {
                setSelectedImage(image);
              }
            }}
          >
            <Box sx={{
              width: '100%',
              height: '100%',
              borderRadius: 'inherit',

              backgroundImage: `url(${BGImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            >
              i
            </Box>
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
              backgroundImage: `url(${BGImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            >
              image
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default LandingPage;
