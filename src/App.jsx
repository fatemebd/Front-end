import React from "react";
import { ManagerMainContextProvider } from "./contexts/managerMainContext";
import Routes from "./Routes";

function App() {
  return (
  <ManagerMainContextProvider  >
    <Routes />
  </ManagerMainContextProvider>
  );
}

export default App;