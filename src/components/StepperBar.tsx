import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { useContext } from "react";
import { StepperContext } from "../contexts/Stepper";

const steps = ["Select Client", "Select Address", "Select Products"];

export default function StepperBar() {
  const context = useContext(StepperContext);

  if (!context) {
    throw new Error("StepperBar must be used within a StepperProvider");
  }

  const { state } = context;

  return (
    <Box sx={{ width: "100%", position: "absolute", top: 0 }}>
      <Stepper activeStep={state.activeStep}>
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: {
            optional?: React.ReactNode;
          } = {};
          return (
            <Step key={index} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </Box>
  );
}
