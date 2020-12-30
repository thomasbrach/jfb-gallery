import React from "react";
import Button from "../components/Button";
import { AddNewPaintingToDB } from "../firebase/db";

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
  const handleAddNewPainting = (painting: any) => {
    AddNewPaintingToDB(painting);
  };

  return (
    <>
      <Button
        content="Add Test"
        onClick={() => handleAddNewPainting(testPainting)}
      />
    </>
  );
};

export default AdminView;
