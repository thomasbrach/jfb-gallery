import { Box, Container } from "@chakra-ui/react";
import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

type Props = {
  children?: React.ReactNode;
};

const MainLayout = (props: Props) => {
  const { children } = props;

  return (
    <Container maxWidth="7xl" padding="4">
      <NavBar />
      <Box height="3xl" bgColor="gray.100">
        {children}
      </Box>
      <Footer />
    </Container>
  );
};

export default MainLayout;
