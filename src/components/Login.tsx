import React from "react";
import LoginLogo from "../assets/images/login-logo.svg";
type Props = {
  children: string | JSX.Element | JSX.Element[];
};

const Login = () => {
  return (
    <Container>
      <Nav>
        <a href="">
          <img src={LoginLogo} alt="" />
        </a>
      </Nav>
    </Container>
  );
};

const Container = ({ children }: Props) => {
  return <div className="p-0">{children}</div>;
};

const Nav = ({ children }: Props) => {
  return <nav className="max-w-[1128px] m-auto pt-[12px] ">{children}</nav>;
};

export default Login;
