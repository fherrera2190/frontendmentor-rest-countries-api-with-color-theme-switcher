import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import { CountryPage, Home } from "../paises";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    // children: [{ path: "country/:countryId", element: <CountryPage /> }],
  },
  { path: "country/:countryId", element: <CountryPage /> },

  { path: "*", element: <Root /> },
]);

function Root() {
  return (
    <Routes>
      <Route path="/*" element={<h1>Error 404</h1>} />
    </Routes>
  );
}

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
