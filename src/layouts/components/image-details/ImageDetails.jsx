import React from 'react';
import PropTypes from 'prop-types';

// import: styles
import { Box, Typography } from '@mui/material';
import { imageDetailsStyles, imagePageBannerHeight } from './ImageDetailsStyles';

// import: assets
// import: config
// import: constants
import { ReusableComponentIDs } from '../../../constants/enums/ReusableComponentIDs.ts';

// import: utils
// import: services
// import: redux
// import: components
// import: lazy load components

function ImageDetails({
  imageUrl,
  selectedImage,
  openImagePage,
  closeImageDetailsPage,
}) {
  return (
    <Box
      id="image-page-content-wrapper"
      sx={[
        imageDetailsStyles.imagePageContentWrapper,
        (openImagePage !== null
          && openImagePage === selectedImage) && {
          top: imagePageBannerHeight,
        },
      ]}
      onClick={closeImageDetailsPage}
    >
      <Box
        id="image-page-content"
        sx={imageDetailsStyles.imagePageContent}
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

          <Box sx={[imageDetailsStyles.imagePageContentImage,
            { backgroundImage: `url(${imageUrl})` }]}
          />
        </Box>
      </Box>
    </Box>
  );
}

ImageDetails.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  selectedImage: PropTypes.string.isRequired,
  openImagePage: PropTypes.string.isRequired,
  closeImageDetailsPage: PropTypes.func.isRequired,
};

export default ImageDetails;
