import { Box, Button, Typography } from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { shades } from "../../theme";
import { useTranslation } from "react-i18next";

import heroTextureImport from "../../assets/main.png";
import bigLines from "../../assets/bigLines.png";
import bigLinesMini from "../../assets/bigLines-mini.png";
import line3 from "../../assets/line 3.png";
import { useEffect, useState, useRef } from "react";

const MainCarousel = () => {
  const canvas = useRef();
  const { t } = useTranslation();
  // const isNonMobile = useMediaQuery("(min-width:600px");

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      console.log(window.innerWidth); // Logs the current width
    };

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const ctx = canvas.current.getContext('2d');
    const img = new Image();
    img.src = bigLines; // Assuming bigLines is a URL or path to the image

    img.onload = () => {
      ctx.drawImage(img, 0, 0, 100, 100);
    };
  }, []);

  return (
    <Box key={`image`}>
      <div style={{width: "100%", height: "700px"}}>
        <img
          src={heroTextureImport}
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            backgroundAttachment: "fixed",
            zIndex: "-1"
          }}
        />

        {/* <img
          src={windowWidth < 800 ? bigLinesMini : bigLines}
          alt=""
          style={{
            position: "absolute",
            left: "0"
          }}
        /> */}

        <canvas ref={canvas} width={window.innerWidth} height={windowWidth < 800 ? 300 : 549} style={{position: "absolute", width: "100%", top: "0", left: "0", zIndex: "100"}}></canvas>
        
        <img
          src={line3}
          alt=""
          style={{
            position: "absolute",
            top: "-50px",
            left: "-100px",
          }}
        />
      </div>
      <Box
        color="white"
        padding="20px"
        borderRadius="1px"
        textAlign="center"
        // backgroundColor="rgba(0, 0, 0, 0.4)"
        position="absolute"
        top="0"
        bottom="150px"
        left="0"
        right="0"
        maxWidth="280px"
        maxHeight="fit-content"
        margin="auto"
      >
        <Typography variant="h1" fontSize={"50px"} color="darkRed">
          Horreror
        </Typography>

        <Typography
          fontWeight="bold"
        >
          {t('quote')}
        </Typography>

        <Button
          m="30"
          sx={{
            backgroundColor: "#ad1c11",
            color: "white",
            borderRadius: "1000px",
            paddingLeft: "15px",
            paddingRight: "15px",
            marginTop: "10px",
            fontFamily: "Rubik Wet Paint",
            "&:hover": {
              backgroundColor: "rgba(173, 28, 17, 0.6)",
            },
          }}
          onClick={() => {
            document.location.href = "#shopping-list";
          }}
        >
          {t('orderNow')}
        </Button>
      </Box>
    </Box>
  );
};

export default MainCarousel;
