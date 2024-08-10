import { Avatar, Box, Card, CardActionArea, CardContent, CardMedia, colors, Typography } from "@mui/material";
import React from "react";
import banner from "../assets/banner.png";

interface ClientProps {
  name: string;
  email: string;
}

export const Client: React.FC<ClientProps> = ({ name, email }) => {
  return (
    <Card sx={{ maxWidth: 345, margin: 2 }}>
      <CardActionArea>
        <CardMedia sx={{ position: "relative" }} component="img" height={70} image={banner}></CardMedia>
        <CardContent>
          <Box sx={{ display: "flex", position: "absolute", top: 5, left: "50%", transform: "translate(-50%)" }}>
            <Avatar alt={name} sx={{ width: 80, height: 80, border: "2px solid white" }}>
              <Typography variant="h5">{name[0]}</Typography>
            </Avatar>
          </Box>
          <Typography variant="h5">{name}</Typography>
          <Typography>{email}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
