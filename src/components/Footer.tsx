import { Center } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Center padding="4">
      <Link to="/login">Jean</Link>-François Brach Gallery ©{" "}
      {new Date().getFullYear()}
    </Center>
  );
};

export default Footer;
