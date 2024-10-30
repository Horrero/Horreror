import { Box, Button, Divider, IconButton, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import styled from "@emotion/styled";
import { shades } from "../../theme";
import {
  decreaseCount,
  increaseCount,
  removeFromCart,
  setIsCartOpen,
} from "../../state";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

// Resuing CSS using Styled Components
const FlexBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CartMenu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const isCartOpen = useSelector((state) => state.cart.isCartOpen);
  const { t, i18n } = useTranslation();

  const totalPrice = cart.reduce((total, item) => {
    return total + item.count * item.attributes?.price;
  }, 0);

  return (
    <Box //overlay
      visibility={isCartOpen ? "visible" : "hidden"} // Use visibility instead of display
      backgroundColor={`rgba(64, 8, 10, 0.4)`}
      position="fixed"
      zIndex={10}
      width="100%"
      height="100%"
      left="0"
      top="0"
      overflow="auto"
      sx={{
        opacity: isCartOpen ? 1 : 0, // Control opacity for smooth fade in/out
        transition: "opacity 0.3s ease, background-color 0.5s ease", // Smooth transitions
      }}
    >
      {/* MODAL */}
      <Box
        position="fixed"
        right="0"
        bottom="0"
        width="max(400px, 30%)"
        height="100%"
        backgroundColor="#000000"
        color="white"
      >
        <Box padding="30px" overflow="auto" height="100%">
          {/* HEADER */}
          <FlexBox mb="15px">
            <Typography variant="h3">
              {t("shoppingBag")} ({cart.length})
            </Typography>
            <IconButton
              style={{ color: "white" }}
              onClick={() => dispatch(setIsCartOpen({}))}
            >
              <CloseIcon />
            </IconButton>
          </FlexBox>

          {/* CART LIST */}
          <Box>
            {cart.map((item) => (
              <Box key={`${item.attributes.name}-${item.id}`}>
                <FlexBox p="15px 0">
                  <Box flex="1 1 40%">
                    <img
                      alt={item?.name}
                      width="123px"
                      height="164px"
                      src={
                        item?.attributes?.image?.data?.attributes?.formats
                          ?.medium?.url
                      }
                    />
                  </Box>
                  <Box flex="1 1 60%">
                    {/* ITEM NAME */}
                    <FlexBox mb="5px">
                      <Typography fontWeight="bold">
                        {i18n.language === "bg"
                          ? item.attributes.nameBg
                          : item.attributes.name}
                      </Typography>
                      <IconButton
                        onClick={() =>
                          dispatch(removeFromCart({ id: item.id }))
                        }
                      >
                        <CloseIcon />
                      </IconButton>
                    </FlexBox>
                    <Typography>
                      {i18n.language === "bg"
                        ? item.attributes.shortDescriptionBg
                        : item.attributes.shortDescription}
                    </Typography>

                    {/* AMOUNT */}
                    <FlexBox m="15px 0">
                      <Box
                        display="flex"
                        alignItems="center"
                        border={`1.5px solid ${shades.neutral[500]}`}
                      >
                        <IconButton
                          style={{ color: "white" }}
                          onClick={() =>
                            dispatch(decreaseCount({ id: item.id }))
                          }
                        >
                          <RemoveIcon />
                        </IconButton>
                        <Typography>{item.count}</Typography>
                        <IconButton
                          style={{ color: "white" }}
                          onClick={() =>
                            dispatch(increaseCount({ id: item.id }))
                          }
                        >
                          <AddIcon />
                        </IconButton>
                      </Box>

                      {/* PRICE */}
                      <Typography fontWeight="bold">
                        {item.attributes.price}
                        {i18n.language === "bg" ? "лв" : "bgn"}
                      </Typography>
                    </FlexBox>
                  </Box>
                </FlexBox>
                <Divider style={{ backgroundColor: "white" }} />
              </Box>
            ))}
          </Box>

          {/* ACTIONS */}
          <Box m="20px 0">
            <FlexBox m="20px 0">
              <Typography fontWeight="bold">{t("subtotal")}</Typography>
              <Typography fontWeight="bold">
                {Math.round(totalPrice*100)/100}
                {i18n.language === "bg" ? "лв" : "bgn"}
              </Typography>
            </FlexBox>
            <Button
              sx={{
                backgroundColor: "#A41715",
                color: "black",
                borderRadius: 0,
                minWidth: "100%",
                padding: "20px 40px",
                m: "20px 0",
                "&:hover": {
                  backgroundColor: "rgba(164, 23, 21, 0.6)",
                },
              }}
              onClick={() => {
                navigate("/checkout");
                dispatch(setIsCartOpen({}));
              }}
            >
              {t("checkout")}
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CartMenu;