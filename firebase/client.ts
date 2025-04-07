// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpjdD2hBMU1LNVLgiv7mLeH_QfOEV1BtM",
  authDomain: "prepwise-cb572.firebaseapp.com",
  projectId: "prepwise-cb572",
  storageBucket: "prepwise-cb572.firebasestorage.app",
  messagingSenderId: "572924918957",
  appId: "1:572924918957:web:95f65594063441c6455a24",
  measurementId: "G-YLPDBVBX9F",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
