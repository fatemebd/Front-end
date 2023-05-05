import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Usermainpage = React.lazy(() => import("./pages/manager_mainpage/ManagerMainPage"));
const LoginPage = React.lazy(() => import("./pages/LoginPage/LoginPage"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Usermainpage/>} />
         
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
