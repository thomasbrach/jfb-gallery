import { Painting } from "../common/types/types";
import { db } from "./config";

export const fetchPaintingsFromDB = () => {
  return db.collection("paintings");
};

export const AddNewPaintingToDB = (painting: Painting) => {
  return db.collection("paintings").add(painting);
};

export const EditPaintingInDB = (painting: Painting) => {
  return db.collection("paintings").doc(painting.id).update(painting);
};

export const DeletePaintingFromDB = (paintingId: Painting["id"]) => {
  return db.collection("paintings").doc(paintingId).delete();
};

export const dataFromSnapshot = (snapshot: any) => {
  if (!snapshot.exists) return undefined;
  const data = snapshot.data();
  return {
    ...data,
    id: snapshot.id,
  };
};
