// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: `${process.env.FIREBASE_API_KEY}`,
  authDomain: "fir-c0d8f.firebaseapp.com",
  projectId: "fir-c0d8f",
  storageBucket: "fir-c0d8f.appspot.com",
  messagingSenderId: "856533553030",
  appId: "1:856533553030:web:049ca186121ff53b61a607",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const Auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
