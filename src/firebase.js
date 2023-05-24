// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKgE2QmysOL2cJrY7uyIpJcfIKK44HDxE",
  authDomain: "week-meals-app.firebaseapp.com",
  projectId: "week-meals-app",
  storageBucket: "week-meals-app.appspot.com",
  messagingSenderId: "375215526544",
  appId: "1:375215526544:web:60be2d3135e8ae3e60be15"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);