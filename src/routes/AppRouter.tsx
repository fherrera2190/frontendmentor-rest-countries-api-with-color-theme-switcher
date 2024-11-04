import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
