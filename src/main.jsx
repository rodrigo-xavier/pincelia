import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import './index.css';
import App from './App.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/us" element={<App />} />
      <Route path="/pt" element={<App />} />
      <Route path="*" element={<App />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
