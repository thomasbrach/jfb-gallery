import {
  AddNewPaintingToDB,
  dataFromSnapshot,
  EditPaintingInDB,
  fetchPaintingsFromDB,
} from "./../../firebase/db";
import { DBPainting } from "../../common/types/types";
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

export const addPaintingSuccess = (painting: DBPainting) => ({
  type: PAINTINGS.ADD_PAINTING_SUCCESS,
  payload: painting
});
export const addPaintingFailure = (errorMessage: string) => ({
  type: PAINTINGS.ADD_PAINTING_FAILURE,
  payload: errorMessage,
});

export const addPainting = (painting: DBPainting) => {
  return async (dispatch: any) => {
    dispatch(addPaintingStart());
    try {
      await AddNewPaintingToDB(painting);
      dispatch(addPaintingSuccess(painting));
    } catch (error) {
      dispatch(addPaintingFailure(error));
      throw error;
    }
  };
};

//---------- DELETE PAINTING ---------- //

export const deletePaintingStart = () => ({
  type: PAINTINGS.DELETE_PAINTING_START,
});

export const deletePaintingSuccess = (paintingId: DBPainting["id"]) => ({
  type: PAINTINGS.DELETE_PAINTING_SUCCESS,
  payload: paintingId
});
export const deletePaintingFailure = (errorMessage: string) => ({
  type: PAINTINGS.DELETE_PAINTING_FAILURE,
  payload: errorMessage,
});

//---------- EDIT PAINTING ---------- //

export const enterEditMode = (painting: DBPainting) => ({
  type: PAINTINGS.ENTER_EDIT_MODE,
  payload: painting
});

export const editPaintingStart = () => ({
  type: PAINTINGS.EDIT_PAINTING_START,
});

export const editPaintingSuccess = (painting: DBPainting) => ({
  type: PAINTINGS.EDIT_PAINTING_SUCCESS,
  payload: painting
});
export const editPaintingFailure = (errorMessage: string) => ({
  type: PAINTINGS.EDIT_PAINTING_FAILURE,
  payload: errorMessage,
});


export const editPainting = (painting: DBPainting) => {
  return async (dispatch: any) => {
    dispatch(editPaintingStart());
    try {
      await EditPaintingInDB(painting);
      dispatch(editPaintingSuccess(painting));
    } catch (error) {
      dispatch(editPaintingFailure(error));
      throw error;
    }
  };
};


//---------- OTHERS ---------- //

export const ViewSelectedPainting = (painting: DBPainting) => ({
  type: PAINTINGS.VIEW_SELECTED_PAINTING,
  payload: painting,
});

export const ClearSelectedPainting = () => ({
  type: PAINTINGS.CLEAR_SELECTED_PAINTING,
});
