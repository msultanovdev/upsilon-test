import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";

export const rootRoutes = [
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/products",
    Component: Products,
  },
];
