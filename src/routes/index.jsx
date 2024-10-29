import { createBrowserRouter } from "react-router-dom";
import { Register } from "../pages/Register";
import { Login } from "../pages/Login/";
import { Home } from "../pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/cadastro",
    element: <Register />,
  },
]);
