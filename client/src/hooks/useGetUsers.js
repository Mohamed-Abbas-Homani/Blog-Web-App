import { useEffect, useState } from "react";
import { useToken } from "../services/store";

const useGetUsers = () => {
  const token = useToken();
  const [users, setUsers] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await fetch(`http://localhost:3001/users`, {
        method: "GET",
        headers: { Authorization: token },
      });

      const data = await res.json();
      if (data) {
        setUsers(data.users);
      }
    })();
  }, []);

  return users;
};

export default useGetUsers