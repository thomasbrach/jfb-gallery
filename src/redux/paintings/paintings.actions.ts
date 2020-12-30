import { dataFromSnapshot, fetchPaintingsFromDB } from "./../../firebase/db";
import { Painting } from "../../common/types/types";
import { PAINTINGS } from "./paintings.types";

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

export const AddNewPainting = (painting: Painting) => ({
  type: PAINTINGS.ADD_NEW_PAINTING,
  payload: painting,
});

export const EditPainting = (painting: Painting) => ({
  type: PAINTINGS.EDIT_PAINTING,
  payload: painting,
});

export const DeletePainting = (paintingId: Painting["id"]) => ({
  type: PAINTINGS.DELETE_PAINTING,
  payload: paintingId,
});

export const ViewSelectedPainting = (painting: Painting) => ({
  type: PAINTINGS.VIEW_SELECTED_PAINTING,
  payload: painting,
});

export const ClearSelectedPainting = () => ({
  type: PAINTINGS.CLEAR_SELECTED_PAINTING,
});
