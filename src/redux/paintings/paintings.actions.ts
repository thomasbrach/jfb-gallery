import {
  AddNewPaintingToDB,
  dataFromSnapshot,
  fetchPaintingsFromDB,
} from "./../../firebase/db";
import { NewPainting, DBPainting } from "../../common/types/types";
import { PAINTINGS } from "./paintings.types";

//---------- FETCH PAINTINGS ---------- //

export const fetchPaintingsStart = () => ({
  type: PAINTINGS.FETCH_PAINTINGS_START,
});

export const fetchPaintingsSuccess = (Paintings: any) => ({
  type: PAINTINGS.FETCH_PAINTINGS_SUCCESS,
  payload: Paintings,
});

export const fetchPaintingsFailure = (errorMessage: string) => ({
  type: PAINTINGS.FETCH_PAINTINGS_FAILURE,
  payload: errorMessage,
});

export const fetchPaintings = () => {
  return async (dispatch: any) => {
    dispatch(fetchPaintingsStart());
    try {
      const snapshot = await fetchPaintingsFromDB().get();
      const paintings = snapshot.docs.map((doc) => dataFromSnapshot(doc));
      dispatch(fetchPaintingsSuccess(paintings));
    } catch (error) {
      dispatch(fetchPaintingsFailure(error.message));
    }
  };
};

//---------- ADD NEW PAINTING ---------- //

export const addPaintingStart = () => ({
  type: PAINTINGS.ADD_PAINTING_START,
});

export const addPaintingSuccess = () => ({
  type: PAINTINGS.ADD_PAINTING_SUCCESS,
});
export const addPaintingFailure = (errorMessage: string) => ({
  type: PAINTINGS.ADD_PAINTING_FAILURE,
  payload: errorMessage,
});

export const addPainting = (painting: NewPainting) => {
  return async (dispatch: any) => {
    dispatch(addPaintingStart());
    try {
      await AddNewPaintingToDB(painting);
      dispatch(addPaintingSuccess());
    } catch (error) {
      dispatch(addPaintingFailure(error));
      throw error;
    }
  };
};

//---------- OTHERS ---------- //

export const EditPainting = (painting: DBPainting) => ({
  type: PAINTINGS.EDIT_PAINTING,
  payload: painting,
});

export const DeletePainting = (paintingId: DBPainting["id"]) => ({
  type: PAINTINGS.DELETE_PAINTING,
  payload: paintingId,
});

export const ViewSelectedPainting = (painting: DBPainting) => ({
  type: PAINTINGS.VIEW_SELECTED_PAINTING,
  payload: painting,
});

export const ClearSelectedPainting = () => ({
  type: PAINTINGS.CLEAR_SELECTED_PAINTING,
});
