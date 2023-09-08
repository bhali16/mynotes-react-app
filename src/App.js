import * as React from "react";
import "./App.css";

import Header from "./components/Header";
import NotePage from "./pages/NotePage";
import NotesListPage from "./pages/NotesListPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    exact: true, // Add the exact prop here
    children: [
      {
        path: "/",
        element: <NotesListPage />,
      },
      {
        path: "/note",
        element: <NotePage />,
      },
    ],
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App