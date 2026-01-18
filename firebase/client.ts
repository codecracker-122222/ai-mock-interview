// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDD51iOvl-V5C6LgN5zWQpOFLji7WWN9E",
  authDomain: "prepwise1-271fc.firebaseapp.com",
  projectId: "prepwise1-271fc",
  storageBucket: "prepwise1-271fc.firebasestorage.app",
  messagingSenderId: "613940087544",
  appId: "1:613940087544:web:522a8d16de1e44278d090d",
  measurementId: "G-HJG3XYENNW"
};

// Initialize Firebase
const app = !getApps.length ?  initializeApp(firebaseConfig):getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);