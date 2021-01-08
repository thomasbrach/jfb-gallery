import { DBPainting } from "../../common/types/types";
import { PAINTINGS } from "./paintings.types";

const INITIAL_STATE = {
  paintings: [],
  editMode: false,
  editablePainting: {
    id: "",
    name: "",
    imageUrl: "",
    paintedYear: "",
    category: "",
    techniques: "",
    size: "",
    availability: "",
    price: "",
    errorMessage: "",
  },
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
    case PAINTINGS.DELETE_PAINTING_START:
    case PAINTINGS.EDIT_PAINTING_START:
      return {
        ...state,
        isLoading: true,
      };

    case PAINTINGS.FETCH_PAINTINGS_FAILURE:
    case PAINTINGS.ADD_PAINTING_FAILURE:
    case PAINTINGS.DELETE_PAINTING_FAILURE:
    case PAINTINGS.EDIT_PAINTING_FAILURE:
      return {
        ...state,
        isLoading: false,
        editMode: false,
        editablePainting: {
          id: "",
          name: "",
          imageUrl: "",
          paintedYear: "",
          category: "",
          techniques: "",
          size: "",
          availability: "",
          price: "",
          errorMessage: "",
        },
        errorMessage: action.payload,
      };

      case PAINTINGS.FETCH_PAINTINGS_SUCCESS:
        return {
          ...state,
          paintings: action.payload,
          isLoading: false,
        };

    case PAINTINGS.ADD_PAINTING_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };

    case PAINTINGS.EDIT_PAINTING_SUCCESS:
      return {
        ...state,
        isLoading: false,
        editMode: false,
        editablePainting: {
          id: "",
          name: "",
          imageUrl: "",
          paintedYear: "",
          category: "",
          techniques: "",
          size: "",
          availability: "",
          price: "",
          errorMessage: "",
        },
        paintings: [
          ...state.paintings.filter(
            (painting: DBPainting) => painting.id !== action.payload.id
          ),
          action.payload,
        ],
      };

    case PAINTINGS.DELETE_PAINTING_SUCCESS:
      return {
        ...state,
        isLoading: false,
        paintings: [
          ...state.paintings.filter(
            (painting: DBPainting) => painting.id !== action.payload
          ),
        ],
      };

case PAINTINGS.ENTER_EDIT_MODE:
  return {
    ...state,
    editMode: true,
    editablePainting: action.payload
  }

  case PAINTINGS.EXIT_EDIT_MODE:
    return {
      ...state,
      editMode: false,
     editablePainting: {
        id: "",
        name: "",
        imageUrl: "",
        paintedYear: "",
        category: "",
        techniques: "",
        size: "",
        availability: "",
        price: "",
        errorMessage: "",
      }
    }

    default:
      return state;
  }
};

export default paintingsReducer;
