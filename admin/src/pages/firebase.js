// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC157KRjMI9aY_u0-k9MVRU61CeAJ4CSW8",
  authDomain: "library-ea44c.firebaseapp.com",
  projectId: "library-ea44c",
  storageBucket: "library-ea44c.appspot.com",
  messagingSenderId: "476784808012",
  appId: "1:476784808012:web:616dfb241a06980d3ce4e9",
  measurementId: "G-WETWJG2X1D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)