import { Box, Typography, Link } from "@mui/material";
import { useTranslation } from "react-i18next";

import instagram from "../../assets/instagram.png";
import tikTok from "../../assets/tik-tok.png";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <Box
      mt="70px"
      p="40px 0"
      backgroundColor="#000" // set background color to black
      color="#fff" // set text color to white
    >
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        columnGap="clamp(20px, 30px, 40px)"
        sx={{
          flexDirection: { xs: "column", sm: "row" }, // Stack on mobile, row on larger screens
        }}
      >
        {/* HORREROR Info */}
        <Box width={{ xs: "100%", sm: "clamp(20%, 30%, 40%)" }}>
          <Typography
            fontFamily="Forresta Personal Use"
            variant="h2"
            mb="8px"
            color="#fff"
          >
            HORREROR
          </Typography>
          <Typography variant="h5" color="#fff">
            {t("ourStoryLong")}
          </Typography>
        </Box>

        {/* Links Section */}
        <Box width={{ xs: "100%", sm: "auto" }}>
          <Link href="/about-us" color="inherit" underline="none">
            <Typography variant="h4" mb="30px" color="#fff">
              About Us
            </Typography>
          </Link>
          <Link href="/terms-and-conditions" color="inherit" underline="none">
            <Typography variant="h4" mb="30px" color="#fff">
              Terms & Conditions
            </Typography>
          </Link>
          <Link href="/privacy-policy" color="inherit" underline="none">
            <Typography variant="h4" mb="30px" color="#fff">
              Privacy Policy
            </Typography>
          </Link>
          <Link href="/returns-refunds" color="inherit" underline="none">
            <Typography variant="h4" mb="15px" color="#fff">
              Returns & Refunds
            </Typography>
          </Link>
        </Box>

        {/* Contact Us */}
        <Box width={{ xs: "100%", sm: "clamp(20%, 25%, 30%)" }}>
          <Typography variant="h4" mb="15px" color="#fff">
            Contact Us
          </Typography>
          <Typography variant="h5" mb="8px" color="#fff">
            Email: horreror.com@gmail.com
          </Typography>
          <Typography variant="h5" mb="8px" color="#fff">
            Phone: 0876502885
          </Typography>
        </Box>

        {/* Social Media Links */}
        <Box
          width={{ xs: "100%", sm: "auto" }}
          display="flex"
          justifyContent={{ xs: "flex-start", sm: "center" }}
          alignItems="center"
          gap="20px"
        >
          <Link
            href="https://www.tiktok.com/@horreror.clothing?_t=8qZRABvpbSj&_r=1"
            underline="none"
          >
            <img
              alt="TikTok"
              src={tikTok}
              style={{ width: "40px", height: "40px" }} // resized to 40px
            />
          </Link>
          <Link
            href="https://www.instagram.com/horreror.clothing?igsh=MTV4NWdtNzA1aHBtMQ%3D%3D"
            underline="none"
          >
            <img
              alt="Instagram"
              src={instagram}
              style={{ width: "40px", height: "40px" }} // resized to 40px
            />
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;