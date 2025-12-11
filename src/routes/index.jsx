import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import CreateUsers from "../pages/CreateUsers";
import UserPage from "../pages/UserPage";
import ErrorPage from "../pages/Error";

function Routes() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayouts />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/create-user",
          element: <CreateUsers />,
        },
        {
          path: "/user-page/:id",
          element: <UserPage />,
        },
        {
          path: "*",
          element: <ErrorPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default Routes;
