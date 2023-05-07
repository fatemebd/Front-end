import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Usermainpage = React.lazy(() => import("./pages/manager_mainpage/ManagerMainPage"));
const LoginPage = React.lazy(() => import("./pages/LoginPage/LoginPage"));
const managermainPage = React.lazy(() => import("./pages/manager_mainpage/ManagerMainPage"));
const ChoosingRespondents=React.lazy(()=>import("./pages/ChoosingRespondents/choosing respondents"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<ChoosingRespondents/>} />
         
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
