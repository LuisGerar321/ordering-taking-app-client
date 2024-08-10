import { Content } from "../components/layout/Content";
import { Box } from "@mui/material";
import StepperBar from "../components/StepperBar";
import { OrderingMessage } from "../components/OrderingMessage";
import { StepperBarAction } from "../components/StepperBarAction";
import { OrderingContent } from "../components/OrderingContent";
import { StepperProvider } from "../contexts/Stepper";

export const Ordering = () => {
  return (
    <Content>
      <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "70%", height: "auto", position: "relative" }}>
        <StepperProvider>
          <StepperBar></StepperBar>
          <OrderingMessage></OrderingMessage>
          <OrderingContent></OrderingContent>
          <StepperBarAction></StepperBarAction>
        </StepperProvider>
      </Box>
    </Content>
  );
};
