// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEUdXt-SRHU44SOrjOUcFgWHewMhtgG58",
  authDomain: "testreact-c60c5.firebaseapp.com",
  projectId: "testreact-c60c5",
  storageBucket: "testreact-c60c5.appspot.com",
  messagingSenderId: "521600204797",
  appId: "1:521600204797:web:2b472d910259dc0f03e394",
  measurementId: "G-D0FT2WGXCY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)