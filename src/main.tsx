import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import { About } from "./pages/About.tsx";

import "./index.css";
import GLTFExample from "./pages/GLTFExample.tsx";
import { Pages } from "./pages/Pages.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/gltf-example",
    element: <GLTFExample />,
  },
  {
    path: "/pages",
    element: <Pages />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
