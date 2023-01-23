import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  useParams
} from "react-router-dom";

import ErrorPage from "./error-page";

import HomePage from './routes/homePage';
import "./Css/index.css";
import Redirect from './routes/redirect';
import Directhome from './routes/directhome';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Directhome />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/api/:name/:id",
    element: <Redirect />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/homepage",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },


]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);


