import React from "react";

type Props = {
  children?: React.ReactNode;
};

const LoginLayout = (props: Props) => {
  const { children } = props;

  return <>{children}</>;
};

export default LoginLayout;
