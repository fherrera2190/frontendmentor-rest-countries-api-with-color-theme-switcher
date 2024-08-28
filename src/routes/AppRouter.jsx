import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import { MainLayout } from "../app/layouts";

const router = createBrowserRouter([
  { path: "/", element: <MainLayout /> }, // 🆕
  { path: "*", element: <Root /> },
]);

function Root() {
  return (
    <Routes>
      {/* ⬆️ Home route lifted up to the data router */}
      <Route path="/blog/*" element={<h1>blog</h1>} />
      <Route path="/users/*" element={<h1>users</h1>} />
    </Routes>
  );
}

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
