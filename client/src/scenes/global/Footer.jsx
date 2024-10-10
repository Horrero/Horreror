// import { useTheme } from "@mui/material";
import { Box, Typography } from "@mui/material";
// import { shades } from "../../theme";
import { useTranslation } from "react-i18next";

const Footer = () => {
  // const {
  //   palette: { neutral },
  // } = useTheme();
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
      >
        <Box width="clamp(20%, 30%, 40%)">
          <Typography
            variant="h4"
            // fontWeight="bold"
            mb="30px"
            color="#fff" // set text color to white
          >
            HORREROR
          </Typography>
          <Typography variant="h5" color="#fff">
            {t("ourStoryLong")}
          </Typography>
        </Box>

        <Box>
          <Typography variant="h4" mb="30px" color="#fff">
            About Us
          </Typography>
          <Typography variant="h5" mb="30px" color="#fff">
            Terms & Conditions
          </Typography>
          <Typography variant="h5" mb="30px" color="#fff">
            Privacy Policy
          </Typography>
        </Box>

        <Box>
          <Typography variant="h4" mb="30px" color="#fff">
            Returns & Refunds
          </Typography>
        </Box>

        <Box width="clamp(20%, 25%, 30%)">
          <Typography variant="h4" mb="30px" color="#fff">
            Contact Us
          </Typography>
          <Typography variant="h5" mb="30px" color="#fff">
            123 Maple Street, Toronto, Ontario, M1A 1A1
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
