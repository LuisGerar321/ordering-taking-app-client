export enum EStepperAction {
  NEXT = "next",
  BACK = "back",
  RESET = "reset",
  ADD_PRODUCT = "addProduct",
  REMOVE_PRODUCT = "removeProduct",
  SELECT_CLIENT = "selectClient",
  SELECT_ADDRESS = "selectAddress",
}

interface Product {
  id: number;
  description: string;
  price: number;
  quantity: number;
}

export interface IProductsIds {
  [key: string]: number;
}
export interface StepperState {
  activeStep: number;
  clientId?: number | null;
  clientAddressId?: number | null;
  productIds: IProductsIds;
}

export interface StepperAction {
  type: EStepperAction;
  payload?: number | number[];
}

const initialState: StepperState = {
  activeStep: 0,
  clientId: null,
  clientAddressId: null,
  productIds: {} as IProductsIds,
};

export const StepperReducer = (state: StepperState, action: StepperAction): StepperState => {
  switch (action.type) {
    case EStepperAction.NEXT:
      return { ...state, activeStep: Math.min(state.activeStep + 1, 3) };
    case EStepperAction.BACK:
      return { ...state, activeStep: Math.max(state.activeStep - 1, 0) };
    case EStepperAction.RESET:
      return initialState;
    case EStepperAction.SELECT_CLIENT:
      return { ...state, clientId: action.payload as number };
    case EStepperAction.SELECT_ADDRESS:
      return { ...state, clientAddressId: action.payload as number };
    case EStepperAction.ADD_PRODUCT: {
      const productId = action.payload as number;
      return {
        ...state,
        productIds: {
          ...state.productIds,
          [productId]: (state.productIds[productId] || 0) + 1,
        },
      };
    }
    case EStepperAction.REMOVE_PRODUCT: {
      const productId = action.payload as number;
      const { [productId]: removedProduct, ...rest } = state.productIds;

      if (removedProduct > 1) {
        return {
          ...state,
          productIds: {
            ...rest,
            [productId]: removedProduct - 1,
          },
        };
      }
      return {
        ...state,
        productIds: rest,
      };
    }
    default:
      return state;
  }
};
