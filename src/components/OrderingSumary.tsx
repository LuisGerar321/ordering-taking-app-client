import React, { useContext, useEffect, useState } from "react";
import { Box, Typography, Divider } from "@mui/material";
import { StepperContext } from "../contexts/Stepper";
import { getProducts } from "../api";
import { IResponse } from "../interfaces";

export const OrderingSummary: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);
  useEffect(() => {
    getProducts()
      .then((data: IResponse) => {
        setProducts(data.data.items);
      })
      .catch((err) => console.log(err));
  }, []);

  const context = useContext(StepperContext);
  if (!context) throw new Error("OrderingSummary needs a StepperProvider");

  const { state } = context;
  const { client, clientAddress, productIds } = state;

  const clientObj = client?.id ? client.name : "No client selected";
  const clientAddressObj = clientAddress?.address ? clientAddress.address : "No address selected";

  const selectedProducts = Object.keys(productIds)
    .map((idStr) => {
      const id = parseInt(idStr, 10);
      const product = products.find((p) => p.id === id);
      if (product) {
        return { ...product, quantity: productIds[id] };
      }
      return null;
    })
    .filter((product): product is (typeof products)[number] & { quantity: number } => product !== null);

  return (
    <Box mt={15} mb={10} p={3} border={1} borderRadius={8} borderColor="grey.300">
      <Typography variant="h6" gutterBottom>
        Product Summary
      </Typography>
      <Divider />
      <Box mt={2} mb={2}>
        <Typography variant="subtitle1" gutterBottom>
          Cliente:
        </Typography>
        <Typography variant="body1">{clientObj}</Typography>
        <Typography variant="subtitle1" gutterBottom mt={2}>
          Dirección de Envío:
        </Typography>
        <Typography variant="body1">{clientAddressObj}</Typography>
      </Box>
      <Divider />
      <Box mt={2}>
        <Typography variant="subtitle1" gutterBottom>
          Productos Seleccionados:
        </Typography>
        <Box display="flex" flexWrap="wrap" gap={2} justifyContent="space-between">
          {selectedProducts.map((product) => (
            <Box key={product.id} p={2} border={1} borderColor="grey.300" borderRadius={4} display="flex" flexDirection="column" alignItems="center" boxSizing="border-box">
              <Typography variant="body1" gutterBottom>
                {product.description}
              </Typography>
              <Typography variant="body2">Cantidad: {product.quantity}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
