import { Box, Button, Typography } from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { shades } from "../../theme";
import { useTranslation } from "react-i18next";

import heroTextureImport from "../../assets/main.png";
import line1 from "../../assets/line 1.png";
import line2 from "../../assets/line 2.png";
import line3 from "../../assets/line 3.png";

const MainCarousel = () => {
  const { t } = useTranslation();
  // const isNonMobile = useMediaQuery("(min-width:600px");

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

        <img
          src={line2}
          alt=""
          style={{
            position: "relative",
            width: "100%",
            minWidth: "1100px",
            bottom: "140px",
            zIndex: "0"
          }}
        />
        <img
          src={line1}
          alt=""
          style={{
            position: "absolute",
            width: "100%",
            minWidth: "1100px",
            bottom: "240px",
            left: "0",
            zIndex: "0"
          }}
        />
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
