import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from './pages/Home';
import Settings from './pages/Settings';

import './scss/reset.scss';
import './scss/main.scss';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/settings",
    element: <Settings />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
