import {
  EmailIcon,
  InfoIcon,
  MoonIcon,
  SettingsIcon,
  ViewIcon,
} from "@chakra-ui/icons";
import {
  Box,
  ButtonGroup,
  Center,
  Flex,
  Heading,
  Spacer,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SignOutUser } from "../redux/auth/auth.actions";
import { RootState } from "../redux/root.reducer";
import Button from "./Button";

const NavBar = () => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const toast = useToast();

  const handleLogOut = () => {
    dispatch(SignOutUser());
    toast({
      title: "Success!",
      description: "You're successfully logged out.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Box padding={4} paddingBottom={6}>
      <Flex>
        <Center>
          <Heading
            fontSize="4xl"
            fontFamily="'Permanent Marker', serif"
            color="gray.700"
          >
            Jean-François Brach
          </Heading>
        </Center>
        <Spacer />
        <ButtonGroup>
          <Button
            to="/"
            content="Home"
            rightIcon={<InfoIcon />}
            boxShadow="dark-lg"
          />
          <Button
            to="/gallery"
            content="Galerie"
            rightIcon={<ViewIcon />}
            boxShadow="dark-lg"
          />
          <Button
            to="/contact"
            content="Contact"
            rightIcon={<EmailIcon />}
            boxShadow="dark-lg"
          />
          {isAuthenticated && (
            <>
              <Button
                to="/admin"
                content="Admin"
                rightIcon={<SettingsIcon />}
                boxShadow="dark-lg"
              />
              <Button
                content="Déconnexion"
                rightIcon={<MoonIcon />}
                onClick={handleLogOut}
                boxShadow="dark-lg"
              />
            </>
          )}
        </ButtonGroup>
      </Flex>
    </Box>
  );
};

export default NavBar;
