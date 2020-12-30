import { auth } from "./config";

export const signIn = (email: string, password: string) => {
  return auth.signInWithEmailAndPassword(email, password);
};

export const signOut = () => {
  return auth.signOut();
};
