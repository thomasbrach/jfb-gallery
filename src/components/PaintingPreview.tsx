import { GridItem, Image } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { DBPainting } from "../common/types/types";

type Prop = {
  painting: DBPainting;
};

const PaintingPreview = ({ painting }: Prop) => {
  const { id, name, imageUrl } = painting;

  return (
    <GridItem
      maxWidth="xs"
      _hover={{ opacity: 0.8 }}
      justifySelf="center"
      alignSelf="center"
    >
      <Link to={`/painting/${id}`}>
        <Image
          src={imageUrl}
          alt={name}
          fit="cover"
          height="xs"
          boxShadow="dark-lg"
        />
      </Link>
    </GridItem>
  );
};

export default PaintingPreview;
