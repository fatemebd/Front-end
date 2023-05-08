import React, {
  createContext,
  Dispatch,
  FC,
  useContext,
  useState,
} from "react";


const defaultContextValue = [{}, () => {}];

export const JsonContext = createContext(defaultContextValue);

export const managerMainContextProvider = (
  props
) => {
  const [json, setJson] = useState(json1);

  return (
    <JsonContext.Provider value={[json, setJson]}>
      {props.children}
    </JsonContext.Provider>
  );
};
export const managerMainContext = () => useContext(JsonContext);