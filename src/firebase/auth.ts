import { auth } from "./config";

type signInProps = {
  email: string;
  password: string;
};

export const signInFirebase = (credentials: signInProps) => {
  return auth.signInWithEmailAndPassword(
    credentials.email,
    credentials.password
  );
};

export const signOutFirebase = () => {
  return auth.signOut();
};
