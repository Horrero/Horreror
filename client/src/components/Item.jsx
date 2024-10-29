import { useState } from "react";
import { useDispatch } from "react-redux";
import { Box, IconButton, Typography } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { shades } from "../theme";
import { addToCart } from "../state";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const Item = ({ item, width }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  const { price, name, nameBg, image, soldOut } = item.attributes;
  const imageUrl =
    image?.data?.attributes?.formats?.medium?.url ||
    image?.data?.attributes?.formats?.small?.url || 
    image?.data?.attributes?.formats?.thumbnail?.url ||
    "";

  const { i18n } = useTranslation();

  return (
    <Box width={width}>
      <Box
        position="relative"
        onMouseOver={() => !soldOut && setIsHovered(true)}
        onMouseOut={() => !soldOut && setIsHovered(false)}
      >
        {imageUrl && 
          <img
            alt={item.name}
            width="300px"
            height="400px"
            src={imageUrl}
            onClick={() => {
              if (!soldOut) {
                navigate(`/item/${item.id}`);
              }
            }}
            style={{
              cursor: soldOut ? "default" : "pointer",
              filter: soldOut ? "brightness(0.5)" : "none", // Apply whitening effect if sold out
            }}
          />
        }
        {soldOut && (
          <Typography
            component="div"
            color="white"
            fontSize="24px"
            fontWeight="bold"
            style={{
              position: "absolute",
              fontFamily: "Rubik Wet Paint",
              color: "#ad1c11",
              fontWeight: "normal",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)"
            }}
          >
            Sold Out
          </Typography>
        )}
        {!soldOut && (
          <Box
            display={isHovered ? "block" : "none"}
            position="absolute"
            bottom="10%"
            left="0"
            width="100%"
            padding="0 5%"
          >
            <Box display="flex" justifyContent="space-between" style={{marginBottom: "-15px"}}>
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
              <IconButton
                onClick={() => {
                  dispatch(addToCart({ item: { ...item, count } }));
                }}
                sx={{
                  backgroundColor: "darkRed",
                  color: "white", 
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "rgba(139, 0, 0, 0.6)",
                  },
                }}
              >
                <ShoppingCartIcon style={{ transform: "scale(0.75, 0.75)" }} />
              </IconButton>
            </Box>
          </Box>
        )}
      </Box>
      <Box mt="3px">
        <Typography fontFamily={"Rubik Wet Paint"} fontSize={"24px"}>
          {i18n.language === 'bg' ? nameBg : name}
        </Typography>
        {!soldOut && (
          <Typography fontWeight="bold" fontSize={"20px"}>{price} {i18n.language == 'bg' ? "лв" : "bgn"}</Typography>
        )}
      </Box>
    </Box>
  );
};

export default Item;