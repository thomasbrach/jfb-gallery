import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { RootState } from "../redux/root.reducer";
import UploadForm from "../components/UploadForm";
import { Grid, GridItem, Spinner } from "@chakra-ui/react";
import { DBPainting } from "../common/types/types";
import AdminPreview from "../components/AdminPreview";

const AdminView = () => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  const { paintings, isLoading } = useSelector(
    (state: RootState) => state.paintings
  );

  if (!isAuthenticated) return <Redirect to="/" />;

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <Grid gap={4} height="3xl" templateColumns="repeat(3, 1fr)">
        <UploadForm />
        <GridItem colSpan={2}>
          <Grid gap={2} height="3xl" overflowY="auto" flexDirection="column">
            {paintings.map((painting: DBPainting) => (
              <AdminPreview key={painting.id} painting={painting} />
            ))}
          </Grid>
        </GridItem>
      </Grid>
    </>
  );
};

export default AdminView;
