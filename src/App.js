import { createContext, useEffect, useState } from "react";
import { Route, Switch } from "react-router";
import "./App.css";
import NotFound from "./pages/NotFound/NotFound";
import ROUTES_MAIN from "./Router/Router";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

export const AppContext = createContext();

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
  const [products, setProducts] = useState([]);
  const [querySearch, setQuerySearch] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      const querySnapshot = await getDocs(collection(db, "products"));
      let arrProducts = [];
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        arrProducts.push({ id: doc.id, ...doc.data() });
      });
      setProducts(arrProducts);
    };
    fetchProduct();
  }, []);
  return (
    <AppContext.Provider value={{ products, querySearch, setQuerySearch }}>
      <MainLayout />
    </AppContext.Provider>
  );
}

export default App;
