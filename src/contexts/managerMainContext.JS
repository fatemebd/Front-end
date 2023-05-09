import React, {
  createContext,
  useContext,
  useState,
} from "react";


const defaultContextValue = [{}, () => {}];

export const ManagerMainContext = createContext(defaultContextValue);

export const ManagerMainContextProvider = (
  props
) => {
  const [data, setData] = useState([]);

  return (
    <ManagerMainContext.Provider value={[data, setData]}>
      {props.children}
    </ManagerMainContext.Provider>
  );
};
export const useManagerMainContext = () => useContext(ManagerMainContext);