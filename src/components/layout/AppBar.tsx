import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem, Avatar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { pages } from "../../routes";
import React from "react";
import logo from "../../assets/logo.png";

export const appBarHeight = 64;

export const NavBarApp = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = (path: string) => {
    navigate(path);
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ display: { xs: "flex", md: "none" }, backgroundColor: "whitesmoke" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Avatar src={logo} sx={{ width: 50, height: 50 }} />
        <IconButton aria-label="menu" onClick={handleMenuOpen}>
          <MenuIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={() => setAnchorEl(null)}
          PaperProps={{
            sx: {
              maxHeight: 200,
              width: "200px",
            },
          }}
        >
          {pages.map((page) => (
            <MenuItem key={page.name} onClick={() => handleMenuClose(page.path)}>
              {page.icon}
              <Typography sx={{ ml: 1 }}>{page.name}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Toolbar>
    </AppBar>
  );
};
