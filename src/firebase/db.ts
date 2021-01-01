import { NewPainting, DBPainting } from "../common/types/types";
import { db } from "./config";

export const fetchPaintingsFromDB = () => {
  return db.collection("paintings");
};

export const AddNewPaintingToDB = (painting: NewPainting) => {
  return db.collection("paintings").add(painting);
};

export const EditPaintingInDB = (painting: DBPainting) => {
  return db.collection("paintings").doc(painting.id).update(painting);
};

export const DeletePaintingFromDB = (paintingId: DBPainting["id"]) => {
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
