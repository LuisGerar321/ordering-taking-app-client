import { Button, Grid, Box } from "@mui/material";
import React, { useContext, useState } from "react";
import { StepperContext } from "../contexts/Stepper";
import { EStepperAction } from "../store/Stepper";
import { addOrder } from "../api";

export const StepperBarAction = () => {
  const context = useContext(StepperContext);
  if (context === undefined) {
    throw new Error("StepperBarAction must be used within a StepperProvider");
  }

  const [isSubmited, setIsSubmited] = useState(false);

  const { state, dispatch } = context;

  const handleCreateOrder = async () => {
    try {
      const { clientId, clientAddressId, productIds } = state;

      if (!clientId || !clientAddressId || !productIds || productIds.length === 0) {
        throw new Error("All fields must be filled out");
      }

      const res = await addOrder({
        clientId,
        shippingAddressId: clientAddressId,
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
          <></>
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
