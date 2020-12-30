import { AUTH } from "./auth.types";

const INITIAL_STATE = {
  isAuthenticated: false,
  error: null,
};

const authReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case AUTH.SIGN_IN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        error: null,
      };

    case AUTH.SIGN_OUT_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
        error: null,
      };

    case AUTH.SIGN_IN_FAILURE:
    case AUTH.SIGN_OUT_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default authReducer;
