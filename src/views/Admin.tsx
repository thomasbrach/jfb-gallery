import { Box } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import Button from "../components/Button";
import { AddNewPaintingToDB } from "../firebase/db";
import { RootState } from "../redux/root.reducer";

const testPainting = {
  name: "test",
  imageUrl:
    "https://lh3.googleusercontent.com/ogw/ADGmqu9m13Mri4OKtWmadxAIYX2ywXIzZkVXo3CKzezgRQ=s32-c-mo",
  paintedYear: 2020,
  type: "test",
  description: "test description",
  techniques: ["tech1", "tech2"],
  size: "10x30",
  availability: true,
  price: 250,
};

const AdminView = () => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  const handleAddNewPainting = (painting: any) => {
    AddNewPaintingToDB(painting);
  };

  if (!isAuthenticated) return <Redirect to="/" />;

  return (
    <Box height="3xl" bgColor="gray.100">
      <Button
        content="Add Test"
        color="cyan.400"
        onClick={() => handleAddNewPainting(testPainting)}
      />
    </Box>
  );
};

export default AdminView;
