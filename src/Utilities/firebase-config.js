import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDjP6-n31pANUImj_b3yVecHOL9kK0f_vk",
  authDomain: "centering-dock-264409.firebaseapp.com",
  projectId: "centering-dock-264409",
  storageBucket: "centering-dock-264409.appspot.com",
  messagingSenderId: "828455672288",
  appId: "1:828455672288:web:45e2fc85ea5fcba307f385",
  measurementId: "G-10LKEQWVFL",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
