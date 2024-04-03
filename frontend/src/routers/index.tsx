import { createBrowserRouter } from "react-router-dom";

import Dashboard from "../pages/admin/Dashboard";
import Login from "../pages/admin/Login";
import Root from "../pages/admin/Root";
import Users from "../pages/admin/users";

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
        element: <Users.List />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
