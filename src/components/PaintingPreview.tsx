import { Box, Image, Spacer } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { DBPainting } from "../common/types/types";

type Prop = {
  painting: DBPainting;
};

const PaintingPreview = ({ painting }: Prop) => {
  const { id, name, imageUrl } = painting;
  return (
    <Box>
      <Image src={imageUrl} alt={name} />
      <Box>
        {id} <Spacer /> <Link to={`/painting/${id}`}>Details</Link>
      </Box>
    </Box>
  );
};

export default PaintingPreview;
