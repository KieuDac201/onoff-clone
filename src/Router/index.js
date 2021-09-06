import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Product from "../pages/Product";
import ProductDetail from "../pages/ProductDetail";
import NotFound from "../pages/NotFound";

const ROUTES_MAIN = [
  { path: "/login", key: "login", exact: false, component: () => <Login /> },
  {
    path: "/register",
    key: "register",
    exact: false,
    component: () => <Register />,
  },
  {
    path: "/do-nam",
    key: "product",
    exact: false,
    component: () => <Product />,
  },
  {
    path: "/do-nu",
    key: "product",
    exact: false,
    component: () => <Product />,
  },
  {
    path: "/do-tre-em",
    key: "product",
    exact: false,
    component: () => <Product />,
  },
  {
    path: "/product-detail",
    key: "product-detail",
    exact: false,
    component: () => <ProductDetail />,
  },
  { path: "/", key: "home", exact: true, component: () => <Home /> },
];

export default ROUTES_MAIN;
