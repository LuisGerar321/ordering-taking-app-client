import React, { useContext, useEffect, useState } from "react";
import { Box, Grid, Chip, IconButton, ListItem, Typography } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { Product } from "./Product";
import { StepperContext } from "../contexts/Stepper";
import { EStepperAction } from "../store/Stepper";
import { getProducts } from "../api";
import { IResponse } from "../interfaces";

export const ProductList = () => {
  const [products, setProducts] = useState<any[]>([]);
  useEffect(() => {
    getProducts()
      .then((data: IResponse) => {
        setProducts(data.data.items);
      })
      .catch((err) => console.log(err));
  }, []);

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  interface ColorMap {
    [key: string]: string;
  }

  const colorMap: ColorMap = products.reduce((map, product) => {
    if (!map.hasOwnProperty(product.sku)) {
      map[product.sku] = getRandomColor();
    }
    return map;
  }, {} as ColorMap);

  const context = useContext(StepperContext);
  if (!context) throw new Error("ProductList needs a StepperProvider");

  const { state, dispatch } = context;

  const [page, setPage] = useState(0);
  const itemsPerPage = 4;

  const filteredProducts = products;
  const displayedProducts = filteredProducts.slice(page * itemsPerPage, page * itemsPerPage + itemsPerPage);

  const handleSelectProduct = (id: number) => {
    dispatch({ type: EStepperAction.ADD_PRODUCT, payload: id });
  };

  const handleRemoveProduct = (id: number) => {
    dispatch({ type: EStepperAction.REMOVE_PRODUCT, payload: id });
  };

  const handleNextPage = () => {
    setPage((prevPage) => Math.min(prevPage + 1, Math.ceil(filteredProducts.length / itemsPerPage) - 1));
  };

  const handlePrevPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  return (
    <Box m={10}>
      <Box mb={4}>
        <Typography variant="h6" gutterBottom>
          Productos Seleccionados
        </Typography>
        <Box>
          {Object.keys(state.productIds).map((idStr) => {
            const id = parseInt(idStr, 10);
            const product = products.find((p) => p.id === id);
            const quantity = state.productIds[id];
            if (!product) return null;
            return <Chip key={id} label={`${product.description} (${quantity})`} onDelete={() => handleRemoveProduct(id)} sx={{ bgcolor: colorMap[product.sku], margin: "4px" }} />;
          })}
        </Box>
      </Box>

      <Grid container spacing={2}>
        {displayedProducts.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={3}>
            <Product
              sku={product.sku}
              description={product.description}
              unitOfMeasurement={product.unitOfMeasurement}
              imageUrl={product.imageUrl}
              additionalInfo="More product details here."
              price={product.price}
              onClick={() => handleSelectProduct(product.id)}
            />
          </Grid>
        ))}
      </Grid>

      <Box mt={2} display="flex" justifyContent="space-between">
        <IconButton onClick={handlePrevPage} disabled={page === 0}>
          <ChevronLeft />
        </IconButton>
        <IconButton onClick={handleNextPage} disabled={page >= Math.ceil(filteredProducts.length / itemsPerPage) - 1}>
          <ChevronRight />
        </IconButton>
      </Box>
    </Box>
  );
};
