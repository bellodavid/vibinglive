// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxESN2iJgY4hr2EPnlAHew3ED--Vugs6s",
  authDomain: "vibinglive-68c99.firebaseapp.com",
  projectId: "vibinglive-68c99",
  storageBucket: "vibinglive-68c99.appspot.com",
  messagingSenderId: "994040852084",
  appId: "1:994040852084:web:35b9d396ce06ca88546b21",
  measurementId: "G-03NCXZLCT5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
