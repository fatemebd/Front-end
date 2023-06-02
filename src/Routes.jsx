import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Usermainpage = React.lazy(() => import("./pages/user_mainpage/user_main"));
const LoginPage = React.lazy(() => import("./pages/LoginPage/LoginPage"));
const ManagermainPage = React.lazy(() => import("./pages/manager_mainpage/ManagerMainPage"));
const ChoosingRespondents=React.lazy(()=>import("./pages/ChoosingRespondents/choosing respondents"));
const UsersList=React.lazy(()=>import("./pages/UsersList/users_list"))
const Questions = React.lazy(() => import("./pages/Questions"));
const TemplatesList = React.lazy(() => import("./pages/TemplatesList/TemplatesList"));
const ChoosingSurveyTemplate = React.lazy(() => import("./pages/ChoosingSurveyTemplate/ChoosingSurveyTemplate"));
const ChoosingTargetEmployee = React.lazy(() => import("./pages/ChoosingTargetEmployee/ChoosingTargetEmployee"));
const UserSetting = React.lazy(() => import("./pages/UserSetting/UserSetting"));
const Answer=React.lazy(()=>import("./pages/Answer/index"))
const ManagerSetting = React.lazy(() => import("./pages/ManagerSetting/ManagerSetting"));
const TargetEmp = React.lazy(()=>import("./pages/ChoosingTargetEmployee/ChoosingTargetEmployee"))

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
          <Route path="/answer" element={<Answer />} />
          <Route path="/TemplatesList" element={<TemplatesList />} />
          <Route path="/ChoosingSurveyTemplate" element={<ChoosingSurveyTemplate />} />
          <Route path="/ChoosingTargetEmployee" element={<ChoosingTargetEmployee />} />
          <Route path="/UserSetting" element={<UserSetting />} />
          <Route path="/ManagerSetting" element={<ManagerSetting />} />
          <Route path="/TargetEmp" element={<TargetEmp />} />
          <Route path="/ChoosingRespondents" element={<ChoosingRespondents />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
