import { useContext, createContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [dummyHook, setDummyHook] = useState(0);

  return (
    <AppContext.Provider value={{ dummyHook }}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
