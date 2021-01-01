import { Spinner } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DBPainting } from "../common/types/types";
import PaintingPreview from "../components/PaintingPreview";
import { fetchPaintings } from "../redux/paintings/paintings.actions";
import { RootState } from "../redux/root.reducer";

const GalleryView = () => {
  const dispatch = useDispatch();
  const { paintings, isLoading } = useSelector(
    (state: RootState) => state.paintings
  );

  useEffect(() => {
    dispatch(fetchPaintings());
  }, [dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <h1>Gallery</h1>
      {paintings.map((painting: DBPainting) => (
        <PaintingPreview key={painting.name} painting={painting} />
      ))}
    </>
  );
};

export default GalleryView;
