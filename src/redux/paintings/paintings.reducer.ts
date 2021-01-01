import { DBPainting } from "../../common/types/types";
import { PAINTINGS } from "./paintings.types";

const INITIAL_STATE = {
  paintings: [],
  selectedPainting: null,
  isLoading: false,
  errorMessage: undefined,
};

type Action = {
  type: string;
  payload?: any;
};

const paintingsReducer = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case PAINTINGS.FETCH_PAINTINGS_START:
    case PAINTINGS.ADD_PAINTING_START:
      return {
        ...state,
        isLoading: true,
      };

    case PAINTINGS.FETCH_PAINTINGS_SUCCESS:
      return {
        ...state,
        paintings: action.payload,
        isLoading: false,
      };

    case PAINTINGS.FETCH_PAINTINGS_FAILURE:
    case PAINTINGS.ADD_PAINTING_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload,
      };

    case PAINTINGS.ADD_PAINTING_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };

    case PAINTINGS.EDIT_PAINTING:
      return {
        ...state,
        paintings: [
          ...state.paintings.filter(
            (painting: DBPainting) => painting.id !== action.payload.id
          ),
          action.payload,
        ],
      };

    case PAINTINGS.DELETE_PAINTING:
      return {
        ...state,
        paintings: [
          ...state.paintings.filter(
            (painting: DBPainting) => painting.id !== action.payload
          ),
        ],
      };

    default:
      return state;
  }
};

export default paintingsReducer;
