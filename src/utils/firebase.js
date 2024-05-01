// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFAgyyvEbhvC7tQgTdf-wOlKUP9zYKSkQ",
  authDomain: "netflixgpt-e6ffe.firebaseapp.com",
  projectId: "netflixgpt-e6ffe",
  storageBucket: "netflixgpt-e6ffe.appspot.com",
  messagingSenderId: "928793991248",
  appId: "1:928793991248:web:f7b0abfc8fcda3fb849955",
  measurementId: "G-1R1TL50WEX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
