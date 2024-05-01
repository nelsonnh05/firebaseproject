// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChojOdivA7KQjt2_HBz9btZqKiw32CM2I",
  authDomain: "fir-project-22946.firebaseapp.com",
  projectId: "fir-project-22946",
  storageBucket: "fir-project-22946.appspot.com",
  messagingSenderId: "1015704093556",
  appId: "1:1015704093556:web:035488ac8c3f828dfbe221",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const AUTH = getAuth(app);
