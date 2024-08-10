import React, { useState, useContext } from "react";
import { StepperContext } from "../contexts/Stepper";
import { shippingAddresses } from "../api";
import { Box, Grid, IconButton, List, ListItem, Paper, Typography, Chip } from "@mui/material";
import { EStepperAction } from "../store/Stepper";

export const ClientAdressList = () => {
  const context = useContext(StepperContext);

  if (!context) throw new Error("StepperContext needs a StepperProvider");

  const { state, dispatch } = context;

  const [selectedAddress, setSelectedAddress] = useState<number | null>(state.clientAddressId ?? null);

  const addresses = shippingAddresses.filter((address) => address.clientId === state.clientId);

  const handleSelectAddress = (addressId: number) => {
    dispatch({ type: EStepperAction.SELECT_ADDRESS, payload: addressId });
    setSelectedAddress(addressId);
  };

  return (
    <Box m={10}>
      <Box mb={2}>
        {selectedAddress !== null ? (
          <Chip label={shippingAddresses.find((address) => address.id === selectedAddress)?.address} color="primary" />
        ) : (
          <Typography variant="h6">Ninguna dirección seleccionada</Typography>
        )}
      </Box>

      <List>
        {addresses.map((address) => (
          <ListItem
            key={address.id}
            button
            onClick={() => handleSelectAddress(address.id)}
            selected={selectedAddress === address.id}
            sx={{ bgcolor: selectedAddress === address.id ? "action.selected" : "transparent" }}
          >
            <Box>
              <Typography variant="subtitle1">{address.shotName}</Typography>
              <Typography variant="body2">{address.address}</Typography>
              <Typography variant="body2">{address.postalCode}</Typography>
              <Typography variant="body2">{address.phone}</Typography>
              <Typography variant="body2">{address.contact}</Typography>
            </Box>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
