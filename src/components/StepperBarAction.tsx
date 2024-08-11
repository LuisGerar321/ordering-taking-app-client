import { Button, Grid, Box, IconButton, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { StepperContext } from "../contexts/Stepper";
import { EStepperAction } from "../store/Stepper";
import { addOrder } from "../api";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

export const StepperBarAction = () => {
  const context = useContext(StepperContext);
  if (context === undefined) {
    throw new Error("StepperBarAction must be used within a StepperProvider");
  }

  const [isSubmited, setIsSubmited] = useState(false);

  const { state, dispatch } = context;

  const handleCreateOrder = async () => {
    try {
      const { client, clientAddress, productIds } = state;

      if (!client || !clientAddress || !productIds || productIds.length === 0) {
        throw new Error("All fields must be filled out");
      }

      const res = await addOrder({
        clientId: client.id,
        shippingAddressId: clientAddress.id,
        products: Object.entries(productIds).map(([id, quantity]) => ({
          id: parseInt(id),
          quantity: quantity,
        })),
      });
      alert("Created");
      setIsSubmited(true);
      console.log("Order created:", res);
    } catch (error) {
      console.error("Error creating order:", error);
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: state.activeStep !== 3 ? "space-between" : "center",
        alignItems: "center",
        width: 300,
      }}
    >
      {state.activeStep === 3 ? (
        !isSubmited ? (
          <Button onClick={handleCreateOrder}>Submit Order</Button>
        ) : (
          <Button variant="contained">
            <Typography>Download PDF</Typography>
            <PictureAsPdfIcon></PictureAsPdfIcon>
          </Button>
        )
      ) : (
        <React.Fragment>
          <Button
            variant="outlined"
            disabled={state.activeStep === 0 ? true : false}
            onClick={() => {
              dispatch({ type: EStepperAction.BACK });
            }}
          >
            Back
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              dispatch({ type: EStepperAction.NEXT });
            }}
          >
            Next
          </Button>
        </React.Fragment>
      )}
    </Box>
  );
};
