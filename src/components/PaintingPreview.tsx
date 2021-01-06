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
    <GridItem colSpan={1} rowSpan={1} maxWidth="xs" _hover={{ opacity: 0.8 }}>
      <Link to={`/painting/${id}`}>
        <Image src={imageUrl} alt={name} fit="cover" height="xs" />
      </Link>
    </GridItem>
  );
};

export default PaintingPreview;
