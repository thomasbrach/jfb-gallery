import { Credentials } from "../../common/types/types";
import { signInFirebase, signOutFirebase } from "./../../firebase/auth";
import { AUTH } from "./auth.types";

//---------- SIGN IN ---------- //

export const signInStart = () => ({
  type: AUTH.SIGN_IN_START,
});

export const signInSuccess = () => ({
  type: AUTH.SIGN_IN_SUCCESS,
});

export const signInFailure = (error: object) => ({
  type: AUTH.SIGN_IN_FAILURE,
  payload: error,
});

export const signInUser = async (credentials: Credentials) => {
  return async (dispatch: any) => {
    dispatch(signInStart());
    try {
      await signInFirebase(credentials);
      dispatch(signInSuccess());
    } catch (error) {
      dispatch(signInFailure(error));
      throw error;
    }
  };
};

//---------- SIGN OUT ---------- //

export const signOutStart = () => ({
  type: AUTH.SIGN_OUT_START,
});

export const signOutSuccess = () => ({
  type: AUTH.SIGN_OUT_SUCCESS,
});

export const signOutFailure = (error: object) => ({
  type: AUTH.SIGN_OUT_FAILURE,
  payload: error,
});

export const SignOutUser = () => {
  return async (dispatch: any) => {
    dispatch(signOutStart());
    try {
      await signOutFirebase();
      dispatch(signOutSuccess());
    } catch (error) {
      dispatch(signOutFailure(error));
      throw error;
    }
  };
};
