import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import { fetchProduct } from "./redux/slice/productSlice";

function App() {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.allProduct);

  useEffect(() => {
    dispatch(fetchProduct());
  }, []);
  console.log(products);
  return (
    <>
      <Header />
      <Home />
    </>
  );
}

export default App;
