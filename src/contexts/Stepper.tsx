import React, { useReducer, createContext, ReactNode } from "react";
import { StepperAction, StepperReducer, StepperState } from "../store/Stepper";

interface StepperProviderProp {
  children: ReactNode;
}

const StepperContext = createContext<{ state: StepperState; dispatch: React.Dispatch<StepperAction> } | undefined>(undefined);

export const StepperProvider: React.FC<StepperProviderProp> = ({ children }) => {
  const [state, dispatch] = useReducer(StepperReducer, { activeStep: 0, client: null, clientAddress: null, productIds: {} });
  return <StepperContext.Provider value={{ state, dispatch }}>{children}</StepperContext.Provider>;
};

export { StepperContext };
