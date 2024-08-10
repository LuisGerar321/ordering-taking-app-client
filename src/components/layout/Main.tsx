import { Box } from "@mui/material";
import { ReactNode } from "react";
import { NavBarApp, appBarHeight } from "./AppBar";
import { SideBar } from "./SideBar";
import { Footer } from "./Footer";

interface MainLayoutProps {
  children?: ReactNode;
}

export const Main = ({ children }: MainLayoutProps) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <NavBarApp></NavBarApp>
      <SideBar></SideBar>
      <Box sx={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>{children}</Box>
      <Footer sx={{ display: { sx: "flex", md: "none" }, position: { xs: "fixed" } }}></Footer>
    </Box>
  );
};
