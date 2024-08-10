import { Button, Grid, Box } from "@mui/material";
import { useContext } from "react";
import { StepperContext } from "../contexts/Stepper";
import { EStepperAction } from "../store/Stepper";

export const StepperBarAction = () => {
  const context = useContext(StepperContext);
  if (context === undefined) {
    throw new Error("StepperBarAction must be used within a StepperProvider");
  }

  const { state, dispatch } = context;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: 300,
      }}
    >
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
    </Box>
  );
};
