import React, { useContext } from "react";
import { StepperContext } from "../contexts/Stepper";
import { ClientList } from "./ClientList";
import { ClientAdressList } from "./ClientAdressList";
import { ProductList } from "./ProductList";
import { OrderingSummary } from "./OrderingSumary";

export const OrderingContent = () => {
  const context = useContext(StepperContext);
  if (context === undefined) throw new Error("OrderingContent need a Spetter context.");

  const { state } = context;

  const orderingComponentByStep = [<ClientList></ClientList>, <ClientAdressList></ClientAdressList>, <ProductList></ProductList>, <OrderingSummary></OrderingSummary>];

  return orderingComponentByStep[state.activeStep];
};
