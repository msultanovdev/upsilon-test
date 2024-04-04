import FormPage from "./pages/FormPage/FormPage";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
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
  {
    path: "/products/:id",
    Component: Product,
  },
  {
    path: "/form",
    Component: FormPage,
  },
];
