import React, { useEffect, useState } from "react";
import { Client } from "../components/Client";
import { Box, Grid } from "@mui/material";
import { Content } from "../components/layout/Content";
import { getClients } from "../api/index";
import { IResponse } from "../interfaces";

export const Clients = () => {
  const [clients, setClients] = useState<any[]>([]);
  useEffect(() => {
    getClients()
      .then((data: IResponse) => {
        setClients(data.data.items);
      })
      .catch((err) => console.log(err));
  }, []);
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
