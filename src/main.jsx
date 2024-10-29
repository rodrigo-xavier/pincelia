import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import './index.css';
import App from './App.jsx';
import React from "react";


const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/us",
          element: <App />
        },
        {
          path: "/pt",
          element: <App />
        },
      ],
    },
  ],
);

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route>
//       <Route path="/us" element={<App />} />
//       <Route path="/pt" element={<App />} />
//       <Route path="*" element={<App />} />
//     </Route>
//   )
// );

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
