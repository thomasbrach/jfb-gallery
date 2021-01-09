import { EmailIcon, ViewIcon } from "@chakra-ui/icons";
import { Center, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import Button from "../components/Button";

const HomeView = () => {
  return (
    <Center height="3xl">
      <Grid gap={4} justifyContent="center">
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
          <Button to="/gallery" content="Galerie" rightIcon={<ViewIcon />} />
        </GridItem>
        <GridItem>
          Pour discuter, me proposer des projets et acheter mes oeuvres :
        </GridItem>
        <GridItem justifySelf="center">
          <Button to="/contact" content="Contact" rightIcon={<EmailIcon />} />
        </GridItem>
        <GridItem textAlign="right">Jean-François Brach</GridItem>
      </Grid>
    </Center>
  );
};

export default HomeView;
