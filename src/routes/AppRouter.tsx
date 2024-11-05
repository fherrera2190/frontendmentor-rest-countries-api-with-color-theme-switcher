import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CountryPage, Home } from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/country/:alpha",
    element: <CountryPage />,
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
