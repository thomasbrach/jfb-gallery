import { Center } from "@chakra-ui/react";
import React from "react";

type Props = {
  children?: React.ReactNode;
};

const LoginLayout = (props: Props) => {
  const { children } = props;

  return <Center height="100vh">{children}</Center>;
};

export default LoginLayout;
