import React from 'react';
import { Box, Typography } from '@mui/material';

import heroImage from "../assets/image 6.png";
import image from "../assets/image 7.png";

const AboutUs = () => {
  return (
    <Box key={`image`}>
      <div style={{ width: "100%", height: "700px" }}>
        <img
          src={heroImage}
          alt=""
          style={{
            width: "100%",
            height: "100%",
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
          <Typography variant='h1' style={{ color: '#FF0000', marginBottom: '10px' }}>OUR STORY</Typography>
          <Typography style={{ color: '#FFFFFF', lineHeight: '1.5' }}>
            We are a creative team of young people who want to change the world. Be a part of our journey. We appreciate every order and everyone of you is part of the family.
          </Typography>
        </div>
      </div>
    </Box>
  );
}

export default AboutUs;