import { Navigate, Route, Routes } from "react-router-dom";
import SignInPage from "../pages/auth/sign-in/sign-in.page";
import SignUpPage from "../pages/auth/sign-up/sign-up.page";
import HomePage from "../pages/home/home.page";
import { publicRoutes } from "./routes";
import Layout from "../pages/layout";

const Router = () => {
  return (
    <Routes>
      <Route path={publicRoutes.homeRoute} element={<Layout />}>
        <Route index element={<HomePage />} />
      </Route>
      <Route path={publicRoutes.auth.index}>
        <Route path={publicRoutes.auth.signInRoute} element={<SignInPage />} />
        <Route path={publicRoutes.auth.signUpRoute} element={<SignUpPage />} />

        <Route
          path="*"
          element={<Navigate to={publicRoutes.auth.signInPath} />}
        />
      </Route>
      <Route
        path="*"
        element={<Navigate to={publicRoutes.homeRoute} replace />}
      />
    </Routes>
  );
};

export default Router;
