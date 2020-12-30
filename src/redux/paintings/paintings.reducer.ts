import { Painting } from "../../common/types/types";
import { PAINTINGS } from "./paintings.types";

const INITIAL_STATE = {
  paintings: [],
  selectedPainting: null,
  isFetching: false,
  errorMessage: undefined,
};

type Action = {
  type: string;
  payload?: any;
};

const paintingsReducer = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case PAINTINGS.FETCH_PAINTINGS_START:
      return {
        ...state,
        isFetching: true,
      };

    case PAINTINGS.FETCH_PAINTINGS_SUCCESS:
      return {
        ...state,
        paintings: action.payload,
        isFetching: false,
      };

    case PAINTINGS.FETCH_PAINTINGS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };

    case PAINTINGS.ADD_NEW_PAINTING:
      return {
        ...state,
        paintings: [...state.paintings, action.payload],
      };

    case PAINTINGS.EDIT_PAINTING:
      return {
        ...state,
        paintings: [
          ...state.paintings.filter(
            (painting: Painting) => painting.id !== action.payload.id
          ),
          action.payload,
        ],
      };

    case PAINTINGS.DELETE_PAINTING:
      return {
        ...state,
        paintings: [
          ...state.paintings.filter(
            (painting: Painting) => painting.id !== action.payload
          ),
        ],
      };

    default:
      return state;
  }
};

export default paintingsReducer;
