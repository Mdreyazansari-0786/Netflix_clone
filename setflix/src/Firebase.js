import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {Firestore, getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAQglJrQB5a811UpDG8pIJ22qi7ZBk1WHU",
  authDomain: "netflixclone-712c2.firebaseapp.com",
  projectId: "netflixclone-712c2",
  storageBucket: "netflixclone-712c2.appspot.com",
  messagingSenderId: "137283469641",
  appId: "1:137283469641:web:5466445a2f585e247c9a98",
  measurementId: "G-TT9675KFTN"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };
export const db=getFirestore(app)
