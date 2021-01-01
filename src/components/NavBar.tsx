import {
  EditIcon,
  InfoIcon,
  MoonIcon,
  SettingsIcon,
  ViewIcon,
} from "@chakra-ui/icons";
import { Box, ButtonGroup, Center, Flex, Spacer } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SignOutUser } from "../redux/auth/auth.actions";
import { RootState } from "../redux/root.reducer";
import Button from "./Button";

const NavBar = () => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(SignOutUser());
  };

  return (
    <Box padding="4">
      <Flex>
        <Center>
          <h1>Jean-François Brach Gallery</h1>
        </Center>
        <Spacer />
        <ButtonGroup>
          <Button to="/" content="Home" rightIcon={<InfoIcon />} />
          <Button to="/gallery" content="Gallery" rightIcon={<ViewIcon />} />
          <Button to="/contact" content="Contact" rightIcon={<EditIcon />} />
          {isAuthenticated && (
            <>
              <Button
                to="/admin"
                content="Admin"
                rightIcon={<SettingsIcon />}
              />
              <Button
                content="Log out"
                rightIcon={<MoonIcon />}
                onClick={handleLogOut}
              />
            </>
          )}
        </ButtonGroup>
      </Flex>
    </Box>
  );
};

export default NavBar;
