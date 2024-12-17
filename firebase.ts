// Import the functions you need from the SDKs you need
import { getApp, initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgp_5f1WQXmVCUHs8u_Jpd7eM4533oze0",
  authDomain: "notion-clone-c8d58.firebaseapp.com",
  projectId: "notion-clone-c8d58",
  storageBucket: "notion-clone-c8d58.firebasestorage.app",
  messagingSenderId: "628821892492",
  appId: "1:628821892492:web:8b90794a9368060b464aa9",
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export {db}