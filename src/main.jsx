import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

import App from './App';

import './scss/reset.scss';
import './scss/main.scss';

/* onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log('user signed in')
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    // ...
  } else {
    console.log('user signed out')
    // User is signed out
    // ...
  }
}); */

/* const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/meals",
    element: <Meals />
  },
  {
    path: "/signup",
    element: <SignUp />
  }
]) */

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
