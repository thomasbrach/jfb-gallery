import { Box, Spinner } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Painting } from "../common/types/types";
import PaintingPreview from "../components/PaintingPreview";
import { fetchPaintings } from "../redux/paintings/paintings.actions";
import { RootState } from "../redux/root.reducer";

const GalleryView = () => {
  const dispatch = useDispatch();
  const { paintings, isFetching } = useSelector(
    (state: RootState) => state.paintings
  );

  useEffect(() => {
    dispatch(fetchPaintings());
  }, [dispatch]);

  if (isFetching) {
    return <Spinner />;
  }

  return (
    <Box height="3xl" bgColor="gray.100">
      <h1>Gallery</h1>
      {paintings.map((painting: Painting) => (
        <PaintingPreview key={painting.id} painting={painting} />
      ))}
    </Box>
  );
};

export default GalleryView;
