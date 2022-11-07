import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import ErrorPage from "./components/ErrorPage";
// actions and loaders
import NewClient, { action as newClientAction } from "./pages/NewClient";
import Index, { loader as customersLoader} from "./pages/Index";
import EditClient,{loader as editClientLoader, action as editClientAction} from "./pages/EditClient";
import {action as deleteClientAction} from "./components/Client"
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
        loader: customersLoader,
        errorElement: <ErrorPage/>
      },
      {
        path: "/customers/new",
        element: <NewClient />,
        action: newClientAction,
        errorElement: <ErrorPage/>
      },
      {
        
        path: "/customers/:clientId/edit",
        element: <EditClient />,
        loader: editClientLoader,
        action: editClientAction,
        errorElement: <ErrorPage/>
      },
      { 
        path: "/customers/:clientId/destroy",
        action: deleteClientAction,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
