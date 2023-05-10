import React from "react";
const ManagerMainContext = React.createContext();

export const ManagerMainContextProvider = (
  props
) => {
  const [data, setData] = useState([
    
  ]);

  return (
    <ManagerMainContext.Provider value={[data, setData]}>
      {props.children}
    </ManagerMainContext.Provider>
  );
};
export const usMmanagerMainContext = () => useContext(ManagerMainContext);