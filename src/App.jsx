import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "./pages/Contact";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/AboutUs",
      element: <AboutUs />,
    },
    {
      path: "/Contact",
      element: <Contact />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
