// components/OrderingMessage.tsx
import { Typography } from "@mui/material";
import React, { useContext } from "react";
import { StepperContext } from "../contexts/Stepper";

const messages: Record<number, string> = {
  0: "Select a client.",
  1: "Choose an address.",
  2: "Select a product.",
};

export const OrderingMessage = () => {
  const context = useContext(StepperContext);

  if (context === undefined) {
    throw new Error("OrderingMessage must be used within a StepperProvider");
  }

  const { state } = context;
  const message = messages[state.activeStep] || "Order ready to submit!";

  return (
    <Typography sx={{ position: "absolute", top: { md: 30, xs: 40 }, fontSize: { xs: 40 } }} variant="h2">
      {message}
    </Typography>
  );
};
