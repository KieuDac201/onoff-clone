import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router";
import "./App.css";
import NotFound from "./pages/NotFound";
import { fetchProduct } from "./redux/slice/productSlice";
import ROUTES_MAIN from "./Router";

function MainLayout() {
  return (
    <>
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
        <Route path="*" exact={true} component={() => <NotFound />} />
      </Switch>
    </>
  );
}

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct());
  }, []);

  return <MainLayout />;
}

export default App;
