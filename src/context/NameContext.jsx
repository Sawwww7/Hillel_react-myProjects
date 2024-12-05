import { createContext, useState } from "react";

export const NameContext = createContext(null);
const NameContextProvider = ({ children }) => {
  const [userName, setUserName] = useState("");
  const austUser = {
    userName,
    setUserName,
  };

  return (
    <NameContext.Provider value={austUser}>{children}</NameContext.Provider>
  );
};

export default NameContextProvider;
