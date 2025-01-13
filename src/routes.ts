import FormPage from "./pages/FormPage/FormPage";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Shop from "./pages/Shop/Shop";

export const rootRoutes = [
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/products",
    Component: Shop,
  },
  {
    path: "/products/:id",
    Component: Product,
  },
  {
    path: "/form",
    Component: FormPage,
  },
  {
    path: "/form/:id",
    Component: FormPage,
  },
];
