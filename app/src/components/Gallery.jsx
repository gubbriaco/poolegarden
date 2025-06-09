import React, { useState } from 'react';
import { 
  Box, 
  useMediaQuery,
  Fade,
  Modal,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { theme, srcset, borderRadius } from '../styles/theme';

function Gallery({ galleryItems }) {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const [openModal, setOpenModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleOpenModal = (image) => {
    setSelectedImage(image);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 5 }}>
        <ImageList
          sx={{ 
            width: '100%', 
            maxWidth: 1200,
            height: 'auto',
            overflow: 'hidden'
          }}
          variant="quilted"
          cols={isMobile ? 2 : isTablet ? 3 : 4}
          rowHeight={isMobile ? 150 : 180}
          gap={12}
        >
          {galleryItems.map((item) => (
            <ImageListItem 
              key={item.img} 
              cols={item.cols || 1} 
              rows={item.rows || 1}
              onClick={() => handleOpenModal(item)}
              sx={{ cursor: 'pointer', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.02)' } }}
            >
              <img
                {...srcset(item.img, isMobile ? 150 : 180, item.rows, item.cols)}
                alt={item.title}
                loading="lazy"
                style={{ 
                  borderRadius: borderRadius,
                  objectFit: 'cover',
                  width: '100%',
                  height: '100%'
                }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>

      {/* Image Modal */}
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="image-modal"
        aria-describedby="enlarged image view"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: 2,
        }}
      >
        <Box
          sx={{
            position: 'relative',
            maxWidth: '90vw',
            maxHeight: '90vh',
            outline: 'none',
            borderRadius: borderRadius,
            overflow: 'hidden',
            boxShadow: 24,
            bgcolor: 'background.paper',
          }}
        >
          <IconButton
            aria-label="close"
            onClick={handleCloseModal}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: 'white',
              bgcolor: 'rgba(0, 0, 0, 0.5)',
              '&:hover': {
                bgcolor: 'rgba(0, 0, 0, 0.7)',
              },
              zIndex: 1,
              borderRadius: borderRadius,
            }}
          >
            <CloseIcon />
          </IconButton>
          {selectedImage && (
            <img
              src={selectedImage.img}
              alt={selectedImage.title || "Immagine ingrandita"}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                display: 'block',
              }}
            />
          )}
        </Box>
      </Modal>
    </>
  );
}

export default Gallery;