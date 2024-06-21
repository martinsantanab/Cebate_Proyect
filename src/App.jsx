import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';




function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },

  ]);
  return <RouterProvider router={router} />;
}

export default App;