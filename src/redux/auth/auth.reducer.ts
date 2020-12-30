import { AUTH } from "./auth.types";

const INITIAL_STATE = {
  authenticated: false,
  admin: null,
};

const authReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case AUTH.SIGN_IN_ADMIN:
      return {
        ...state,
        authenticated: true,
        admin: action.payload,
      };

    case AUTH.SIGN_OUT_ADMIN:
      return {
        ...state,
        authenticated: false,
        admin: null,
      };

    default:
      return state;
  }
};

export default authReducer;
