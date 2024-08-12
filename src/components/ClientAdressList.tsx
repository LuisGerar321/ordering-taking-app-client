import React, { useState, useContext, useEffect } from "react";
import { StepperContext } from "../contexts/Stepper";
import { getClients, getShippingAddresses } from "../api";
import { Box, Grid, IconButton, List, ListItem, Paper, Typography, Chip } from "@mui/material";
import { EStepperAction } from "../store/Stepper";
import { IResponse } from "../interfaces";

export const ClientAdressList = () => {
  const [shippingAddresses, setShippingAddresses] = useState<any[]>([]);
  useEffect(() => {
    getShippingAddresses()
      .then((data: IResponse) => {
        setShippingAddresses(data.data.items);
      })
      .catch((err) => console.log(err));
  }, []);

  const context = useContext(StepperContext);

  if (!context) throw new Error("StepperContext needs a StepperProvider");

  const { state, dispatch } = context;

  const [selectedAddress, setSelectedAddress] = useState<number | null>(state.clientAddress?.id ?? null);

  const addresses = shippingAddresses.filter((address) => address.clientId === state.client?.id);

  const handleSelectAddress = (addressId: number, addresAddress: string) => {
    dispatch({ type: EStepperAction.SELECT_ADDRESS, payload: { id: addressId, address: addresAddress } });
    setSelectedAddress(addressId);
  };

  return (
    <Box m={10}>
      <Box mb={2}>
        {selectedAddress !== null ? (
          <Chip label={shippingAddresses.find((address) => address.id === selectedAddress)?.address} color="primary" />
        ) : (
          <Typography variant="h6">No address selected</Typography>
        )}
      </Box>

      <List>
        {addresses.map((address) => (
          <ListItem
            key={address.id}
            button
            onClick={() => handleSelectAddress(address.id, address.address)}
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
