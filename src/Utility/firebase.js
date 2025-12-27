import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";


const firebaseConfig = {
  apiKey: "AIzaSyA8UqizfZBmo90aDVPM7rzyQl-PFiFJKRI",
  // apiKey: import.meta.env.VITE_FIREBASE_API_KEY,

  authDomain: "clone-e76be.firebaseapp.com",
  projectId: "clone-e76be",
  storageBucket: "clone-e76be.firebasestorage.app",
  messagingSenderId: "309528166340",
  appId: "1:309528166340:web:bb3c693cb7b5ab1b772e91",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
