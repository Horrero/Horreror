import { useDispatch, useSelector } from "react-redux";
import { Box, IconButton } from "@mui/material";
import {
  PersonOutline,
  ShoppingBagOutlined,
  // MenuOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { setIsCartOpen } from "../../state";
import { useTranslation } from "react-i18next";
import logo from "../../assets/Logo.png";

const Navbar = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  const changeLanguage = (lng) => {
    localStorage.setItem("lang", lng)
    i18n.changeLanguage(lng);
  };

  return (
    <Box
      display="flex"
      textAlign="center"
      width="100%"
      height="60px"
      backgroundColor="#000" // set background color to black
      color="#fff" // set text color to white
      position="fixed"
      top="0"
      left="0"
      zIndex="1"
    >
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box
          onClick={() => navigate("/")}
          sx={{ "&:hover": { cursor: "pointer" } }}
          color="#fff" // set text color to white
        >
          <img
            alt=""
            src={logo}
          />
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          columnGap="20px"
          zIndex="2"
        >
          <IconButton sx={{ color: "#fff" }} style={{ display: "none" }}>
            <SearchOutlined />
          </IconButton>
          {/* ACCOUNT BUTTON */}
          <IconButton sx={{ color: "#fff" }} style={{ display: "none" }}>
            <PersonOutline />
          </IconButton>
          <Box sx={{ position: 'relative', display: 'inline-block' }}>
            <IconButton
              onClick={() => dispatch(setIsCartOpen({}))}
              sx={{ color: "#fff" }}
            >
              <ShoppingBagOutlined />
            </IconButton>
            {cart.length > 0 && (
              <Box
                sx={{
                  position: 'absolute',
                  top: 2, // Adjust as needed
                  right: 2, // Adjust as needed
                  backgroundColor: '#d32f2f', // secondary color
                  color: 'white',
                  borderRadius: '50%',
                  height: '14px',
                  minWidth: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '16px',
                  padding: '0 5px',
                  lineHeight: 1,
                  paddingLeft: '2px', // Add this to move text 2px to the left
                }}
              >
                {cart.length}
              </Box>
            )}
          </Box>
          {/* <IconButton sx={{ color: "black" }} style={{display: "none"}}>
            <MenuOutlined />
          </IconButton> */}
          <button style={{backgroundColor: "black", color: "white", border: "none", cursor: "pointer"}} onClick={() => changeLanguage("en")}>EN</button>
          <button style={{backgroundColor: "black", color: "white", border: "none", cursor: "pointer"}} onClick={() => changeLanguage("bg")}>BG</button>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;