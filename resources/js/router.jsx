import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";

// Aquí no usamos layout, solo Home
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

export default router;
