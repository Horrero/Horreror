import { Box, Typography, useMediaQuery } from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { shades } from "../../theme";
import { useTranslation } from "react-i18next";

import heroTextureImport from "../../assets/main.png";

const MainCarousel = () => {
  const { t } = useTranslation();
  const isNonMobile = useMediaQuery("(min-width:600px");

  return (
    <Box key={`image`}>
      <img
        src={heroTextureImport}
        style={{
          width: "100%",
          height: "700px",
          objectFit: "cover",
          backgroundAttachment: "fixed",
        }}
      />
      <Box
        color="white"
        padding="20px"
        borderRadius="1px"
        textAlign="left"
        backgroundColor="rgba(0, 0, 0, 0.4)"
        position="absolute"
        top="46%"
        left={isNonMobile ? "10%" : "0"}
        right={isNonMobile ? undefined : "0"}
        margin={isNonMobile ? undefined : "0"}
        maxWidth={isNonMobile ? undefined : "240px"}
      >
        <Typography color={shades.secondary[200]}>
          {t("newItems")}
        </Typography>
        <Typography variant="h1">{t("summerSale")}</Typography>
        <Typography
          fontWeight="bold"
          color={shades.secondary[300]}
          sx={{ textDecoration: "underline" }}
        >
          {t("discoverMore")}
        </Typography>
      </Box>
    </Box>
  );
};

export default MainCarousel;
