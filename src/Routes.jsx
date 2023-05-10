import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Usermainpage = React.lazy(() => import("./pages/user_mainpage/user_main"));
const LoginPage = React.lazy(() => import("./pages/LoginPage/LoginPage"));
const ManagermainPage = React.lazy(() => import("./pages/manager_mainpage/ManagerMainPage"));
const ChoosingRespondents=React.lazy(()=>import("./pages/ChoosingRespondents/choosing respondents"));
const UsersList=React.lazy(()=>import("./pages/UsersList/users_list"))
const Questions = React.lazy(() => import("./pages/Questions"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/ManagerMain" element={<ManagermainPage />} />
          <Route path="/" element={<LoginPage />} />
          <Route path="/UserMain" element={<Usermainpage />} />
          <Route path="/UserList" element={<UsersList />} />
          <Route path="/questions" element={<Questions />} />

         
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
