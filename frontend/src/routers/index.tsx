import { createBrowserRouter } from "react-router-dom";

import Dashboard from "../pages/admin/Dashboard";
import Login from "../pages/admin/Login";
import Root from "../pages/admin/Root";
import UsersIndex from "../pages/admin/UsersIndex";

export default createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "users",
        element: <UsersIndex />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
