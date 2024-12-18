import { Box, Button, Typography } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useTranslation } from "react-i18next";

// Import your images
import heroTextureImport from "../../assets/header_0.jpg";
import secondImage from "../../assets/header_1.webp";
import thirdImage from "../../assets/header_2.webp";

const MainCarousel = () => {
  const { t } = useTranslation();

  return (
    <Box>
      {/* Carousel Component */}
      <Carousel
        autoPlay
        interval={3000} // Time between slide transitions (in milliseconds)
        infiniteLoop
        showThumbs={false} // Hides thumbnail images
        showStatus={false} // Hides status indicator
        showIndicators={false} // Hides the indicators (dots)
        stopOnHover={false} // Continues sliding even when hovered
      >
        {/* First Image */}
        <div style={{ width: "100%", height: "700px" }}>
          <img
            src={heroTextureImport}
            alt="First Slide"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              backgroundAttachment: "fixed",
              zIndex: "-2",
            }}
          />
        </div>

        {/* Second Image */}
        <div style={{ width: "100%", height: "700px" }}>
          <img
            src={secondImage}
            alt="Second Slide"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              backgroundAttachment: "fixed",
              zIndex: "-2",
            }}
          />
        </div>

        <div style={{ width: "100%", height: "700px" }}>
          <img
            src={thirdImage}
            alt="Third Slide"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              backgroundAttachment: "fixed",
              zIndex: "-2",
            }}
          />
        </div>
      </Carousel>

      {/* Overlay Text and Button */}
      <Box
        color="white"
        borderRadius="1px"
        textAlign="center"
        position="absolute"
        top="250px"
        bottom="150px"
        left="0"
        right="0"
        maxWidth="400px"
        maxHeight="fit-content"
        margin="0 auto"
      >
        <Typography className="header" variant="h1" fontSize={"100px"} color="darkRed">
          Horreror
        </Typography>

        <Typography fontWeight="bold">{t("quote")}</Typography>

        <Button
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
          {t("orderNow")}
        </Button>
      </Box>
    </Box>
  );
};

export default MainCarousel;