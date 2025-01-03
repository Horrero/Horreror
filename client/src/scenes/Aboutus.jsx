import React from 'react';
import { Box, Typography } from '@mui/material';

import heroImage from "../assets/header_1.webp";
import image from "../assets/IMG_9798.webp";
import { useTranslation } from 'react-i18next';

const AboutUs = () => {
  const { t, i18n } = useTranslation();

  return (
    <Box key={`image`}>
      <div style={{ width: "100%", height: "300px" }}>
        <img
          src={heroImage}
          alt=""
          style={{
            width: "100%",
            height: "100%",
            maxHeight: "300px",
            objectFit: "cover",
            backgroundAttachment: "fixed",
            zIndex: "-1"
          }}
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
        <img
          src={image}
          alt="Our Story"
          style={{
            width: "100%", // Full width on mobile
            maxWidth: "400px", // Set a max width for larger screens
            height: "auto",
            borderRadius: "10px"
          }}
        />

        <div style={{ textAlign: 'center', maxWidth: '600px', paddingLeft: "50px", paddingRight: "50px", marginTop: "50px" }}>
          <Typography variant='h1' style={{ fontFamily: (i18n.language === "bg" && "Rubik Wet Paint"), color: '#FF0000', marginBottom: '10px' }}>{t('ourStory')}</Typography>
          <Typography style={{ color: '#FFFFFF', lineHeight: '1.5' }}>
            {t('ourStoryLong')}
          </Typography>
        </div>
      </div>
    </Box>
  );
}

export default AboutUs;