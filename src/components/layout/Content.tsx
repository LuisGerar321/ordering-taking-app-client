import { Box } from "@mui/material";
import React, { ReactNode } from "react";
import { drawerWidth } from "./SideBar";
import { appBarHeight } from "./AppBar";

interface ContentProp {
  children: ReactNode;
}
export const Content: React.FC<ContentProp> = ({ children }) => {
  return (
    <Box
      sx={{
        margin: 10,
        padding: 0,
        width: { xs: "100vw", md: `calc(100vw - ${drawerWidth}px)` },
        height: { xs: `calc(100vh - ${appBarHeight}px)`, md: "auto" },
        // backgroundColor: "black",
        marginLeft: { xs: "none", md: `${drawerWidth}px` },
        mt: { xs: `${4}px`, md: 10 },
        mb: { xs: 10, md: 10 },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </Box>
  );
};
