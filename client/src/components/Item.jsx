import { useState } from "react";
import { useDispatch } from "react-redux";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { shades } from "../theme";
import { addToCart } from "../state";
import { useNavigate } from "react-router-dom";
// import { Scale } from "@mui/icons-material";

// const URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:1337";

const Item = ({ item, width }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const {
    palette: { neutral },
  } = useTheme();

  const { category, price, name, image } = item.attributes;
  const imageUrl =
    image?.data?.attributes?.formats?.medium?.url ||
    image?.data?.attributes?.formats?.small?.url || 
    image?.data?.attributes?.formats?.thumbnail?.url ||
    "";

  return (
    <Box width={width}>
      <Box
        position="relative"
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        {imageUrl && 
          <img
            alt={item.name}
            width="300px"
            height="400px"
            src={imageUrl}
            onClick={() => {
              navigate(`/item/${item.id}`);
            }}
            style={{ cursor: "pointer" }}
          />
        }
        <Box
          display={isHovered ? "block" : "none"}
          position="absolute"
          bottom="10%"
          left="0"
          width="100%"
          padding="0 5%"
        >
          <Box display="flex" justifyContent="space-between" style={{marginBottom: "-15px"}}>
            {/* AMOUNT */}
            <Box
              display="flex"
              alignItems="center"
              backgroundColor={shades.neutral[100]}
              borderRadius="3px"
            >
              <IconButton onClick={() => setCount(Math.max(count - 1, 1))}>
                <RemoveIcon />
              </IconButton>
              <Typography color={shades.primary[300]}>{count}</Typography>
              <IconButton onClick={() => setCount(count + 1)}>
                <AddIcon />
              </IconButton>
            </Box>

            {/* BUTTON WITH ICON AND RED BACKGROUND */}
            <IconButton
              onClick={() => {
                dispatch(addToCart({ item: { ...item, count } }));
              }}
              sx={{
                backgroundColor: "darkRed", // Default background color
                color: "white", 
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "rgba(139, 0, 0, 0.6)", // Dark red with less transparency on hover
                },
              }}
            >
              <ShoppingCartIcon style={{ transform: "scale(0.75, 0.75)" }} /> {/* Add an icon here */}
            </IconButton>
          </Box>
        </Box>
      </Box>
      <Box mt="3px">
        <Typography fontFamily={"Rubik Wet Paint"} fontSize={"16px"} variant="subtitle2" color={neutral.dark}>
          {category
            .replace(/([A-Z])/g, " $1")
            .replace(/^./, (str) => str.toUpperCase())}
        </Typography>
        <Typography fontFamily={"Rubik Wet Paint"} fontSize={"24px"}>{name}</Typography>
        <Typography fontWeight="bold" fontSize={"20px"}>${price}</Typography>
      </Box>
    </Box>
  );
};

export default Item;
