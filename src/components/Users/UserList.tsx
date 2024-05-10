import React, { useState, useEffect } from "react";

import { calculator } from "../../helpers/calculator";

import type { User } from "../../types";
import { SingleUser } from "./SingleUser";

export const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((json) => setUsers(json.users));
  }, []);

  return (
    <div>
      {users.map((user) => (
        <SingleUser
          key={user.id}
          id={user.id}
          firstName={user.firstName}
          lastName={user.lastName}
        />
      ))}
    </div>
  );
};
