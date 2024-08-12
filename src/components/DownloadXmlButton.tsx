import React from "react";
import { Button } from "@mui/material";
import { create } from "xmlbuilder2";
import { IOrder } from "../interfaces";

interface Props {
  data: IOrder;
}

const DownloadXmlButton: React.FC<Props> = ({ data }) => {
  const generateXml = () => {
    const root = create({ version: "1.0", encoding: "UTF-8" })
      .ele("DRDataTransfer")
      .ele("Customer")
      .ele("Number")
      .txt(`${data.client.id}`)
      .up()
      .ele("Name")
      .txt(`${data.client.name}`)
      .up()
      .ele("Addresses")
      .ele("Address")
      .att("Code", `${data.shippingAddress.id}`)
      .att("Description", `${data.shippingAddress.shotName}`)
      .att("PostalCode", `${data.shippingAddress.postalCode}`)
      .att("Address1", `${data.shippingAddress.address}`)
      .up()
      .up()
      .ele("Articles");

    data.products.forEach((product, index) => {
      root.ele("Article").ele("Number").txt(product.sku).up().ele("Description").txt(product.description).up().ele("SalesPrice").txt(product.price).up().up();

      root
        .ele("Order")
        .ele("Transaction")
        .txt("0")
        .up()
        .ele("OrderNumber")
        .txt(`${data.id}`)
        .up()
        .ele("PartNumber")
        .txt(`0${index + 1}`.slice(-2))
        .up()
        .ele("OrderedQuantity")
        .txt(`${product.ProductsByOrder.quantity}`)
        .up()
        .ele("DueDate")
        .txt(`${product.createdAt}`)
        .up()
        .up();
    });

    const xml = root.end({ prettyPrint: true });

    const blob = new Blob([xml], { type: "text/xml" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "data.xml";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <Button sx={{ m: "5px" }} variant="contained" onClick={generateXml}>
      Download XML
    </Button>
  );
};

export default DownloadXmlButton;
