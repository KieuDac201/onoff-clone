import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Product from "../pages/Product/Product";
import NotFound from "../pages/NotFound/NotFound";
import ProductDetail from "../pages/ProductDetail/ProductDetail";
import UserInfo from "../pages/UserInfo/UserInfo";

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
    key: "productMen",
    exact: false,
    component: () => <Product />,
  },
  {
    path: "/do-nu",
    key: "productWomen",
    exact: false,
    component: () => <Product />,
  },
  {
    path: "/do-tre-em",
    key: "productChild",
    exact: false,
    component: () => <Product />,
  },
  {
    path: "/search",
    key: "productSearch",
    exact: false,
    component: () => <Product />,
  },
  {
    path: "/product-detail/:id",
    key: "product-detail",
    exact: false,
    component: () => <ProductDetail />,
  },
  {
    path: "/user-info",
    key: "user-info",
    exact: false,
    component: () => <UserInfo />,
  },

  { path: "/", key: "home", exact: true, component: () => <Home /> },
  {
    path: "*",
    key: "404",
    exact: false,
    component: () => <NotFound />,
  },
];

export default ROUTES_MAIN;
