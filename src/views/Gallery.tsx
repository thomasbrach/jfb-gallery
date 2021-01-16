import { Grid, Spinner } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { DBPainting } from "../common/types/types";
import PaintingPreview from "../components/PaintingPreview";
import { RootState } from "../redux/root.reducer";

const GalleryView = () => {
  const { paintings, isLoading } = useSelector(
    (state: RootState) => state.paintings
  );

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <Grid
        gap={4}
        height="3xl"
        overflowY="auto"
        templateColumns="repeat(5, 1fr)"
        padding={4}
      >
        {paintings.map((painting: DBPainting) => (
          <PaintingPreview key={painting.id} painting={painting} />
        ))}
      </Grid>
    </>
  );
};

export default GalleryView;
