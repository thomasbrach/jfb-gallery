import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import { RootState } from "../redux/root.reducer";

const LoginView = () => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  if (isAuthenticated) return <Redirect push to="/admin" />;

  return (
    <>
      <LoginForm />
    </>
  );
};

export default LoginView;
