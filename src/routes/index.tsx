import InventoryIcon from "@mui/icons-material/Inventory";
import StoreIcon from "@mui/icons-material/Store";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
export const pages = [
  {
    icon: <StoreIcon />,
    path: "/",
    name: "Home",
  },
  {
    icon: <InventoryIcon />,
    path: "/clients",
    name: "Clients",
  },
  {
    icon: <ShoppingCartIcon />,
    path: "/ordering",
    name: "Ordering",
  },
];
