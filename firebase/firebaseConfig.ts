import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA-G8fvPa7ajD-Tuzeaaewh0GWqfihPTiY",
  authDomain: "manlounge-be84e.firebaseapp.com",
  projectId: "manlounge-be84e",
  storageBucket: "manlounge-be84e.firebasestorage.app",
  messagingSenderId: "758880758366",
  appId: "1:758880758366:web:3704906c2a1143fd64e2cf"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db   = getFirestore(app);
