import { Center } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Center padding="4">
      Jean-François Brach Gallery © {new Date().getFullYear()}
    </Center>
  );
};

export default Footer;
