import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Box, IconButton, Typography, Button, Tabs, Tab } from "@mui/material";
// import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { shades } from "../../theme";
import { addToCart } from "../../state";
import { useParams } from "react-router-dom";
import Item from "../../components/Item";
import axios from "axios";
import { useTranslation } from "react-i18next";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:1337";

const ItemDetails = () => {
  const dispatch = useDispatch();
  const { itemId } = useParams();
  const [value, setValue] = useState("description");
  const [count, setCount] = useState(1);
  const [item, setItem] = useState(null);
  const [items, setItems] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [selectedSize, setSelectedSize] = useState(null);
  const { t, i18n } = useTranslation();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const getItem = async () => {
    const item = await axios.get(
      URL + "/api/items/" + itemId + "?populate=image,sizes"
    );
    const itemJson = await item.data;
    setItem(itemJson.data);
    setSizes(itemJson.data.attributes.sizes);
  };

  const getItems = async () => {
    const items = await axios.get(URL + "/api/items?populate=image,sizes");
    const itemsJson = await items.data;
    setItems(itemsJson.data);
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size");
      return;
    }
    dispatch(addToCart({ item: { ...item, size: selectedSize, count } }))
  }

  useEffect(() => {
    getItem();
    getItems();
  }, [itemId]); //eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Box width="80%" m="80px auto">
      <Box display="flex" flexWrap="wrap" columnGap="40px">
        {/*IMAGES */}
        {item?.attributes?.image?.data?.attributes?.url && (
          <Box flex="1 1 40%" mb="40px">
            <img
              alt={item?.name}
              width="100%"
              height="100%"
              src={
                item?.attributes?.image?.data?.attributes?.url
              }
              style={{ objectFit: "contain" }}
            />
          </Box>
        )}
        <Box flex="1 1 50%" mb="40px">
          <Typography variant="h3">{item?.attributes?.name}</Typography>
          <Box display="flex" alignItems="center">
              {item?.attributes?.discountPrice ? (
                <>
                  <Typography
                    fontWeight="bold"
                    fontSize={"20px"}
                    style={{
                      textDecoration: "line-through",
                      color: "gray",
                      marginRight: "10px"
                    }}
                  >
                    {item?.attributes?.price} {i18n.language === 'bg' ? "лв" : "bgn"}
                  </Typography>
                  <Typography
                    fontWeight="bold"
                    fontSize={"22px"}
                    color="red"
                  >
                    {item?.attributes?.discountPrice} {i18n.language === 'bg' ? "лв" : "bgn"}
                  </Typography>
                </>
              ) : (
                <Typography fontWeight="bold" fontSize={"20px"}>
                  {item?.attributes?.price} {i18n.language === 'bg' ? "лв" : "bgn"}
                </Typography>
              )}
          </Box>
          <Typography sx={{ mt: "20px" }}>
            {i18n.language === "bg" ? item?.attributes?.shortDescriptionBg : item?.attributes?.shortDescription}
          </Typography>
          <Box mb="10px">
            <Typography variant="h6">{t("availableSizes")}</Typography>
            <Box display="flex" gap="10px">
              {sizes.map((size) => (
                <Button
                  key={size.id}
                  variant={selectedSize === size.name ? 'contained' : 'outlined'}
                  onClick={() => setSelectedSize(size.name)}
                >
                  {size.name}
                </Button>
              ))}
            </Box>
          </Box>
          <Box display="flex" alignItems="center" minHeight="50px">
            <Box
              display="flex"
              alignItems="center"
              border={`1.5px solid ${shades.neutral[300]}`}
              mr="20px"
              p="2px 5px"
            >
              <IconButton onClick={() => setCount(Math.max(count - 1, 1))}>
                <RemoveIcon style={{color: "white"}} />
              </IconButton>
              <Typography sx={{ p: "0 5px" }}>{count}</Typography>
              <IconButton onClick={() => setCount(count + 1)}>
                <AddIcon style={{color: "white"}} />
              </IconButton>
            </Box>
            <IconButton
              sx={{
                backgroundColor: "darkRed", // Default background color
                color: "white",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "rgba(139, 0, 0, 0.6)", // Dark red with less transparency on hover
                },
              }}
              onClick={() => handleAddToCart()}
            >
              <ShoppingCartIcon style={{ transform: "scale(0.75, 0.75)" }} />{" "}
            </IconButton>
          </Box>

          {/* <FavoriteBorderOutlinedIcon /> */}
          {/* <Typography sx={{ ml: "5px" }}>ADD TO WISHLIST</Typography> */}
          {/* <Box>
            <Box m="20px 0 5px 0" display="flex">
            </Box>
            <Typography>{t('category')}: {i18n.language === "bg" ? item?.attributes?.category === "newArrivals" ? "Ново" : item?.attributes?.category === "bestSellers" ? "Бестселъри" : "Най-Високо Оценени" : item?.attributes?.category
            .replace(/([A-Z])/g, " $1")
            .replace(/^./, (str) => str.toUpperCase())}
            </Typography>
          </Box>
          */}
        </Box>
      </Box>

      {/* INFORMATION */}
      <Box m="20px 0">
        <Tabs value={value} onChange={handleChange}>
          <Tab label={t("description")} value="description" />
          {/* <Tab label="REVIEWS" value="reviews" /> */}
        </Tabs>
      </Box>
      <Box display="flex" flexWrap="wrap" gap="15px">
        {value === "description" && (
          <ReactMarkdown remarkPlugins={[remarkGfm]} className="descriptionImages">
            {i18n.language === "bg"
              ? item?.attributes?.longDescriptionBg
              : item?.attributes?.longDescription}
          </ReactMarkdown>
        )}
        {value === "reviews" && <div>reviews</div>}
      </Box>

      {/* RELATED ITEMS */}
      <Box mt="50px" width="100%">
        <Typography variant="h3">{t("releatedProducts")}</Typography>
        <Box
          mt="20px"
          display="flex"
          flexWrap="wrap"
          columnGap="1.33%"
          justifyContent="space-between"
        >
          {items.slice(0, 4).map((item, i) => /* (item.id !== 20 || localStorage.getItem("dev")) && */  (
            <Item key={`${item.name}-${i}`} item={item} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ItemDetails;