import { useEffect, useState } from "react";
import { useToken, useUser } from "../services/store";

const useUserInfo = () => {
  const userID = useUser();
  const token = useToken();
  const [user, setUser] = useState({
    Username: "username",
    ProfileImageURL: "default.png",
  });

  const fetchUserInfo = async () => {
    try {
      const res = await fetch(`http://localhost:3001/users/${userID}`, {
        method: "GET",
        headers: { "Content-Type": "application/json", Authorization: token },
      });

      if (!res.ok) {
        throw new Error("Failed to fetch user information");
      }

      const data = await res.json();
      setUser(data.user);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUserInfo();
  }, [userID, token]);

  return user;
};

export default useUserInfo;
