import React, { useEffect } from "react";
import Main from "../components/LogIn/Main";
import Nav from "../components/LogIn/Nav";

const Login = () => {
  useEffect(() => {
    document.title = "LinkedIn: Log In or Sign Up";
  }, []);

  return (
    <div className="p-0">
      <Nav />
      <Main />
    </div>
  );
};

export default Login;
