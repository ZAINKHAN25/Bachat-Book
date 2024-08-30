import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import { createBrowserRouter, RouterProvider, } from "react-router-dom";

import Home from "./pages/Home/App.jsx";
import Login from "./pages/Login/App.jsx";
import Signup from "./pages/Signup/App.jsx";
import Income from "./pages/Income/App.jsx";
import Expense from "./pages/Expense/App.jsx";
import Savings from "./pages/Savings/App.jsx";
import Borrow from "./pages/Borrow/App.jsx";
import Wanted from "./pages/Wanted/App.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/income",
    element: <Income />,
  },
  {
    path: "/expense",
    element: <Expense />,
  },
  {
    path: "/savings",
    element: <Savings />,
  },
  {
    path: "/borrow",
    element: <Borrow />,
  },
  {
    path: "/wanted",
    element: <Wanted />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();