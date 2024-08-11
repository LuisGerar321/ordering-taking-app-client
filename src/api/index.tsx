import axios, { AxiosResponse } from "axios";
import apiClient from "./gateway";
import { IAddOrder, IResponse } from "../interfaces";

export const getClients = async (page = 1, pagesize = 3): Promise<IResponse> => {
  try {
    const res: AxiosResponse<IResponse> = await apiClient.get<IResponse>("clients", {
      params: {
        page,
        pagesize,
      },
    });
    const dataResponse: IResponse = res.data;
    return dataResponse;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Error fetching clients:", error.message);
    } else {
      console.error("Unexpected error:", error);
    }
    throw new Error("Error fetching clients");
  }
};

export const getProducts = async (page = 1, pagesize = 3): Promise<IResponse> => {
  try {
    const res: AxiosResponse<IResponse> = await apiClient.get<IResponse>("products", {
      params: {
        page,
        pagesize,
      },
    });
    const dataResponse: IResponse = res.data;
    return dataResponse;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Error fetching products:", error.message);
    } else {
      console.error("Unexpected error:", error);
    }
    throw new Error("Error in products");
  }
};

export const getShippingAddresses = async (page = 1, pagesize = 3): Promise<IResponse> => {
  try {
    const res: AxiosResponse<IResponse> = await apiClient.get<IResponse>("shippingaddress", {
      params: {
        page,
        pagesize,
      },
    });
    const dataResponse: IResponse = res.data;
    return dataResponse;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Error fetching shippingAddresses:", error.message);
    } else {
      console.error("Unexpected error:", error);
    }
    throw new Error("Error in shippingAddresses");
  }
};

export const addOrder = async (newOrder: IAddOrder) => {
  try {
    const res: AxiosResponse<IResponse> = await apiClient.post("orders", newOrder);
    const dataResponse: IResponse = res.data;
    return dataResponse;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Error creating Order:", error.message);
    } else {
      console.error("Unexpected error:", error);
    }
    throw new Error("Error creating a new Order");
  }
};
