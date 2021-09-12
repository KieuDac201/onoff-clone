import { Route, Switch } from "react-router";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import AppProvider from "./context/AppProvider";
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
  return (
    <AppProvider>
      <MainLayout />
    </AppProvider>
  );
}

export default App;
