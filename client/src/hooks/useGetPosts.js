import { useEffect } from "react";
import { useSetPosts, useToken } from "../services/store";

const useGetPosts = () => {
  const token = useToken();
  const setPosts = useSetPosts();
  useEffect(() => {
    (async () => {
      const res = await fetch(`http://localhost:3001/posts`, {
        method: "GET",
        headers: { Authorization: token  },
      });

      const data = await res.json();
      if (data) {
        setPosts(data.posts);
      }
    })();
  }, []);
};

export default useGetPosts;
