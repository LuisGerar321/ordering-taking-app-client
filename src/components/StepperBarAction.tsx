import React, { useContext, useState } from "react";
import { Button, Box, Typography } from "@mui/material";
import { StepperContext } from "../contexts/Stepper";
import { EStepperAction } from "../store/Stepper";
import { addOrder } from "../api";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import Code from "@mui/icons-material/Code";
import DownloadXmlButton from "./DownloadXmlButton"; // Asegúrate de ajustar la ruta de importación
import { IOrder } from "../interfaces";
import DownloadPdfButton from "./DownloadPdfButton";

export const StepperBarAction: React.FC = () => {
  const context = useContext(StepperContext);
  if (context === undefined) {
    throw new Error("StepperBarAction must be used within a StepperProvider");
  }

  const [isSubmited, setIsSubmited] = useState(false);
  const [dataRespose, setDataResponse] = useState<IOrder>();

  const { state, dispatch } = context;

  const handleCreateOrder = async () => {
    try {
      const { client, clientAddress, productIds } = state;

      if (!client || !clientAddress || !productIds || Object.keys(productIds).length === 0) {
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
      setDataResponse(res.data);
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
          <Box
            m={2}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              width: "100%",
              height: "100%",
            }}
          >
            <DownloadPdfButton data={dataRespose as IOrder} />
            <DownloadXmlButton data={dataRespose as IOrder} />
          </Box>
        )
      ) : (
        <React.Fragment>
          <Button
            variant="outlined"
            disabled={state.activeStep === 0}
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
