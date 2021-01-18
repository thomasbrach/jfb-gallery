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
        css={{
          "&::-webkit-scrollbar": {
            width: "6px",
            backgroundColor: "#F5F5F5",
          },
          "&::-webkit-scrollbar-track": {
            webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.3)",
            backgroundColor: "#F5F5F5",
          },
          "&::-webkit-scrollbar-thumb": {
            webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,.3)",
            backgroundColor: "#555",
          },
        }}
      >
        {paintings.map((painting: DBPainting) => (
          <PaintingPreview key={painting.id} painting={painting} />
        ))}
      </Grid>
    </>
  );
};

export default GalleryView;
