import { Box, Center, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { DBPainting } from "../common/types/types";
import { RootState } from "../redux/root.reducer";

const PaintingView = ({ match }: any) => {
  const { paintings } = useSelector((state: RootState) => state.paintings);
  const paintingId = match.params.id;

  const selectedPainting = paintings.filter(
    (painting: DBPainting) => painting.id === paintingId
  )[0];
  const {
    id,
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
    <Flex padding={2}>
      <Link to={`/painting/${id}`}>
        <Image
          src={imageUrl}
          alt={name}
          fit="cover"
          boxSize="3xs"
          _hover={{ opacity: 0.8 }}
        />
      </Link>
      <Center>
        <Flex>
          <Box paddingLeft="64px">
            <Text>Name:</Text>
            <Text>Year Painted:</Text>
            <Text>Category:</Text>
            <Text>Techniques: </Text>
            <Text>Size: </Text>
            <Text>Availability: </Text>
            <Text>Price: </Text>
          </Box>
          <Box paddingLeft="128px">
            <Text>{name}</Text>
            <Text>{paintedYear}</Text>
            <Text>{category ? category : "N/A"}</Text>
            <Text>{techniques ? techniques : "N/A"}</Text>
            <Text>{size ? size : "N/A"}</Text>
            <Text>{availability ? availability : "N/A"}</Text>
            <Text>{price ? price : "N/A"}</Text>
          </Box>
        </Flex>
      </Center>
    </Flex>
  );
};

export default PaintingView;
