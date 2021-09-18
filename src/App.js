import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import AppProvider from "./context/AppProvider";
import { setCart } from "./features/cart/cartSlice";
import {
  fetchAllProduct,
  getLoadingState,
} from "./features/products/productSlice";
import ROUTES_MAIN from "./Router/Router";

function MainLayout() {
  return (
    <>
      <Header />
      <Switch>
        {ROUTES_MAIN.map((route, i) => {
          return (
            <Route
              key={route.key}
              exact={route.exact}
              component={route.component}
              path={route.path}
            />
          );
        })}
      </Switch>
      <Footer />
    </>
  );
}

function App() {
  const dispatch = useDispatch();
  const loading = useSelector(getLoadingState);
  useEffect(() => {
    try {
      dispatch(fetchAllProduct());
    } catch (error) {
      console.log(error);
    }
    try {
      dispatch(setCart());
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);
  return <AppProvider>{!loading && <MainLayout />}</AppProvider>;
}

export default App;
