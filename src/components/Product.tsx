import React from "react";
import { Card, CardContent, CardMedia, Typography, IconButton, Tooltip, Divider, CardActionArea } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";

interface ProductProps {
  description: string;
  unitOfMeasurement: string;
  imageUrl: string;
  additionalInfo: string;
  sku: string;
  price: string;
  onClick?: () => any;
}

export const Product: React.FC<ProductProps> = ({ description, unitOfMeasurement, imageUrl, additionalInfo, sku, price, onClick = undefined }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={onClick}>
        <CardMedia component="img" alt="product image" height="140" image={imageUrl} sx={{ objectFit: "contain" }} />
        <CardContent>
          <Typography variant="h6" component="div">
            {description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            SKU: {sku}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Unit: {unitOfMeasurement}
          </Typography>
          <Typography variant="body2" color="text.primary">
            Price: ${price} {/* Muestra el precio aquí */}
          </Typography>
          <Divider sx={{ width: "70%" }}></Divider>
          <Typography variant="h5" fontStyle="bold">
            Price: ${price} {/* Muestra el precio aquí */}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
