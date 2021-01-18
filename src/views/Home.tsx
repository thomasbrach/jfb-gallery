import { EmailIcon, ExternalLinkIcon, ViewIcon } from "@chakra-ui/icons";
import { Center, Grid, GridItem, Link } from "@chakra-ui/react";
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
        maxWidth="xl"
      >
        <GridItem>Bienvenue sur ma galerie !</GridItem>
        <GridItem>
          Blaise Pascal :{" "}
          <i>« Le silence éternel de ces espaces infinis m’effraie »</i>
        </GridItem>
        <GridItem>
          Jean-François Brach :{" "}
          <i>« la musique joyeuse de ces espaces colorés me transporte »</i>
        </GridItem>
        <GridItem>Tout est dit !</GridItem>
        <GridItem>
          Étudiant à l’
          <Link
            href="https://www.ecole-art-douai.com/"
            target="_blank"
            rel="noreferrer"
            isExternal
            color="teal.500"
          >
            École d'Art de Douai
            <ExternalLinkIcon mx="2px" />
          </Link>
          , peintre amateur depuis le début des années 2000, je partagerai avec
          vous mes œuvres. De styles variés, flashies ou sur fond noir, sages ou
          un peu moins, figuratives ou abstraites, toutes m'ont donné plaisir à
          les réaliser. A votre tour : enjoy !
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
