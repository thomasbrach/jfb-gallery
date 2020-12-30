import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAiGUoohxrc-xNhiMQWF4p9UTYhI9Wx1-0",
  authDomain: "jfb-gallery.firebaseapp.com",
  projectId: "jfb-gallery",
  storageBucket: "jfb-gallery.appspot.com",
  messagingSenderId: "897446423680",
  appId: "1:897446423680:web:c736d5007d50d228000a65",
  measurementId: "G-43HXYMZW9K",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const db = firebase.firestore();

// const config = {
//   apiKey: process.env.FIREBASE_API_KEY,
//   authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.FIREBASE_PROJECT_ID,
//   storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.FIREBASE_APP_ID,
//   measurementId: process.env.FIREBASE_MEASUREMENT_ID,
// };
