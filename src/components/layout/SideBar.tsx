import Drawer from "@mui/material/Drawer";
import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText, Toolbar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { pages } from "../../routes";
import { Footer } from "./Footer";
export const drawerWidth = 220;

export const SideBar = () => {
  const navigate = useNavigate();
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        position: "relative",
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: "whitesmoke",
          top: 0,
        },
        display: {
          xs: "none",
          md: "flex",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <List>
        <ListItem
          sx={{
            justifyContent: "center",
          }}
        >
          <Avatar src={logo} sx={{ width: 100, height: 100 }} />
        </ListItem>
        {pages.map((page, index) => (
          <ListItem key={`${"roleType"}-${index}-md-sidebar`}>
            <ListItemButton
              onClick={() => {
                navigate(page.path);
              }}
            >
              <ListItemIcon sx={{ color: "black" }}>{page.icon}</ListItemIcon>
              <ListItemText
                sx={{
                  margin: 0,
                  padding: 0,
                  color: "black",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                }}
              >
                {page.name}
              </ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Footer></Footer>
    </Drawer>
  );
};
