import { EditIcon, InfoIcon, SettingsIcon, ViewIcon } from "@chakra-ui/icons";
import { ButtonGroup, Flex, Spacer } from "@chakra-ui/react";
import React from "react";
import Button from "./Button";

const NavBar = () => {
  return (
    <Flex>
      <h1>Jean-François Brach Gallery</h1>
      <Spacer />
      <ButtonGroup>
        <Button to="/" content="Home" rightIcon={<InfoIcon />} />
        <Button to="/gallery" content="Gallery" rightIcon={<ViewIcon />} />
        <Button to="/contact" content="Contact" rightIcon={<EditIcon />} />
        <Button to="/admin" content="Admin" rightIcon={<SettingsIcon />} />
      </ButtonGroup>
    </Flex>
  );
};

export default NavBar;
