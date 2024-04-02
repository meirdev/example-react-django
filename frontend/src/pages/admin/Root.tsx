import { HomeIcon, UsersIcon } from "@heroicons/react/24/outline";
import { Link, Outlet } from "react-router-dom";

import { useIsLogged } from "../../hooks";

export default function Root() {
  useIsLogged();

  return (
    <div className="flex flex-row min-h-screen">
      <aside className="w-72 md:shadow transform -translate-x-full md:translate-x-0 transition-transform duration-150 ease-in p-4 bg-base-200">
        <ul className="menu bg-base-200 rounded-box">
          <li className="menu-title">Menu</li>
          <li>
            <Link to="/">
              <HomeIcon className="h-6 w-6" /> Dashboard
            </Link>
            <Link to="/users">
              <UsersIcon className="h-6 w-6" /> Users
            </Link>
          </li>
        </ul>
      </aside>
      <main className="flex flex-col flex-grow -ml-64 md:ml-0 transition-all duration-150 ease-in p-4">
        <Outlet />
      </main>
    </div>
  );
}
