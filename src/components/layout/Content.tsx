import { Box } from "@mui/material";
import React, { ReactNode } from "react";
import { drawerWidth } from "./SideBar";

interface ContentProp {
  children: ReactNode;
}
export const Content: React.FC<ContentProp> = ({ children }) => {
  return (
    <Box
      sx={{
        margin: 0,
        padding: 0,
        width: { xs: "100vw", md: `calc(100vw - ${drawerWidth}px)` },
        height: "100vh",
        // backgroundColor: "black",
        marginLeft: { xs: "none", md: `${drawerWidth}px` },
        mt: { xs: 4, md: 0 },
        mb: { xs: 4, md: 0 },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </Box>
  );
};
