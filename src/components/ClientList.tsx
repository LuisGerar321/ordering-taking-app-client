import React, { useState, useContext, useEffect } from "react";
import { StepperContext } from "../contexts/Stepper";
import { Box, Grid, IconButton, InputBase, List, ListItem, Paper, Typography, Chip } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { EStepperAction } from "../store/Stepper";
import { getClients } from "../api";
import { IResponse } from "../interfaces";

export const ClientList = () => {
  const [clients, setClients] = useState<any[]>([]);
  useEffect(() => {
    getClients()
      .then((data: IResponse) => {
        setClients(data.data.items);
      })
      .catch((err) => console.log(err));
  }, []);

  const context = useContext(StepperContext);

  if (!context) {
    throw new Error("StepperContext needs a StepperProvider");
  }

  const { state, dispatch } = context;

  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(0);
  const [selectedClient, setSelectedClient] = useState<number | null>(state.clientId ?? null);
  const itemsPerPage = 4;

  const filteredClients = clients.filter((client) => client.name.toLowerCase().includes(searchTerm.toLowerCase()));

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setPage(0);
  };

  const handleSelectClient = (clientId: number) => {
    dispatch({ type: EStepperAction.SELECT_CLIENT, payload: clientId });
    setSelectedClient(clientId);
  };

  const handleNextPage = () => {
    setPage((prevPage) => Math.min(prevPage + 1, Math.ceil(filteredClients.length / itemsPerPage) - 1));
  };

  const handlePrevPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const displayedClients = filteredClients.slice(page * itemsPerPage, page * itemsPerPage + itemsPerPage);

  return (
    <Box m={10}>
      {/* Muestra el cliente seleccionado usando Chip */}
      <Box mb={2}>
        {selectedClient !== null ? <Chip label={clients.find((client) => client.id === selectedClient)?.name} color="primary" /> : <Typography variant="h6">Ningún cliente seleccionado</Typography>}
      </Box>

      {/* Barra de búsqueda */}
      <Paper component="form" sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400, mb: 2 }}>
        <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Buscar Clientes" inputProps={{ "aria-label": "search clients" }} value={searchTerm} onChange={handleSearchChange} />
        <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>

      {/* Lista de clientes */}
      <List>
        {displayedClients.map((client) => (
          <ListItem key={client.id} button onClick={() => handleSelectClient(client.id)} sx={{ bgcolor: selectedClient === client.id ? "action.selected" : "transparent" }}>
            {client.name}
          </ListItem>
        ))}
      </List>

      {/* Botones de paginación con íconos */}
      <Grid container justifyContent="space-between" sx={{ mt: 2 }}>
        <IconButton onClick={handlePrevPage} disabled={page === 0}>
          <ChevronLeft />
        </IconButton>
        <IconButton onClick={handleNextPage} disabled={page >= Math.ceil(filteredClients.length / itemsPerPage) - 1}>
          <ChevronRight />
        </IconButton>
      </Grid>
    </Box>
  );
};
