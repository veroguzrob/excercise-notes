import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA4oIhdkIxN-reb2KQKYmLs6-YZS5U51gA",
  authDomain: "exercise-notes-aeec6.firebaseapp.com",
  projectId: "exercise-notes-aeec6",
  storageBucket: "exercise-notes-aeec6.appspot.com",
  messagingSenderId: "778454928625",
  appId: "1:778454928625:web:1147af53d81bfce8fc6d50"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export const provider = new GoogleAuthProvider();