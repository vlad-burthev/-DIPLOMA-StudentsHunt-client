import { Suspense, useEffect } from "react";
import Router from "../router/router";
import { useCheckUserIsAuthQuery } from "../api/authApi";
import { useNavigate } from "react-router-dom";
import { publicRoutes } from "../router/routes";

const App = () => {
  const navigate = useNavigate();
  const { isError, isSuccess, isLoading } = useCheckUserIsAuthQuery("");

  useEffect(() => {
    if (isError) {
      navigate(publicRoutes.auth.signInPath);
    }
  }, [isError, isSuccess]);

  if (isLoading)
    return <h1 style={{ fontSize: "100px", color: "#000" }}>LOADING</h1>;

  return (
    <Suspense fallback={false}>
      <Router />
    </Suspense>
  );
};

export default App;
