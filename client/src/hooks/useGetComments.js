import { useEffect } from "react";
import { useCurrentPost, useSetComments, useToken } from "../services/store";

const useGetComments = () => {
  const currentPost = useCurrentPost();
  const setComments = useSetComments();
  const token = useToken();
  useEffect(() => {
    (async () => {
      if (!currentPost) {
        setComments([])
        return;
      }
      const res = await fetch(`http://localhost:3001/comments/${currentPost}`, {
        method: "GET",
        headers: { Authorization: token },
      });

      const data = await res.json();
      setComments(data.comments);
    })();
  }, [currentPost]);
};
export default useGetComments;
