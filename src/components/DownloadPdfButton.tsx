import React from "react";
import { Button } from "@mui/material";
import jsPDF from "jspdf";
import { IOrder } from "../interfaces";

interface Props {
  data: IOrder;
}

const DownloadPdfButton: React.FC<Props> = ({ data }) => {
  const generatePdf = () => {
    const doc = new jsPDF();

    // Título del documento
    doc.setFontSize(18);
    doc.text("Order Summary", 20, 20);

    // Información del cliente
    doc.setFontSize(14);
    doc.text(`Client: ${data.client.name}`, 20, 30);
    doc.text(`RFC: ${data.client.rfc}`, 20, 40);
    doc.text(`Contact: ${data.client.contact}`, 20, 50);
    doc.text(`Email: ${data.client.email}`, 20, 60);
    doc.text(`Phone: ${data.client.phone}`, 20, 70);

    // Información de la dirección de envío
    doc.setFontSize(14);
    doc.text("Shipping Address:", 20, 90);
    doc.text(`${data.shippingAddress.shotName}`, 20, 100);
    doc.text(`${data.shippingAddress.address}`, 20, 110);
    doc.text(`Postal Code: ${data.shippingAddress.postalCode}`, 20, 120);
    doc.text(`Contact: ${data.shippingAddress.contact}`, 20, 130);

    // Detalle de los productos
    doc.setFontSize(14);
    doc.text("Products:", 20, 150);

    // Ajuste dinámico de la posición vertical
    let yPosition = 160;

    data.products.forEach((product, index) => {
      doc.text(`${index + 1}. ${product.description} - SKU: ${product.sku}`, 20, yPosition);
      yPosition += 10; // Mover hacia abajo para la siguiente línea
      doc.text(`   Price: $${product.price} - Quantity: ${product.ProductsByOrder.quantity}`, 20, yPosition);
      yPosition += 10; // Espacio entre productos
    });

    // Guardar el PDF
    doc.save("order-summary.pdf");
  };

  return (
    <Button sx={{ m: "5px" }} variant="contained" onClick={generatePdf}>
      Download PDF
    </Button>
  );
};

export default DownloadPdfButton;
