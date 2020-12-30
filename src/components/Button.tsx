import { Button as ChakraButton, ButtonProps } from "@chakra-ui/react";
import React from "react";
import { Link, LinkProps } from "react-router-dom";

type ButtonType = Partial<Pick<LinkProps, "to"> & { content: string }> &
  ButtonProps;

const Button = (props: ButtonType) => {
  const { to, content, ...rest } = props;
  return to ? (
    <Link to={to}>
      <ChakraButton {...rest}>{content}</ChakraButton>
    </Link>
  ) : (
    <ChakraButton {...rest}>{content}</ChakraButton>
  );
};

export default Button;
