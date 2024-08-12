export interface IResponse {
  status: number;
  message: string;
  data: IPaginationResponse;
}

export interface IResponseCreate {
  status: number;
  message: string;
  data: IOrder;
}

export interface IPaginationResponse {
  page: number;
  pageSize: number;
  totalItems: number;
  items: any[];
}

export interface IPagMapToModel {
  offset: number;
  limit: number;
}

export interface IProduct {
  id: number;
  quantity: number;
}
export interface IAddOrder {
  clientId: number;
  shippingAddressId: number;
  products: IProduct[];
}

export interface IOrder {
  id: number;
  createdAt: string;
  updatedAt: string;
  client: {
    id: number;
    name: string;
    rfc: string;
    taxAddress: string;
    email: string;
    phone: string;
    contact: string;
    createdAt: string;
    updatedAt: string;
  };
  shippingAddress: {
    id: number;
    shotName: string;
    address: string;
    postalCode: string;
    phone: string;
    contact: string;
    createdAt: string;
    updatedAt: string;
  };
  products: {
    id: number;
    sku: string;
    description: string;
    unitOfMeasurement: string;
    imageUrl: string;
    price: string;
    createdAt: string;
    updatedAt: string;
    ProductsByOrder: {
      quantity: number;
    };
  }[];
}
