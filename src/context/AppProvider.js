import React, { useState } from "react";

export const AppContext = React.createContext([]);

const AppProvider = ({ children }) => {
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

  return (
    <AppContext.Provider
      value={{
        querySearch,
        setQuerySearch,
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
