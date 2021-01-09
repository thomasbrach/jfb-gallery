import { Box, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { DBPainting } from "../common/types/types";
import { RootState } from "../redux/root.reducer";

const PaintingView = ({ match }: any) => {
  const { paintings } = useSelector((state: RootState) => state.paintings);
  const paintingId = match.params.id;

  const selectedPainting = paintings.filter(
    (painting: DBPainting) => painting.id === paintingId
  )[0];
  const {
    name,
    imageUrl,
    paintedYear,
    category,
    techniques,
    size,
    availability,
    price,
  } = selectedPainting;

  return (
    <Grid gap={4}>
      <GridItem justifySelf="center">
        <Image
          maxWidth="6xl"
          maxHeight="lg"
          src={imageUrl}
          alt={name}
          _hover={{ opacity: 0.8 }}
          boxShadow="dark-lg"
        />
      </GridItem>
      <GridItem justifySelf="center">
        <Flex
          padding="4"
          borderColor="gray.600"
          borderWidth="1px"
          bgColor="white"
          boxShadow="dark-lg"
        >
          <Box paddingRight="16px">
            <Text fontWeight="bold">Nom</Text>
            <Text fontWeight="bold">Année</Text>
            <Text fontWeight="bold">Catégorie</Text>
            <Text fontWeight="bold">Techniques</Text>
            <Text fontWeight="bold">Dimensions</Text>
            <Text fontWeight="bold">Disponibilité</Text>
            <Text fontWeight="bold">Prix en € </Text>
          </Box>
          <Box paddingLeft="16px">
            <Text>{name}</Text>
            <Text>{paintedYear}</Text>
            <Text>{category}</Text>
            <Text>{techniques}</Text>
            <Text>{size}</Text>
            <Text>{availability}</Text>
            <Text>{availability === "Oui" ? price : "N/A"}</Text>
          </Box>
        </Flex>
      </GridItem>
    </Grid>
  );
};

export default PaintingView;
