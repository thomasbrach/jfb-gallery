import { AUTH } from "./auth.types";

export const signInAdmin = (admin: any) => ({
  type: AUTH.SIGN_IN_ADMIN,
  payload: admin,
});

export const signOutAdmin = () => ({
  type: AUTH.SIGN_OUT_ADMIN,
});
