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
    exact: true,
    children: [
      {
        path: "/",
        element: <NotesListPage />,
      },
      {
        path: "/note/:id",
        element: <NotePage />,
      },
    ],
  },
]);

const App = () => {
  return (
    <div className="container dark">
      <div className="app">
        <RouterProvider router={router} />
      </div>
    </div>
  )
}

export default App