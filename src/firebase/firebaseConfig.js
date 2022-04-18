import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBQqLj97EJFJQ0SWW1UYH_M7-pTlUPvt3o",
  authDomain: "daalu-3c8d4.firebaseapp.com",
  projectId: "daalu-3c8d4",
  storageBucket: "daalu-3c8d4.appspot.com",
  messagingSenderId: "247556534237",
  appId: "1:247556534237:web:aca893658eaa38060dd034"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider();
const facebook = new FacebookAuthProvider();
const db = getFirestore();

export {
  app, 
  google, 
  facebook,
  db
}