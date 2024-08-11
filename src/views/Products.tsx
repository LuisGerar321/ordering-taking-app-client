import React, { useEffect, useState } from "react";
import { Content } from "../components/layout/Content";
import { Box, Grid } from "@mui/material";
import { Product } from "../components/Product";
import { getProducts } from "../api/";
import { IResponse } from "../interfaces";

export const Products = () => {
  const [products, setProducts] = useState<any[]>([]);
  useEffect(() => {
    getProducts()
      .then((data: IResponse) => {
        setProducts(data.data.items);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Content>
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", width: "70%", height: "70%" }}>
        <Grid container spacing={2} sx={{ width: "100%" }}>
          {products.slice(0, 12).map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Product
                sku={product.sku}
                description={product.description}
                unitOfMeasurement={product.unitOfMeasurement}
                imageUrl={product.imageUrl}
                additionalInfo="More product details here."
                price={product.price}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Content>
  );
};
