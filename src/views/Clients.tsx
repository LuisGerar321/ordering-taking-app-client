import React from "react";
import { Client } from "../components/Client";
import { clients } from "../api";
import { Box, Grid } from "@mui/material";
import { Content } from "../components/layout/Content";

export const Clients = () => {
  return (
    <Content>
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", width: "70%", height: "70%" }}>
        <Grid container spacing={2} sx={{ width: "100%" }}>
          {clients.slice(0, 9).map((client, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Client name={client.name} email={client.email} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Content>
  );
};
