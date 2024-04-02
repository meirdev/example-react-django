import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

import { getUsers } from "../../api/client";
import { GetUsersResponse } from "../../api/types";

export default function UsersIndex() {
  const [users, setUsers] = useState<GetUsersResponse>([]);

  useEffect(() => {
    (async () => {
      const response = await getUsers();

      setUsers(response.data);
    })();
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr>
              <th>{user.id}</th>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
              <td>
                <div className="whitespace-nowrap">
                  <div className="lg:tooltip me-2" data-tip="Edit">
                    <button className="btn btn-sm">
                      <PencilIcon className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="lg:tooltip" data-tip="Delete">
                    <button className="btn btn-sm">
                      <TrashIcon className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
