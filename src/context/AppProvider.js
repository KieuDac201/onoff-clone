import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export const AppContext = React.createContext([]);

const AppProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [querySearch, setQuerySearch] = useState("");
  const [addressClient, setAddressClient] = useState({
    city: "Thành phố Hà Nội",
    district: "Quận Ba Đình",
    ward: "",
    name: "",
    phone: "",
    note: "",
  });
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState(
    localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
  );

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
    <AppContext.Provider
      value={{
        products,
        querySearch,
        setQuerySearch,
        cart,
        setCart,
        user,
        setUser,
        addressClient,
        setAddressClient,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
