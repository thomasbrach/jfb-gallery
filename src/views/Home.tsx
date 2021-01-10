import { EmailIcon, ViewIcon } from "@chakra-ui/icons";
import { Center, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import Button from "../components/Button";

const HomeView = () => {
  return (
    <Center height="3xl">
      <Grid
        gap={4}
        justifyContent="center"
        padding={4}
        borderColor="gray.600"
        borderWidth="1px"
        bgColor="white"
        boxShadow="dark-lg"
        rounded="lg"
      >
        <GridItem>Bienvenue sur ma galerie !</GridItem>
        <GridItem>
          Blah blah blah <br />
          Blah blah Blah <br />
          Blah blah Blah <br />
          Blah blah Blah <br />
          Blah blah Blah <br />
          Blah blah Blah
        </GridItem>
        <GridItem>Pour accéder à mes tableaux :</GridItem>
        <GridItem justifySelf="center">
          <Button
            to="/gallery"
            content="Galerie"
            rightIcon={<ViewIcon />}
            boxShadow="dark-lg"
          />
        </GridItem>
        <GridItem>
          Pour discuter, me proposer des projets et acheter mes oeuvres :
        </GridItem>
        <GridItem justifySelf="center">
          <Button
            to="/contact"
            content="Contact"
            rightIcon={<EmailIcon />}
            boxShadow="dark-lg"
          />
        </GridItem>
        <GridItem
          textAlign="right"
          justifySelf="right"
          color="gray.600"
          fontFamily="Permanent Marker, serif"
        >
          Jean-François Brach
        </GridItem>
      </Grid>
    </Center>
  );
};

export default HomeView;
