// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfDtL29MJuQDsTtKiagyvvApKMPfQ-3NQ",
  authDomain: "accessibility-map-9c30c.firebaseapp.com",
  projectId: "accessibility-map-9c30c",
  storageBucket: "accessibility-map-9c30c.firebasestorage.app",
  messagingSenderId: "623345064295",
  appId: "1:623345064295:web:af33bd4b17012bda8677c2",
  measurementId: "G-21PHGR694M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { app, db };