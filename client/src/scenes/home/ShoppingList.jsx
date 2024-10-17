import React, { useEffect } from "react";
// import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";
// import { Box, Typography, Tab, Tabs, useMediaQuery } from "@mui/material";
import Item from "../../components/Item";
import { setItems } from "../../state";
import axios from "axios";
import { useTranslation } from "react-i18next";

const URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:1337";

const ShoppingList = () => {
  const dispatch = useDispatch();
  // const [value, setValue] = useState("all");
  const items = useSelector((state) => state.cart.items);
  // const isNonMobile = useMediaQuery("(min-width:600px)");
  const { t } = useTranslation();

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };

  const getItems = async () => {
    const items = await axios.get(
      URL+"/api/items?populate=image"
    );

    const itemsJson = await items.data;
    dispatch(setItems(itemsJson.data));
  };

  useEffect(() => {
    getItems();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // const topRatedItems = items.filter(
  //   (item) => item.attributes.category === "topRated"
  // );
  // const newArrivalsItems = items.filter(
  //   (item) => item.attributes.category === "newArrivals"
  // );
  // const bestSellersItems = items.filter(
  //   (item) => item.attributes.category === "bestSellers"
  // );

  return (
    <Box id="shopping-list" width="80%" margin="80px auto">
      <Typography variant="h3" textAlign="center">
        {t('ourFeatureProducts')}
      </Typography>
      {/* <Tabs
        textColor="primary"
        indicatorColor="primary"
        value={value}
        onChange={handleChange}
        centered
        TabIndicatorProps={{ sx: { display: isNonMobile ? "block" : "none" } }}
        sx={{
          m: "25px",
          "& .MuiTabs-flexContainer": {
            flexWrap: "wrap",
          },
        }}
      >
        <Tab label={t('all')} value="all" style={{color: "white"}} />
        <Tab label={t('newArrivals')} value="newArrivals" style={{color: "white"}} />
        <Tab label={t('bestSellers')} value="bestSellers" style={{color: "white"}} />
        <Tab label={t('topRated')} value="topRated" style={{color: "white"}} />
      </Tabs> */}
      <Box
        margin="0 auto"
        marginTop="50px"
        display="grid"
        gridTemplateColumns="repeat(auto-fill, 300px)"
        justifyContent="space-around"
        rowGap="20px"
        columnGap="1.33%"
      >
        {items.map((item) => (
          <Item item={item} key={`${item.name}-${item.id}`} />
        ))}
        {/* {value === "all" &&
          items.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
        {value === "newArrivals" &&
          newArrivalsItems.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
        {value === "bestSellers" &&
          bestSellersItems.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
        {value === "topRated" &&
          topRatedItems.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))} */}
      </Box>
    </Box>
  );
};

export default ShoppingList;
