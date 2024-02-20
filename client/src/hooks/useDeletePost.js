import { useSetPosts, useToken } from "../services/store";

const useDeletePost = (postID) => {
  const token = useToken();
  const setPosts = useSetPosts()
  return async() => {
    const res = await fetch(`http://localhost:3001/posts/${postID}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json", Authorization: token },
    })

    const data = await res.json()
    setPosts(data.posts)
  }
};

export default useDeletePost